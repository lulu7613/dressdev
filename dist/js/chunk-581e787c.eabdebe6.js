(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-581e787c"],{4917:function(t,e,r){"use strict";var a=r("cb7c"),s=r("9def"),c=r("0390"),o=r("5f1b");r("214f")("match",1,(function(t,e,r,i){return[function(r){var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a):new RegExp(r)[e](String(a))},function(t){var e=i(r,t,this);if(e.done)return e.value;var n=a(t),l=String(this);if(!n.global)return o(n,l);var u=n.unicode;n.lastIndex=0;var d,p=[],f=0;while(null!==(d=o(n,l))){var v=String(d[0]);p[f]=v,""===v&&(n.lastIndex=c(l,s(n.lastIndex),u)),f++}return 0===f?null:p}]}))},"6d89":function(t,e,r){},b7a7:function(t,e,r){"use strict";var a=r("6d89"),s=r.n(a);s.a},c0cc:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("Banner",{staticClass:"mb-5"}),r("div",{staticClass:"col-md-11 mx-auto"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 mb-4"},[r("div",{staticClass:"nav flex-column sticky-top"},[r("span",{staticClass:"nav-link mb-2 active products-type",class:{"products-active":"all"===t.type},on:{click:function(e){return e.preventDefault(),t.getfilterProducts("all")}}},["all"===t.type?r("i",{staticClass:"fas fa-angle-right"}):t._e(),t._v("\n              全部商品\n            ")]),r("span",{staticClass:"nav-link mb-2 products-type",class:{"products-active":"topic"===t.type},on:{click:function(e){return e.preventDefault(),t.getfilterProducts("topic")}}},["topic"===t.type?r("i",{staticClass:"fas fa-angle-right"}):t._e(),t._v("\n              主題商品\n            ")]),r("span",{staticClass:"nav-link mb-2 products-type",class:{"products-active":"hot"===t.type},on:{click:function(e){return e.preventDefault(),t.getfilterProducts("hot")}}},["hot"===t.type?r("i",{staticClass:"fas fa-angle-right"}):t._e(),t._v("\n              人氣精選\n            ")]),r("span",{staticClass:"nav-link products-type",class:{"products-active":"discount"===t.type},on:{click:function(e){return e.preventDefault(),t.getfilterProducts("discount")}}},["discount"===t.type?r("i",{staticClass:"fas fa-angle-right"}):t._e(),t._v("\n              清倉55折\n            ")]),r("div",{staticClass:"input-group mt-2 mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control",staticStyle:{border:"1px solid #4b9983"},attrs:{type:"text",placeholder:"輸入關鍵字"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getfilterProducts("search")},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.getfilterProducts("search")}}},[r("i",{staticClass:"fas fa-search"})])])]),t.myFavorite.length>0?r("a",{staticClass:"nav-link mb-2 my-products animated slideInLeft",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getfilterProducts("favorite")}}},[r("i",{staticClass:"fas fa-heart"}),t._v("\n              我的最愛\n            ")]):t._e(),t.myOrder.length>0?r("router-link",{staticClass:"nav-link my-products animated slideInLeft",attrs:{to:"/my_order"}},[r("i",{staticClass:"fas fa-columns"}),t._v("\n              我的訂單\n            ")]):t._e()],1)]),r("div",{staticClass:"col-lg-10"},[r("Breadcrumb",{staticClass:"pl-0",attrs:{propsData:t.Breadcrumb}}),r("ProductTemplate",{attrs:{propsData:t.filterProducts,propsFavorite:t.myFavorite},on:{emitFavoriteId:t.getFavorite}}),"search"===t.type&&0===t.filterProducts.length?r("p",{staticClass:"text-danger text-center"},[t._v("哎呀！我們搜尋不到您輸入的關鍵字。")]):t._e(),"favorite"===t.type&&0===t.filterProducts.length?r("p",{staticClass:"text-danger text-center"},[t._v("您還沒有加入我的最愛商品，趕快去逛逛吧～")]):t._e()],1)])])])],1)},s=[],c=(r("4917"),r("ac6a"),r("84af")),o=r("2fbc"),i=r("5703"),n={components:{Banner:c["a"],Breadcrumb:o["a"],ProductTemplate:i["a"]},data:function(){return{Breadcrumb:{category:"全部商品"},products:[],type:"",filterProducts:[],myOrder:JSON.parse(localStorage.getItem("dressMyOrder"))||[],myFavorite:JSON.parse(localStorage.getItem("dressMyFavorite"))||[],keyword:"",isLoading:!1}},methods:{getProdects:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this;e.isLoading=!0;var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("dress_store","/products/all");e.$http.get(r).then((function(r){console.log("全部商品",r.data),r.data.success&&(e.products=r.data.products,e.filterProducts=r.data.products,e.getfilterProducts(t),e.isLoading=!1)}))},getfilterProducts:function(t){var e=this;e.type=t,"all"===e.type?(e.type="all",e.Breadcrumb.category="全部商品",e.filterProducts=[],e.filterProducts=e.products):"topic"===t?(e.type="topic",e.Breadcrumb.category="主題商品",e.filterProducts=[],e.products.forEach((function(t){"主題商品"===t.category&&e.filterProducts.push(t)}))):"hot"===e.type?(e.type="hot",e.Breadcrumb.category="人氣精選",e.filterProducts=[],e.products.forEach((function(t){"人氣精選"===t.category&&e.filterProducts.push(t)}))):"discount"===e.type?(e.type="discount",e.Breadcrumb.category="清倉55折",e.filterProducts=[],e.products.forEach((function(t){"清倉55折"===t.category&&e.filterProducts.push(t)}))):"search"===e.type?(e.type="search",e.Breadcrumb.category="搜尋: ".concat(e.keyword),e.filterProducts=[],e.products.forEach((function(t){(t.title.match(e.keyword)||t.category.match(e.keyword))&&e.filterProducts.push(t)})),e.keyword=""):"favorite"===e.type&&(e.type="favorite",e.Breadcrumb.category="我的最愛",e.filterProducts=e.myFavorite)},getFavorite:function(t){var e=this;e.myFavorite=JSON.parse(localStorage.getItem("dressMyFavorite"))||[],"favorite"===e.type&&e.filterProducts.filter((function(r,a){r.id===t&&e.filterProducts.splice(a,1)}))}},created:function(){var t=this,e=this;e.getProdects(),e.$bus.$on("getProductsType:type",(function(e){t.getProdects(e)}))},beforeDestroy:function(){this.$bus.$off("getProductsType:type")}},l=n,u=(r("b7a7"),r("2877")),d=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-581e787c.eabdebe6.js.map