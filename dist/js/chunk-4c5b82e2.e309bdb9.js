(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c5b82e2"],{"07e3":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},"0fc9":function(t,e,r){var n=r("3a38"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=n(t),t<0?i(t+e,0):o(t,e)}},1654:function(t,e,r){"use strict";var n=r("71c1")(!0);r("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"1bc3":function(t,e,r){var n=r("f772");t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,r){var n=r("f772"),i=r("e53d").document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),i=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},"241e":function(t,e,r){var n=r("25eb");t.exports=function(t){return Object(n(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2fbc":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb bg-transparent h5"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{staticClass:"font-weight-bolder",attrs:{to:"/customer_products"}},[r("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n          購物商城\n        ")])],1),t.propsData.title?r("li",{staticClass:"breadcrumb-item font-weight-bolder"},[r("span",{staticClass:"text-primary"},[t._v(t._s(t.propsData.category))])]):t._e(),t.propsData.title?t._e():r("li",{staticClass:"breadcrumb-item active font-weight-bolder"},[t._v("\n        "+t._s(t.propsData.category)+"\n      ")]),t.propsData.title?r("li",{staticClass:"breadcrumb-item active font-weight-bolder"},[t._v("\n        "+t._s(t.propsData.title)+"\n      ")]):t._e()])])])},i=[],o={props:["propsData"]},a=o,c=r("2877"),s=Object(c["a"])(a,n,i,!1,null,null,null);e["a"]=s.exports},"30f1":function(t,e,r){"use strict";var n=r("b8e3"),i=r("63b6"),o=r("9138"),a=r("35e8"),c=r("481b"),s=r("8f60"),u=r("45f2"),f=r("53e2"),l=r("5168")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",b="values",y=function(){return this};t.exports=function(t,e,r,h,g,m,x){s(r,e,h);var _,S,L,w=function(t){if(!p&&t in A)return A[t];switch(t){case v:return function(){return new r(this,t)};case b:return function(){return new r(this,t)}}return function(){return new r(this,t)}},C=e+" Iterator",T=g==b,O=!1,A=t.prototype,P=A[l]||A[d]||g&&A[g],M=P||w(g),F=g?T?w("entries"):M:void 0,k="Array"==e&&A.entries||P;if(k&&(L=f(k.call(new t)),L!==Object.prototype&&L.next&&(u(L,C,!0),n||"function"==typeof L[l]||a(L,l,y))),T&&P&&P.name!==b&&(O=!0,M=function(){return P.call(this)}),n&&!x||!p&&!O&&A[l]||a(A,l,M),c[e]=M,c[C]=y,g)if(_={values:T?M:w(b),keys:m?M:w(v),entries:F},x)for(S in _)S in A||o(A,S,_[S]);else i(i.P+i.F*(p||O),e,_);return _}},"32fc":function(t,e,r){var n=r("e53d").document;t.exports=n&&n.documentElement},"335c":function(t,e,r){var n=r("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},"35e8":function(t,e,r){var n=r("d9f6"),i=r("aebd");t.exports=r("8e60")?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},"36c3":function(t,e,r){var n=r("335c"),i=r("25eb");t.exports=function(t){return n(i(t))}},3702:function(t,e,r){var n=r("481b"),i=r("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},"3a38":function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},"40c3":function(t,e,r){var n=r("6b4c"),i=r("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(r){}};t.exports=function(t){var e,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(e=Object(t),i))?r:o?n(e):"Object"==(c=n(e))&&"function"==typeof e.callee?"Arguments":c}},"45f2":function(t,e,r){var n=r("d9f6").f,i=r("07e3"),o=r("5168")("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,r){var n=r("5168")("iterator"),i=!1;try{var o=[7][n]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],c=o[n]();c.next=function(){return{done:r=!0}},o[n]=function(){return c},t(o)}catch(a){}return r}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,r){var n=r("dbdb")("wks"),i=r("62a0"),o=r("e53d").Symbol,a="function"==typeof o,c=t.exports=function(t){return n[t]||(n[t]=a&&o[t]||(a?o:i)("Symbol."+t))};c.store=n},"53e2":function(t,e,r){var n=r("07e3"),i=r("241e"),o=r("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"549b":function(t,e,r){"use strict";var n=r("d864"),i=r("63b6"),o=r("241e"),a=r("b0dc"),c=r("3702"),s=r("b447"),u=r("20fd"),f=r("7cd6");i(i.S+i.F*!r("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,i,l,p=o(t),d="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,y=void 0!==b,h=0,g=f(p);if(y&&(b=n(b,v>2?arguments[2]:void 0,2)),void 0==g||d==Array&&c(g))for(e=s(p.length),r=new d(e);e>h;h++)u(r,h,y?b(p[h],h):p[h]);else for(l=g.call(p),r=new d;!(i=l.next()).done;h++)u(r,h,y?a(l,b,[i.value,h],!0):i.value);return r.length=h,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},5559:function(t,e,r){var n=r("dbdb")("keys"),i=r("62a0");t.exports=function(t){return n[t]||(n[t]=i(t))}},5703:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.propsData,(function(e){return r("div",{key:e.id,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3 mb-5"},[r("div",{staticClass:"card product-template"},[t.myFavorite.find((function(t){return t.id===e.id}))?r("span",{staticClass:"text-info favorite-icon",staticStyle:{"font-size":"1.1rem",cursor:"pointer"},attrs:{title:"移除最愛"},on:{click:function(r){return r.preventDefault(),t.removeFavorite(e)}}},[r("i",{staticClass:"fas fa-heart"})]):r("span",{staticClass:"text-primary favorite-icon",staticStyle:{"font-size":"1.1rem",cursor:"pointer"},attrs:{title:"加入最愛"},on:{click:function(r){return r.preventDefault(),t.addFavorite(e)}}},[r("i",{staticClass:"far fa-heart"})]),r("img",{staticClass:"card-img-top cursor-point pt-3 px-3",attrs:{src:e.imageUrl,alt:e.title},on:{click:function(r){return t.goToProductPage(e.id)}}}),r("div",{staticClass:"card-body cursor-point",on:{click:function(r){return t.goToProductPage(e.id)}}},["主題商品"===e.category?r("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]):t._e(),"人氣精選"===e.category?r("span",{staticClass:"badge badge-warning float-right ml-2"},[t._v(t._s(e.category))]):t._e(),"清倉55折"===e.category?r("span",{staticClass:"badge badge-success float-right ml-2"},[t._v(t._s(e.category))]):t._e(),r("h6",{staticClass:"card-title"},[r("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),r("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price===e.origin_price?r("div",{staticClass:"h6 font-weight-bold"},[t._v("NT"+t._s(t._f("currency")(e.origin_price)))]):t._e(),e.price!==e.origin_price?r("del",[r("small",[t._v("原價 NT"+t._s(t._f("currency")(e.origin_price)))])]):t._e(),e.price!==e.origin_price?r("div",{staticClass:"h6 text-danger font-weight-bold"},[t._v("特價 NT"+t._s(t._f("currency")(e.price)))]):t._e()])]),r("div",{staticClass:"card-footer d-flex bg-white"},[r("button",{staticClass:"btn btn-light btn-sm",attrs:{type:"button"},on:{click:function(r){return t.goToProductPage(e.id)}}},[t._v("查看更多")]),r("button",{staticClass:"btn btn-primary btn-sm ml-auto",attrs:{type:"button",disabled:t.isDisabled===e.id},on:{click:function(r){return t.addCart(e.id)}}},[t.filterLoadingItem===e.id?r("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n          加入購物車\n        ")])])])])})),0)},i=[],o=r("a745"),a=r.n(o);function c(t){if(a()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s=r("774e"),u=r.n(s),f=r("c8bb"),l=r.n(f);function p(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return c(t)||p(t)||d()}var b={props:["propsData","propsFavorite"],data:function(){return{filterLoadingItem:"",isDisabled:"",myFavorite:v(this.propsFavorite),isFavorite:""}},methods:{goToProductPage:function(t){this.$router.push("/customer_product/".concat(t)),this.myFavorite=v(this.propsFavorite),this.$emit("emit",t)},addCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this;r.filterLoadingItem=t,r.isDisabled=t;var n={product_id:t,qty:e},i="".concat("https://vue-course-api.hexschool.io","/api/").concat("dress_store","/cart");r.$http.post(i,{data:n}).then((function(t){console.log("加入購物車(temp)",t.data),t.data.success&&(r.filterLoadingItem="",r.isDisabled="",r.$bus.$emit("messsage:push",t.data.message,"success"),r.$bus.$emit("cartsQty:update"))}))},addFavorite:function(t){var e=this;e.myFavorite.push(t),localStorage.setItem("dressMyFavorite",JSON.stringify(e.myFavorite)),e.$emit("emitFavoriteId",t.id),e.$bus.$emit("messsage:push","商品加入我的最愛囉～","success")},removeFavorite:function(t){var e=this;e.myFavorite.filter((function(r,n){if(r.id===t.id)return e.myFavorite.splice(n,1)})),localStorage.setItem("dressMyFavorite",JSON.stringify(e.myFavorite)),e.$emit("emitFavoriteId",t.id),e.$bus.$emit("messsage:push","商品從我的最愛移除！","danger")}}},y=b,h=(r("c2a6"),r("2877")),g=Object(h["a"])(y,n,i,!1,null,null,null);e["a"]=g.exports},"584a":function(t,e){var r=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=r)},"5b4e":function(t,e,r){var n=r("36c3"),i=r("b447"),o=r("0fc9");t.exports=function(t){return function(e,r,a){var c,s=n(e),u=i(s.length),f=o(a,u);if(t&&r!=r){while(u>f)if(c=s[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},"62a0":function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},"63b6":function(t,e,r){var n=r("e53d"),i=r("584a"),o=r("d864"),a=r("35e8"),c=r("07e3"),s="prototype",u=function(t,e,r){var f,l,p,d=t&u.F,v=t&u.G,b=t&u.S,y=t&u.P,h=t&u.B,g=t&u.W,m=v?i:i[e]||(i[e]={}),x=m[s],_=v?n:b?n[e]:(n[e]||{})[s];for(f in v&&(r=e),r)l=!d&&_&&void 0!==_[f],l&&c(m,f)||(p=l?_[f]:r[f],m[f]=v&&"function"!=typeof _[f]?r[f]:h&&l?o(p,n):g&&_[f]==p?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[s]=t[s],e}(p):y&&"function"==typeof p?o(Function.call,p):p,y&&((m.virtual||(m.virtual={}))[f]=p,t&u.R&&x&&!x[f]&&a(x,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"6b4c":function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"6c1c":function(t,e,r){r("c367");for(var n=r("e53d"),i=r("35e8"),o=r("481b"),a=r("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var u=c[s],f=n[u],l=f&&f.prototype;l&&!l[a]&&i(l,a,u),o[u]=o.Array}},"71c1":function(t,e,r){var n=r("3a38"),i=r("25eb");t.exports=function(t){return function(e,r){var o,a,c=String(i(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"774e":function(t,e,r){t.exports=r("d2d5")},"794b":function(t,e,r){t.exports=!r("8e60")&&!r("294c")((function(){return 7!=Object.defineProperty(r("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7cd6":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},"7e90":function(t,e,r){var n=r("d9f6"),i=r("e4ae"),o=r("c3a1");t.exports=r("8e60")?Object.defineProperties:function(t,e){i(t);var r,a=o(e),c=a.length,s=0;while(c>s)n.f(t,r=a[s++],e[r]);return t}},8436:function(t,e){t.exports=function(){}},"8ad9":function(t,e,r){},"8e60":function(t,e,r){t.exports=!r("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8f60":function(t,e,r){"use strict";var n=r("a159"),i=r("aebd"),o=r("45f2"),a={};r("35e8")(a,r("5168")("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(a,{next:i(1,r)}),o(t,e+" Iterator")}},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},9138:function(t,e,r){t.exports=r("35e8")},"95d5":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a159:function(t,e,r){var n=r("e4ae"),i=r("7e90"),o=r("1691"),a=r("5559")("IE_PROTO"),c=function(){},s="prototype",u=function(){var t,e=r("1ec9")("iframe"),n=o.length,i="<",a=">";e.style.display="none",r("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),u=t.F;while(n--)delete u[s][o[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(c[s]=n(t),r=new c,c[s]=null,r[a]=t):r=u(),void 0===e?r:i(r,e)}},a745:function(t,e,r){t.exports=r("f410")},ac6a:function(t,e,r){for(var n=r("cadf"),i=r("0d58"),o=r("2aba"),a=r("7726"),c=r("32e9"),s=r("84f2"),u=r("2b4c"),f=u("iterator"),l=u("toStringTag"),p=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(d),b=0;b<v.length;b++){var y,h=v[b],g=d[h],m=a[h],x=m&&m.prototype;if(x&&(x[f]||c(x,f,p),x[l]||c(x,l,h),s[h]=p,g))for(y in n)x[y]||o(x,y,n[y],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0dc:function(t,e,r){var n=r("e4ae");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){var o=t["return"];throw void 0!==o&&n(o.call(t)),a}}},b447:function(t,e,r){var n=r("3a38"),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c2a6:function(t,e,r){"use strict";var n=r("8ad9"),i=r.n(n);i.a},c367:function(t,e,r){"use strict";var n=r("8436"),i=r("50ed"),o=r("481b"),a=r("36c3");t.exports=r("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},c3a1:function(t,e,r){var n=r("e6f3"),i=r("1691");t.exports=Object.keys||function(t){return n(t,i)}},c8bb:function(t,e,r){t.exports=r("54a1")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},d864:function(t,e,r){var n=r("79aa");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,r){var n=r("e4ae"),i=r("794b"),o=r("1bc3"),a=Object.defineProperty;e.f=r("8e60")?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},dbdb:function(t,e,r){var n=r("584a"),i=r("e53d"),o="__core-js_shared__",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,r){var n=r("f772");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},e6f3:function(t,e,r){var n=r("07e3"),i=r("36c3"),o=r("5b4e")(!1),a=r("5559")("IE_PROTO");t.exports=function(t,e){var r,c=i(t),s=0,u=[];for(r in c)r!=a&&n(c,r)&&u.push(r);while(e.length>s)n(c,r=e[s++])&&(~o(u,r)||u.push(r));return u}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-4c5b82e2.e309bdb9.js.map