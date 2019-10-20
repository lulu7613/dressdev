(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217def"],{c925:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("Breadcrumb",{staticClass:"container mt-3",attrs:{propsData:t.tempProduct}}),r("main",{staticClass:"container my-5 main"},[r("div",{staticClass:"row border-bottom",attrs:{id:"product-main"}},[r("div",{staticClass:"col-lg-6 text-center product-img mb-5"},[r("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:"1101al.jpg"}})]),r("div",{staticClass:"col-lg-5 mb-5",attrs:{id:"product-content-main"}},[r("div",{staticClass:"d-flex align-items-baseline"},[r("h1",{staticClass:"h3 font-weight-bolder mr-3"},[t._v(t._s(t.tempProduct.title))]),t.myFavorite.find((function(e){return e.id===t.tempProduct.id}))?r("span",{staticClass:"text-info",staticStyle:{"font-size":"1.1rem",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.removeFavorite()}}},[r("i",{staticClass:"fas fa-heart"}),t._v("\n            已加入最愛\n          ")]):r("span",{staticClass:"text-primary",staticStyle:{"font-size":"1.1rem",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.addFavorite()}}},[r("i",{staticClass:"far fa-heart"}),t._v("\n            加入最愛\n          ")])]),"主題商品"===t.tempProduct.category?r("span",{staticClass:"badge badge-secondary mb-2"},[t._v(t._s(t.tempProduct.category))]):t._e(),"人氣精選"===t.tempProduct.category?r("span",{staticClass:"badge badge-warning mb-2"},[t._v(t._s(t.tempProduct.category))]):t._e(),"清倉55折"===t.tempProduct.category?r("span",{staticClass:"badge badge-success mb-2"},[t._v(t._s(t.tempProduct.category))]):t._e(),r("p",[t._v(t._s(t.tempProduct.content))]),r("div",{staticClass:"d-flex justify-content-end align-items-end"},[r("del",[t.tempProduct.price?r("div",{staticClass:"h5"},[t._v("原價 NT$ "+t._s(t.tempProduct.origin_price))]):t._e()]),t.tempProduct.price?r("div",{staticClass:"h3 ml-auto text-danger"},[r("small",{staticClass:"font-weight-bold"},[t._v("特價 NT$")]),r("strong",[t._v(t._s(t.tempProduct.price))])]):t._e(),t.tempProduct.price?t._e():r("div",{staticClass:"h3 ml-auto text-danger"},[r("small",{staticClass:"font-weight-bold"},[t._v("售價 $NT")]),r("strong",[t._v(t._s(t.tempProduct.origin_price))])])]),r("hr"),r("div",{staticClass:"input-group mt-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"form-control mr-3",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"num",e.target.multiple?r:r[0])}}},t._l(10,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.tempProduct.unit))])})),0),r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isDisabled===t.tempProduct.id},on:{click:function(e){return t.addCart(t.tempProduct.id,t.tempProduct.num)}}},[t.filterLoadingItem===t.tempProduct.id?r("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加入購物車\n          ")])]),t.tempProduct.num>1?r("div",{staticClass:"text-muted text-right text-nowrap mt-3"},[t._v("\n          小計\n          "),t.tempProduct.price?r("strong",[t._v(t._s(t._f("currency")(t.tempProduct.num*t.tempProduct.price))+"元")]):r("strong",[t._v(t._s(t._f("currency")(t.tempProduct.num*t.tempProduct.origin_price))+"元")])]):t._e()])]),r("h6",{staticClass:"my-3 pl-4"},[t._v("其他同款商品")]),r("ProductTemplate",{attrs:{propsData:t.sameCategoryProducts,propsFavorite:t.myFavorite},on:{emit:t.changeProduct,emitFavoriteId:t.getFavorite}})],1)],1)},o=[],s=(r("ac6a"),r("2fbc")),i=r("5703"),c={components:{Breadcrumb:s["a"],ProductTemplate:i["a"]},data:function(){return{itemId:"",products:[],sameCategoryProducts:[],tempProduct:{},isDisabled:"",myFavorite:JSON.parse(localStorage.getItem("dressMyFavorite"))||[],filterLoadingItem:"",isLoading:!1}},methods:{getProducts:function(){var t=this;t.isLoading=!0,t.itemId=t.$route.params.id;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("dress_store","/products/all");t.axios.get(e).then((function(e){console.log("取得商品列表",e.data),e.data.success&&(t.products=e.data.products,t.products.forEach((function(e){e.id===t.itemId&&(t.tempProduct=e,t.tempProduct.num=1)})),t.products.forEach((function(e){e.id!==t.tempProduct.id&&e.category===t.tempProduct.category&&t.sameCategoryProducts.push(e)})),t.myFavorite=JSON.parse(localStorage.getItem("dressMyFavorite"))||[],t.myFavorite.forEach((function(e){e.id===t.itemId?t.isFavorite=!0:t.isFavorite=!1})),t.isLoading=!1)}))},changeProduct:function(t){var e=this;e.itemId=t,e.sameCategoryProducts=[],e.tempProduct={},e.products.forEach((function(t){t.id===e.itemId&&(e.tempProduct=t,e.tempProduct.num=1)})),e.products.forEach((function(t){t.id!==e.tempProduct.id&&t.category===e.tempProduct.category&&e.sameCategoryProducts.push(t)}))},addFavorite:function(){var t=this;t.myFavorite.push(t.tempProduct),t.$bus.$emit("messsage:push","商品加入我的最愛囉～","success"),localStorage.setItem("dressMyFavorite",JSON.stringify(t.myFavorite))},removeFavorite:function(){var t=this;t.myFavorite.filter((function(e,r){if(e.id===t.itemId)return t.myFavorite.splice(r,1)})),t.$bus.$emit("messsage:push","商品從我的最愛移除！","danger"),localStorage.setItem("dressMyFavorite",JSON.stringify(t.myFavorite))},getFavorite:function(){var t=this;t.myFavorite=JSON.parse(localStorage.getItem("dressMyFavorite"))||[]}},created:function(){this.getProducts()},updated:function(){window.scroll(0,0)}},n=c,d=r("2877"),u=Object(d["a"])(n,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d217def.19af2167.js.map