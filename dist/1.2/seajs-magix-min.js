(function(e,t,n,r,i,a,o,s,f,c){c=1,f=function(e){return e.id||(e.id="mx_n_"+c++)},s("magix/magix",function(){var n=/\/\.(?:\/|$)|\/[^\/.]+?\/\.{2}(?:\/|$)|([^:\/])\/\/+|\.{2}\//,o=/\/[^\/]*$/,s=/[#?].*$/,f=/([^=&?\/#]+)=?([^&=#?]*)/g,u=/^https?:\/\//i,h="/",v="vframe",l=t.console,d=l&&l.error,m={tagName:v,rootId:"magix_vf_root",coded:1,error:d?function(e){l.error(e)}:r},p=m.hasOwnProperty,g=function(e,t){return e&&p.call(e,t)},y=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=P._o(n)?b(t,n):g(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},w=function(e,t){return t.f-e.f||t.t-e.t},x=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new x(e,t),n},b=function(e,t,n,r){for(r in t)n&&g(n,r)||(e[r]=t[r]);return e};b(x.prototype,{get:function(e){var t,n=this,r=n.c;return e=i+e,g(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,a=r.c,o=i+e,s=a[o];if(!g(a,o)){if(a.length>=r.x){a.sort(w);for(var f=r.b;f--;)s=a.pop(),s.f>0&&r.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=c++,s.m=n,t},del:function(e){e=i+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=a,delete t[e],n.m&&(_(n.m,n.o,n),n.m=a))},has:function(e){return g(this.c,i+e)}});var C=x(40),M=x(),_=function(e,t,n,r,i,a){for(P._a(e)||(e=[e]),t&&(P._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){m.error(o)}return i},q=function(e,t,n){if(m.coded)try{n=decodeURIComponent(n)}catch(r){}q.p[t]=n},P={mix:b,has:g,tryCall:_,config:y(m),start:function(e){var t=this;b(m,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){m=b(m,i,e),m["!tnc"]=m.tagName!=v,n.on("!ul",r.loc),n.on("changed",r.loc),t.use(m.extensions,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)g(e,t)&&n.push(t);return n},local:y({}),path:function(e,t){var r=e+i+t,f=M.get(r);if(!M.has(r)){for(u.test(t)?e=a:(e=e.replace(s,a).replace(o,a)+h,t.charAt(0)==h&&(e=e.substring(0,e.indexOf(h,u.test(e)&&8)))),f=e+t;n.test(f);)f=f.replace(n,"$1/");M.set(r,f)}return f},toObject:function(e){var t,n,r=C.get(e);return r||(q.p=t={},n=e.replace(s,a),~n.indexOf("=")&&(n=a),e.replace(n,a).replace(f,q),C.set(e,r=[n,t])),{path:r[0],params:b({},r[1])}},toUrl:function(e,t,n){var r,i,a=[];for(i in t)r=t[i],(!n||r||g(n,i))&&(m.coded&&(r=encodeURIComponent(r)),a.push(i+"="+r));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t,n){var r,i,a,o={};if(n=n||1,e&&(a=e.length))for(r=0;a>r;r++)i=e[r],o[t?i[t]:i]=t?i:n;return o},cache:x},k=Object.prototype.toString,V=function(){};return b(P,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},extend:function(e,t,n,r){var i=t.prototype;i.constructor=t,V.prototype=i;var a=new V;return b(a,n),b(e,r),a.constructor=e,e.prototype=a,e}})}),s("magix/event",function(e){var t=e("./magix"),n=t.tryCall,r={fire:function(e,t,r,a){var o=i+e,s=this,f=s[o];if(f){t||(t={}),t.type||(t.type=e);for(var c,u,h=f.length,v=h-1;h--;)c=a?h:v-h,u=f[c],(u.d||u.r)&&(f.splice(c,1),v--),u.d||n(u.f,t,s);r=r||0>v}r&&delete s[o]},on:function(e,t,r,a){var o=this,s=i+e,f=o[s]||(o[s]=[]),c={f:t},u=0|r;u!==r?(r&&r.on&&a&&(r.on(a,function(){c.r=1},n),r=0),c.r=r,f.push(c)):f.splice(u,0,c)},off:function(e,t){var n=i+e,r=this[n];if(r)if(t){for(var a,o=r.length-1;o>=0;o--)if(a=r[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,n)}};return t.mix(t.local,r),r}),s("magix/router",function(e){var n,r,a,s,f,c,u=e("./magix"),h=e("./event"),v="",l="path",d="view",m=u.has,p=u.mix,g=u.keys,y=u.toUrl,w=u.toObject,x=u.config(),b=u.cache(),C=u.cache(),M=t.location,_=t.history,q={params:{},href:v},P=/(?:^https?:\/\/[^\/]+|#.*$)/gi,k=/^[^#]*#?!?/,V="params",I=function(e,t,n){if(e){n=this[V],e=(e+v).split(o);for(var r=0;e.length>r&&!(t=m(n,e[r]));r++);}return t},A=function(){return this[l]},j=function(){return this[d]},T=function(e,t,n,r){return n=this,r=n[V],arguments.length>1?r[e]=t:r[e]||v},O=function(e,t){var n,i,a,o;return r||(r={rs:x.routes||{},nf:x.unfoundView},a=x.defaultView,r.dv=a,o=x.defaultPath||v,n=r.rs,r.f=u._f(n),r.f||n[o]||!a||(n[o]=a),r[l]=o),e||(e=r[l]),n=r.rs,i=r.f?n.call(x,e,t):n[e],{view:i||r.nf||r.dv,path:e}},U=function(e,t){var n=e.href,r=t.href,a=n+i+r,o=C.get(a);if(!o){var s,f,c,u;o={isParam:I,isPath:A,isView:j},o[d]=c,o[l]=c,o[V]=u={};var h,v,m=e[V],p=t[V],$=[l,d].concat(g(m),g(p));for(h=$.length-1;h>=0;h--)v=$[h],1==h&&(m=e,p=t,u=o),f=m[v],c=p[v],f!=c&&(u[v]={from:f,to:c},s=1);C.set(a,o=[s,o])}return o},N=p({start:function(){a=x.edge,s=a&&_.pushState,f=a&&!s,c=s?"srcQuery":"srcHash",s?N.useState():N.useHash(),N.route()},parse:function(e,t){e=e||M.href;var n,r,i,o,s,c,h=b.get(e);return h||(i=e.replace(P,v),o=e.replace(k,v),s=w(i),c=w(o),f&&(c[l]=u.path(M.pathname,c[l])),h={get:T,set:T,href:e,refHref:q.href,srcQuery:i,srcHash:o,query:s,hash:c,params:p(p({},s[V]),c[V])},b.set(e,h)),t&&!h[d]&&(r=h.hash[l]||a&&h.query[l],n=O(r,h),p(h,n)),h},route:function(){var e=N.parse(0,1),t=!q.get,r=U(q,e);q=e,r[0]&&(n=e,N.fire("changed",{location:e,changed:r[1],force:t}))},navigate:function(e,t,r){if(n){!t&&u._o(e)&&(t=e,e=v);var i=w(e),o=n.query[V],h=i[V],d=i[l],g=n[l];if(p(h,t),d){if(d=u.path(g,d),f)for(var $ in o)m(o,$)&&!m(h,$)&&(h[$]=v)}else d=g,h=p(p({},n[V]),h);d=y(d,h,a?l:o),d!=n[c]&&(s?(N.poped=1,_[r?"replaceState":"pushState"](v,v,d),N.route()):(p(i,n,i),i.srcHash=d,N.fire("!ul",{loc:n=i}),d="#!"+d,r?M.replace(d):M.hash=d))}}},h);return N.useState=function(){var e=N,t=location.href;$(window).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},N.useHash=function(){$(window).on("hashchange",N.route)},N}),s("magix/vom",function(e){var t=e("./vframe"),n=e("./magix"),r=e("./event"),i=n.has,a=n.mix,o={},s={},f={},c=n.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,c.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var n=o[e];n&&(delete o[e],c.fire("remove",{vframe:n,fcc:t}))},loc:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(s,r),!n){a(f,e.changed);var i=t.root(c,s,f);f.view?i.mountView(r.view):i.locChged()}}},r);return c}),s("magix/vframe",function(t){var r,i,s,c,u,h,v,l,d,m,p,g=t("./magix"),$=t("./event"),y=t("./view"),w=g.tryCall,x=[],b=g.mix,C=g.config(),M="mx-vframe",_=g.has,q="querySelectorAll",P="alter",k="created",V=function(e){return"object"==typeof e?e:n.getElementById(e)},I=function(e,t,i){return t=V(e),t&&(i=s?n[q]("#"+f(t)+u):t.getElementsByTagName(r)),i||x},A=function(e,t,n){if(e=V(e),t=V(t),e&&t)if(e!==t)try{n=h?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},j=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1,t.rM={},t.owner=p,p.add(e,t)};return j.root=function(t,a,o){if(!v){r=C.tagName,i=C["!tnc"],s=i&&n[q],u=" "+r+"["+M+"=true]",c=i&&!s;var f=n.body;h=f.contains,d=a,m=o,p=t;var l=C.rootId,g=V(l);g||(g=n.createElement(r),g.id=l,f.appendChild(g),g=e),v=new j(l)}return v},b(b(j.prototype,$),{mountView:function(e,t,n){var r=this,i=V(r.id);if(!r._a&&i&&(r._a=1,r._t=i.innerHTML),r.unmountView(n),r._d=0,e){r.path=e;var a=g.toObject(e),o=a.path,s=++r.sign;g.use(o,function(e){if(s==r.sign){y.prepare(e,p);var n=new e({owner:r,id:r.id,$:V,$i:A,path:o,vom:p,location:d});r.view=n;var f=function(e){r.mountZoneVframes(e.id)};n.on("interact",function(){n.hasTmpl||(i&&(i.innerHTML=r._t),f(V)),n.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),n.on("rendered",f),n.on("prerender",function(e){r.unmountZoneVframes(e.id,0,1)||r.cAlter()})},0),n.load(b(a.params,t),m)}})}},unmountView:function(e){var t=this,n=t.view;if(n){l||(l={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(l),t.view=0,n.oust();var r=V(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),l=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=p.get(e);return o||(o=new j(e),o.pId=a.id,_(a.cM,e)||a.cC++,a.cM[e]=1),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=I(e),o=a.length,s={};if(o)for(var u,h,v,l,d=0;o>d;d++)if(u=a[d],h=f(u),!_(s,h)&&(v=u.getAttribute("mx-view"),l=c?u.getAttribute(M):1,l||v)){i.mountVframe(h,v,t,n,r);for(var m,p=I(u),g=0,$=p.length;$>g;g++)m=p[g],s[f(m)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=p.get(e);if(i){var a=i.fcc;i.unmountView(t),p.remove(e,a);var o=p.get(i.pId);o&&_(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||A(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},parent:function(e){var t=this,n=t;for(e=e>>>0||1;n&&e--;)n=p.get(n.pId);return n},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=w(a,t||x,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(k,e),t.fire(k,e));var r=t.id,i=p.get(t.pId);i&&!_(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(P,e),t.fire(P,e));var i=p.get(t.pId);i&&_(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var n=t.olChg(m),r={location:d,changed:m,prevent:function(){this.cs=x},to:function(e){e=(e+a).split(o),this.cs=e||x}};n&&t.render(r);for(var i,s=r.cs||g.keys(e.cM),f=0,c=s.length;c>f;f++)i=p.get(s[f]),i&&i.locChged()}}}),j}),s("magix/view",function(s){var c,u=s("./magix"),h=s("./event"),v=s("./router"),l={focus:2,blur:2,mouseenter:2,mouseleave:2},d=$.now(),m=function(e,t,n,r,i,o){var s=l[t];if(i){n.$n||(n.$n=d--);var f="_$"+n.$n;i[f]||(i[f]=function(){n.apply(i,arguments)}),n=i[f]}o||2!=s?$(e)[r?"off":T](t,n):$(e)[(r?"un":a)+"delegate"]("[mx-"+t+"]",t,n)},p=u.tryCall,g=u.has,y=[],w=u.mix,x=0,b="destroy",C=u.cache(40),M=/(\w+)(?:<(\w+)>)?(?:\({([\s\S]*)}\))?/,_=/(\w+):(['"]?)([\s\S]*?)\2(?=(?:,\w+:|$))/g,q=/([$\w]+)<([\w,]+)>/,P={},k="mx-ei",V=n.body,I="parentNode",A={},j=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,T="on",O="",U=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),S(t),p(e,arguments,t))}},N=function(e,t,n,r){N.p[t]=r},S=function(e,t){var n,r,i=e.$res;for(n in i)r=i[n],(t||!r.mr)&&E(i,n,t)},E=function(e,t,n){var r,i,a=e[t];a&&(r=a.e,i=r&&r[b],i&&p(i,y,r),(!a.hk||n)&&delete e[t])},H=function(e,t){var n,r,i=e.$evts;for(n in i)D(n,t);for(i=e.$sevts,n=i.length;n-->0;)r=i[n],m(r.h,r.t,r.f,t,e,1)},R=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},L=function(e,t,n,r){return t+=a,r=e+i,t=n?[a].concat(t).join(O+r):t.replace(j,"$&"+r)},Z=function(t){if(t&&!t[T]){var n=t.target;t[T]=1;for(var r,a,s,u=n,h=t.type,v=A[h]||(A[h]=RegExp(o+h+"(?:,|$)")),l="mx-"+h,d=[];u&&1==u.nodeType&&(r=R(u,l),a=R(u,k),!r&&!v.test(a));)d.push(u),u=u[I];if(r){for(var m,p,$,y,w,x,b,C,M,_=r.split(O);_.length;)if(p=_.shift()){if($=p.split(i),p=$.pop(),x=$[0],!x&&!m)for(b=u,C=c.all();b;){if(g(C,M=b.id)){R(u,l,(x=M)+i+r);break}b=b[I]}if(m=1,!x)throw Error("bad:"+p);y=c.get(x),w=y&&y.view,w&&(t.currentId=f(u),t.targetId=f(n),t.prevent=t.preventDefault,t.stop=t.stopPropagation,w.pEvt(p,h,t))}}else{for(;d.length;)s=d.pop(),a=R(s,k)||T,v.test(a)||(a=a+o+h,R(s,k,a));s=e}u=n=e}},D=function(e,t){var n=0|P[e],r=n>0?1:0;n+=t?-r:r,n||(m(V,e,Z,t),t||(n=1)),P[e]=n},z=function(e){var t=this;w(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),p(z.$,e,t)},K=z.prototype,B={$win:t,$doc:n};z.$=[],z.prepare=function(e,t){if(!e[i]){e[i]=1,c=t;var n,a,s,f,u,h,v=e.prototype,l={},d=[];for(var m in v)if(n=v[m],a=m.match(q))for(s=a[1],f=a[2],f=f.split(o),u=f.length-1;u>-1;u--)a=f[u],h=B[s],h?d.push({n:s,t:a,h:h,f:n}):(l[a]=1,v[s+i+a]=n);else"render"==m&&n!=r&&(v[m]=U(n));v.$evts=l,v.$sevts=d}},z.mixin=function(e,t){t&&z.$.push(t),w(K,e)},w(w(K,h),{render:r,wrapEvent:L,navigate:v.navigate,init:r,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.tmpl=L(e.id,r)),H(e),e.fire("interact",0,1),p(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(n.innerHTML=t)),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;u._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+a).split(o)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(b,0,1,1),S(e,1),H(e,1)),e.sign--},pEvt:function(e,t,n){var r=this;if(r.sign>0){var a=C.get(e);a||(a=e.match(M),a={n:a[1],f:a[2],i:a[3],p:N.p={}},a.i&&a.i.replace(_,N),C.set(e,a));var o=a.n+i+t,s=r[o];s&&(n[a.f]&&n[a.f](),n.params=a.p,p(s,n,r))}},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,n,r=this;for(n in r.$ns)if(t=r.$i(e,n))break;return t},manage:function(e,t){var n=this,r=arguments.length,o=1,s=n.$res;1==r&&(t=e,e=a),E(s,e),e||(o=0,e="res_"+x++);var f={hk:o,e:t,mr:t&&t[i]==i};return s[e]=f,t},getManaged:function(t,n){var r=this,i=r.$res,a=e;if(g(i,t)){var o=i[t];a=o.e,n&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){E(this.$res,e,1)}});var F={},Q="?t="+Math.random(),G={},J={};return K.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(g(G,e))t(G[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);F[a]||(F[a]=seajs.data.paths[a]);var o=F[a]+e.substring(i+1)+".html",s=J[o],f=function(n){t(G[e]=n)};s?s.push(f):(s=J[o]=[f],$.ajax({url:o+Q,success:function(e){p(s,e),delete J[o]},error:function(e,t){p(s,t),delete J[o]}}))}},z.extend=function(e,t,n){var r=this,i=function(e){r.call(this,e),n&&n.call(this,e)};return i.extend=r.extend,u.extend(i,r,e,t)},z}),s("magix/model",function(e){var t=e("./magix"),n=t.has,o=t._o,s=t.toString,f="GET",u="POST",h=function(){this.id="m"+c++},v=function(e){return function(r,a,s){var f,c,u,h=this,v=i+e;h[v]||(h[v]={}),u=h[v],t._f(r)&&(r=t.tryCall(r)),r&&!o(r)&&(f={},f[r]=a,r=f);for(c in r)s&&n(u,c)||(u[c]=r[c])}};return t.mix(h.prototype,{sync:r,getPostParams:function(){return this[i+u]},getUrlParams:function(){return this[i+f]},setPostParams:v(u),setUrlParams:v(f),get:function(e,t,n){var r=this,i=arguments.length,o=2==i,f=r.$attrs;if(i){for(var c=(e+a).split(".");f&&c[0];)f=f[c.shift()];c[0]&&(f=n)}return o&&s.call(t)!=s.call(f)&&(f=t),f},set:function(e,t){var n=this;if(n.$attrs||(n.$attrs={}),e){if(!o(e)){var r={};r[e]=t,e=r}for(var i in e)n.$attrs[i]=e[i]}},request:function(e,t){var n=this;if(!n.$ost){var r=function(r,i){n.$ost||(o(i)||(i={data:i}),n.set(i),e(r,t))};n.$tspt=n.sync(n.$temp=r)}},destroy:function(){var e=this,t=e.$tspt,n=e.$temp;n&&(n("abort"),e.$temp=0),e.$ost=1,t&&t.abort&&t.abort(),e.$tspt=0}}),h.extend=function(e,n,r){var i=this,a=function(){i.call(this),r&&r.call(this)};return t.extend(a,i,e,n)},h}),s("magix/mmanager",function(n){var r=n("./magix"),s=n("./event"),f=r.has,u=r.tryCall,h=r._a,v=r._f,l=r._o,d=1,m=2,p=4,g="postParams",$="urlParams",y=Date.now||function(){return+new Date},w=t.JSON,x=r.mix,b=12e5,C=function(e,t,n,r){if(v(e))t&&(n=C(u(e)));else if(w)n=w.stringify(e);else if(l(e)||h(e)){n=[];for(r in e)f(e,r)&&n.push(r,i,C(e[r]))}else n=e;return n},M=function(e,t,n){for(var r,a=[t.name,C(n)],o={},s=e.length-1;s>-1;s--)r=e[s],o[r]||a.push(o[r]=C(t[r],1),C(n[r],1));return a.join(i)},_=function(e){var t=e.cache;return t&&(t=t===!0?b:0|t),t},q=function(e){throw Error(e)},P=function(e,t){var n=this;n.$mClz=e,n.$mCache=r.cache(),n.$mReqs={},n.$mMetas={},n.$sKeys=(t&&(a+t).split(o)||[]).concat(g,$),n.id="mm"+c++,u(P.$,arguments,n)},k=[].slice,V=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},I=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],u(a,e,i.e)}},A=function(t,n,r){var i,a,o=this,s=n.a,f=n.c,c=n.d,h=n.g,v=n.i,l=n.j,g=n.k,$=n.l,w=n.m,x=n.n,b=n.o;n.b++,delete f[o.id];var C=o.$mm,M=C.key;if(c[t]=o,r)n.e=1,i=1,n.f=r,h.msg=r,h[t]=r,l.fire("fail",{model:o,msg:r}),a=1;else{if(!v.has(M)){M&&v.set(M,o),C.time=y();var _=C.done;_&&u(_,o),C.cls&&l.clearCache(C.cls),l.fire("done",{model:o}),a=1}o.fromCache=C.used>0,C.used++}if(!s.$ost){if(g==d){var q=$?w[t]:w;q&&(x[t]=u(q,[i?h:e,o,h],s))}else if(g==m){b[t]={m:o,e:i,s:r};for(var P,k,V=b.i||0;P=b[V];V++)k=$?w[V]:w,P.e&&(h.msg=P.s,h[V]=P.s),x[V]=u(k,[P.e?h:e,P.m,h].concat(x),s);b.i=V}n.b==n.h&&(n.e||(h=e),x.unshift(h),g==p&&(c.unshift(h),x[1]=u(w,c,s)),s.$busy=0,s.doNext(x)),a&&l.fire("finish",{msg:r,model:o})}},j=function(e,t,n,r,i){if(e.$busy)return e.next(function(){this.send(t,n,r,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,s=a.$mReqs,c=e.$reqs;h(t)||(t=[t]);var u=t.length,v=[],l=h(n);l&&(v=Array(n.length));for(var d,m={a:e,b:0,c:e.$reqs,d:Array(u),g:{},h:u,i:o,j:a,k:r,l:l,m:n,n:v,o:[]},p=0;t.length>p;p++)if(d=t[p]){var g=a.getModel(d,i),$=g.entity,y=$.$mm.key,w=V(A,$,p,m);w.id=e.id,y&&f(s,y)?s[y].q.push(w):g.update?(c[$.id]=$,y&&(s[y]={q:[w],e:$},w=I),$.request(w,{a:s,b:y})):w()}else q("empty model");return e},T=function(e,t){return function(n,r){var i=k.call(arguments,1);return j(this,n,i.length>1?i:r,e,t)}};x(P,{create:function(e,t){return new P(e,t)},mixin:function(e,t){t&&P.$.push(t),x(P.prototype,e)},$:[]});var O=function(e){var t=this;t.$host=e,t.$reqs={},t[i]=i,t.sign=1,t.id="mr"+c++,t.$queue=[]};return x(O.prototype,{fetchAll:function(e,t){return j(this,e,t,p)},save:function(e,t){return j(this,e,t,p,1)},fetchOrder:T(m),fetchOne:T(d),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mReqs;for(var i in n){var a,o,s=n[i],c=s.$mm.key,h=[],v=[];if(c&&f(r,c)){a=r[c],o=a.q;for(var l,d=0;o.length>d;d++)l=o[d],l.id!=e.id?h.push(l):v.push(l)}h.length?(u(v,"abort",a.e),a.q=h):s.destroy()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;return t.$queue.push(e),t.doNext(t.$args),t},doNext:function(e){var t=this;if(!t.$busy){t.$busy=1;var n=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var r,i=t.$queue,a=i.shift();a&&(r=u(a,e,t),n==t.sign&&t.doNext(r===i.$?e:[null,r]))},0)}},destroy:function(){var e=this;e.$ost=1,e.stop()}}),P.mixin(s),P.mixin({registerModels:function(e){var t=this,n=t.$mMetas;h(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&q("already exist:"+i):q("miss name"),a=_(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){x(this,e)},create:function(e){var t=this,n=t.getMeta(e),r=_(e)||n.cache,i=new t.$mClz;return i.set(n),i.$mm={used:0,name:n.name,done:n.done,cls:n.cleans,key:r&&M(t.$sKeys,n,e)},e.name&&i.set(e),i.setUrlParams(n[$]),i.setPostParams(n[g]),i.setUrlParams(e[$]),i.setPostParams(e[g]),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||q("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCached(e)),n||(r=1,n=i.create(e)),{entity:n,update:r}},createMRequest:function(e,t){return e.manage(t,new O(this))},clearCache:function(e){var t=this,n=t.$mCache,i=n.list();e=r.toMap((e+a).split(o));for(var s=0;i.length>s;s++){var c=i[s],u=c.v,h=u&&u.$mm;h&&f(e,h.name)&&n.del(h.key)}},getCached:function(e){var t,n,r=this,i=r.$mCache,a=r.getMeta(e),o=_(e)||a.cache;if(o&&(n=M(r.$sKeys,a,e)),n){var s=r.$mReqs,f=s[n];f?t=f.e:(t=i.get(n),t&&o>0&&y()-t.$mm.time>o&&(i.del(n),t=0))}return t}}),P}),n.createElement("vframe")})(null,this,document,function(){},"","",",",define);