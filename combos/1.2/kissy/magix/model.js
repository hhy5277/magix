/**
 * @fileOverview Model
 * @version 1.1
 * @author 行列
 */
KISSY.add('magix/model', function(S, Magix) {
    /**
 * Model类
 * @name Model
 * @namespace
 * @class
 * @constructor
 * @property {String} id model唯一标识
 * @property {Boolean} fromCache 在与ModelManager配合使用时，标识当前model对象是不是从缓存中来
 */

var Has = Magix.has;
var IsObject = Magix._o;
var ToString = Magix.toString;
var Model = function() {
    this.id = 'm' + COUNTER++;
};
var GetParams = function(me, type) {
    return Magix.toUrl(EMPTY, me['\u001a' + type]).replace(FixParamsReg, EMPTY);
};
var SetParams = function(me, obj1, obj2, ignoreIfExist, type) {
    var k = '\u001a' + type,
        t, p, obj;
    if (!me[k]) me[k] = {};
    obj = me[k];
    if (Magix._f(obj1)) {
        obj1 = Magix.tryCall(obj1);
    }
    if (obj1 && !IsObject(obj1)) {
        t = {};
        t[obj1] = ~ (obj1 + EMPTY).indexOf('=') ? EMPTY : obj2; //like a=b&c=d => {'a=b&c=d':'&'}
        obj1 = t;
    }
    for (p in obj1) {
        if (!ignoreIfExist || !Has(obj, p)) {
            obj[p] = obj1[p];
        }
    }
};
var FixParamsReg = /^\?|=(?=&|$)/g;
var GET = 'GET',
    POST = 'POST';


Magix.mix(Model.prototype, {
    /**
     * @lends Model#
     */
    /**
     * url映射对象
     * @type {Object}
     */
    /*urlMap: {

    },*/
    /**
     * Model调用request方法后，与服务器同步的方法，供应用开发人员覆盖
     * @function
     * @param {Function} callback 请求完成后的回调，回调时第1个参数是错误对象，第2个是数据
     * @return {XHR} 最好返回异步请求的对象
     */
    sync: NOOP,
    /**
     * 处理Model.sync成功后返回的数据
     * @function
     * @param {Object|String} resp 返回的数据
     * @return {Object}
     */
    /* parse: function(r) {
        return r;
    },*/
    /**
     * 获取参数对象
     * @param  {String} [type] 参数分组的key[GET,POST]，默认为GET
     * @return {Object}
     */
    /*getParamsObject:function(type){
            if(!type)type=GET;
            return this['\u001a'+type]||null;
        },*/
    /**
     * 获取参数对象
     * @return {Object}
     */
    /* getUrlParamsObject:function(){
            return this.getParamsObject(GET);
        },*/
    /**
     * 获取Post参数对象
     * @return {Object}
     */
    /*getPostParamsObject:function(){
            return this.getParamsObject(POST);
        },*/
    /**
     * 获取通过setPostParams放入的参数
     * @return {String}
     */
    getPostParams: function() {
        return GetParams(this, POST);
    },
    /**
     * 获取通过setUrlParams放入的参数
     * @return {String}
     */
    getUrlParams: function() {
        return GetParams(this, GET);
    },
    /**
     * 获取参数
     * @param {String} [type] 参数分组的key[GET,POST]，默认为GET
     * @return {String}
     */

    /*var k = '\u001a' + type;
        var params = me[k];
        var arr = [];
        var v;
        for (var p in params) {
            v = params[p];
            if (v == Model.X && p.indexOf('=') > -1) { //undefined and key like a=b&c=d
                arr.push(p);
            } else {
                arr.push(p + '=' + Encode(v));
            }
            /*if (!Magix._a(v)) {
                v = [v];
            }
            for (var i = 0; i < v.length; i++) {
                arr.push(p + '=' + Encode(v[i]));
            }*/
    /*}
        return arr.join('\u001a');*/
    /**
     * 设置post参数
     * @function
     * @param {Object|String} obj1 参数对象或者参数key
     * @param {String} [obj2] 参数内容
     * @param {Boolean} [ignoreIfExist] 如果存在，则忽略本次的设置
     */
    setPostParams: function(obj1, obj2, ignoreIfExist) {
        SetParams(this, obj1, obj2, ignoreIfExist, POST);
    },
    /**
     * 设置url参数
     * @function
     * @param {Object|String} obj1 参数对象或者参数key
     * @param {String} [obj2] 参数内容
     * @param {Boolean} [ignoreIfExist] 如果存在，则忽略本次的设置
     */
    setUrlParams: function(obj1, obj2, ignoreIfExist) {
        SetParams(this, obj1, obj2, ignoreIfExist, GET);
    },
    /**
     * @private
     */
    /*removeParamsObject:function(type){
            if(!type)type=GET;
            delete this['\u001a'+type];
        },*/
    /**
     * @private
     */
    /*removePostParamsObject:function(){
            this.removeParamsObject(POST);
        },*/
    /**
     * @private
     */
    /*removeUrlParamsObject:function(){
            this.removeParamsObject(GET);
        },*/
    /**
     * 重置缓存的参数对象，对于同一个model反复使用前，最好能reset一下，防止把上次请求的参数也带上
     */
    /*reset: function() {
        var me = this;
        var keysCache = me.$types;
        if (keysCache) {
            for (var p in keysCache) {
                delete me['\u001a' + p];
            }
            delete me.$types;
        }
        var keys = me.$keys;
        var attrs = me.$attrs;
        if (keys) {
            for (var i = 0; i < keys.length; i++) {
                delete attrs[keys[i]];
            }
            delete me.$keys;
        }
    },*/
    /**
     * 获取属性
     * @param {String} [key] 要获取数据的key
     * @param {Object} [dValue] 当根据key取到的值为falsy时，使用默认值替代，防止代码出错
     * @return {Object}
     * @example
     * MM.fetchAll({
     *     name:'Test'
     * },function(e,m){
     *     var obj=m.get();//获取所有数据
     *
     *     var list=m.get('list',[]);//获取list数据，如果不存在list则使用空数组
     *
     *     var count=m.get('data.info.count',0);//获取data下面info下count的值，您无须关心data下是否有info属性
     *
     * });
     */
    get: function(key, dValue, udfd) {
        var me = this;
        var alen = arguments.length;

        var hasDValue = alen == 2;
        var attrs = me.$attrs;
        if (alen) {
            var tks = (key + EMPTY).split('.');
            while (attrs && tks[0]) {
                attrs = attrs[tks.shift()];
            }
            if (tks[0]) {
                attrs = udfd;
            }
        }
        if (hasDValue && ToString.call(dValue) != ToString.call(attrs)) {
            attrs = dValue;
        }
        return attrs;
    },
    /**
     * 设置属性
     * @param {String|Object} key 属性对象或属性key
     * @param {Object} [val] 属性值
     */
    set: function(key, val) {
        var me = this;
        if (!me.$attrs) me.$attrs = {};
        /* if (saveKeyList && !me.$keys) {
            me.$keys = [];
        }*/
        if (key) {
            if (!IsObject(key)) {
                var t = {};
                t[key] = val;
                key = t;
            }
            for (var p in key) {
                //if (!Has(val, p)) {
                me.$attrs[p] = key[p];
                //}
            }
        }
    },
    /**
     * 向服务器请求，加载或保存数据
     * @param {Function} callback 请求成功或失败的回调
     */
    request: function(callback, options) {
        var me = this;
        if (!me.$ost) {
            var temp = function(err, data) {
                if (!me.$ost) {
                    //if (err) {
                    // callback(err, data, options);
                    //} else {
                    if (!IsObject(data)) {
                        data = {
                            data: data
                        };
                    }
                    me.set(data);
                    //}
                    callback(err, options);
                }
            };
            me.$tspt = me.sync(me.$temp = temp);
        }
    },
    /**
     * 中止请求
     */
    destroy: function() {
        var me = this;
        var tspt = me.$tspt;
        var fn = me.$temp;
        if (fn) {
            fn('abort');
            me.$temp = 0;
        }
        me.$ost = 1;
        if (tspt && tspt.abort) {
            tspt.abort();
        }
        me.$tspt = 0;
    }
});
    Model.extend = function(props, statics, ctor) {
        var me = this;
        var BaseModel = function() {
            me.call(this);
            if (ctor) {
                ctor.call(this);
            }
        };
        return S.extend(BaseModel, me, props, statics);
    };
    return Model;
}, {
    requires: ['magix/magix']
});