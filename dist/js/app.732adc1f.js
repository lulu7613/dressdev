(function(e){function n(n){for(var r,c,a=n[0],i=n[1],d=n[2],h=0,f=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-04e08c74":"ebd58256","chunk-0d5493ab":"baf4485b","chunk-16e754ec":"89634ccb","chunk-2d0a4daa":"283b2d4b","chunk-2d0c13d6":"09549e5b","chunk-2d23012c":"97c46096","chunk-2d3fc1e6":"a32552df","chunk-4c5b82e2":"e309bdb9","chunk-2d217def":"875fca5b","chunk-7e6ba612":"df84d982","chunk-7e835253":"c5929e7b","chunk-7e83b537":"5c22401c","chunk-a0a7bdb0":"cc952972","chunk-e614a36e":"9325fd7a","chunk-fb86b8fa":"baff6f08","chunk-581e787c":"8747100c","chunk-5b541e10":"629705d2"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-04e08c74":1,"chunk-0d5493ab":1,"chunk-2d3fc1e6":1,"chunk-4c5b82e2":1,"chunk-a0a7bdb0":1,"chunk-e614a36e":1,"chunk-fb86b8fa":1,"chunk-581e787c":1,"chunk-5b541e10":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-04e08c74":"02869f11","chunk-0d5493ab":"e1006d56","chunk-16e754ec":"31d6cfe0","chunk-2d0a4daa":"31d6cfe0","chunk-2d0c13d6":"31d6cfe0","chunk-2d23012c":"31d6cfe0","chunk-2d3fc1e6":"15a56e72","chunk-4c5b82e2":"d37c0c57","chunk-2d217def":"31d6cfe0","chunk-7e6ba612":"31d6cfe0","chunk-7e835253":"31d6cfe0","chunk-7e83b537":"31d6cfe0","chunk-a0a7bdb0":"f207b76e","chunk-e614a36e":"843c8daa","chunk-fb86b8fa":"fc25ad1f","chunk-581e787c":"29dc0080","chunk-5b541e10":"778e57f4"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var d=o[a],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===r||h===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){d=f[a],h=d.getAttribute("data-href");if(h===r||h===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=o);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=a(e);var f=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],o={name:"App"},a=o,i=(t("5c0b"),t("2877")),d=Object(i["a"])(a,c,u,!1,null,null,null),h=d.exports,f=t("8c4f");r["a"].use(f["a"]);var l=new f["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"Dashboard",component:function(){return t.e("chunk-04e08c74").then(t.bind(null,"7277"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-0d5493ab").then(t.bind(null,"bb51"))}},{path:"about",name:"About",component:function(){return t.e("chunk-16e754ec").then(t.bind(null,"f820"))}},{path:"news",name:"News",component:function(){return t.e("chunk-2d3fc1e6").then(t.bind(null,"a2f9"))}},{path:"customer_products",name:"CustomerProducts",component:function(){return Promise.all([t.e("chunk-fb86b8fa"),t.e("chunk-4c5b82e2"),t.e("chunk-581e787c")]).then(t.bind(null,"c0cc"))}},{path:"customer_product/:id",name:"CustomerProduct",component:function(){return Promise.all([t.e("chunk-4c5b82e2"),t.e("chunk-2d217def")]).then(t.bind(null,"c925"))}},{path:"customer_check",name:"CustomerCheck",component:function(){return t.e("chunk-2d0c13d6").then(t.bind(null,"44cc"))}},{path:"customer_order",name:"CustomerOrder",component:function(){return t.e("chunk-2d23012c").then(t.bind(null,"eb70"))}},{path:"customer_finish/:orderId",name:"CustomerFinish",component:function(){return t.e("chunk-2d0a4daa").then(t.bind(null,"07e2"))}},{path:"my_order",name:"CustomerMyOrder",component:function(){return Promise.all([t.e("chunk-fb86b8fa"),t.e("chunk-5b541e10")]).then(t.bind(null,"e266"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-e614a36e").then(t.bind(null,"a55b"))}},{path:"/admin",name:"DashboardRoot",component:function(){return t.e("chunk-a0a7bdb0").then(t.bind(null,"8aa6"))},children:[{path:"products",name:"Products",component:function(){return t.e("chunk-7e835253").then(t.bind(null,"e6dc"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return t.e("chunk-7e6ba612").then(t.bind(null,"159d"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return t.e("chunk-7e6ba612").then(t.bind(null,"159d"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return t.e("chunk-7e83b537").then(t.bind(null,"f329"))},meta:{requiresAuth:!0}}]}]}),s=(t("4989"),t("bc3a")),p=t.n(s),b=t("a7fe"),m=t.n(b),k=t("7bb1"),v=t("427f"),g=t.n(v),y=t("9062"),w=t.n(y),O=(t("e40d"),t("2f62"));r["a"].use(O["a"]);var _=new O["a"].Store({state:{},mutations:{},actions:{}}),C=(t("a481"),t("c5f6"),function(e){if(isNaN(e)){var n="$".concat(0);return n}var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))}),P=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()};r["a"].prototype.$bus=new r["a"],r["a"].use(m.a,p.a),r["a"].use(k["a"]),k["a"].Validator.localize("zh-TW",g.a),r["a"].component("Loading",w.a),r["a"].filter("currency",C),r["a"].filter("date",P),r["a"].config.productionTip=!1,p.a.defaults.withCredentials=!0,new r["a"]({router:l,store:_,render:function(e){return e(h)}}).$mount("#app"),l.beforeEach((function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var r="".concat("https://vue-course-api.hexschool.io","/api/user/check");p.a.post(r).then((function(e){console.log("檢查登入狀態",e.data),e.data.success?t():(window.scrollTo(0,0),t("/login"))}))}else window.scrollTo(0,0),t()}))},"5c0b":function(e,n,t){"use strict";var r=t("e332"),c=t.n(r);c.a},e332:function(e,n,t){}});
//# sourceMappingURL=app.732adc1f.js.map