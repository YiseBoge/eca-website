(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{208:function(t,e,s){"use strict";s.r(e);var a=s(1),i=s(3),o={name:"news-index",data:function(){return{server:i.a,page:1,size:10,year:0,selectedCategories:[],sizes:[10,25,50,100],years:["All",2020,2019,2018,2017]}},methods:{fetchNews:function(){var t=[],e=this.categories;this.selectedCategories.forEach((function(s){t.push(e[s])})),a.a.dispatch("setNews",{page:this.page,size:this.size,year:this.years[this.year],category:t})},fetchCategories:function(){a.a.dispatch("setNewsCategories")},show:function(t){a.a.dispatch("setSelectedNews",{id:t}),this.$router.push("/news/".concat(t))}},created:function(){this.fetchCategories(),this.fetchNews()},computed:{data:function(){return a.a.getters.getNews},meta:function(){return a.a.getters.getNewsMeta},categories:function(){return a.a.getters.getNewsCategories},loading:function(){return a.a.getters.getLoading},categoryLoading:function(){return a.a.getters.getCategoryLoading}}},n=s(2),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"mt-6"},[s("v-col",[s("h1",{staticClass:"font-weight-thin"},[t._v("News")])])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-tabs",{staticClass:"shadow mb-5 rounded",attrs:{"background-color":"primary",dark:"","fixed-tabs":""},on:{change:t.fetchNews},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}},t._l(t.years,(function(e){return s("v-tab",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})),1),t._v(" "),s("v-list",{attrs:{"two-line":""}},[0!==t.data.length||t.loading?t._e():s("p",{staticClass:"text-muted text-center mt-3",domProps:{textContent:t._s("Found Nothing")}}),t._v(" "),t.loading?s("v-skeleton-loader",{staticClass:"w-100",attrs:{type:"list-item-three-line"}}):s("v-list-item-group",[t._l(t.data,(function(e){return[s("v-row",[s("v-list-item",{staticClass:"w-100",on:{click:function(s){return t.show(e.id)}}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-list-item-content",[s("div",{staticClass:"overline"},[t._v(t._s(e.category))]),t._v(" "),s("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),s("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(t.htmlToText(e.description))}}),t._v(" "),s("v-list-item-subtitle",{domProps:{textContent:t._s(t.formatToMinute(e.created_at))}})],1)],1),t._v(" "),e.image_url?s("v-col",{staticClass:"d-md-block d-none rounded",class:e.image_url?"shadow-sm":"",style:"height:50%; background: url("+t.server+e.image_url+") center; background-size: cover;",attrs:{cols:"1"}}):t._e()],1)],1),t._v(" "),s("v-divider",{staticClass:"my-0"})]}))],2)],1),t._v(" "),s("v-row",{staticClass:"py-5"},[s("v-col",{attrs:{lg:"2",cols:"3"}},[s("v-select",{staticClass:"justify-start",attrs:{items:t.sizes,dense:"",label:"Show",outlined:""},on:{change:t.fetchNews},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),t._v(" "),s("v-col",{attrs:{lg:"10",cols:"9"}},[s("v-pagination",{staticClass:"justify-end",attrs:{length:t.meta.last_page,"total-visible":7},on:{input:t.fetchNews},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1),t._v(" "),s("v-col",{staticClass:"px-8",attrs:{cols:"12",md:"4"}},[s("v-fade-transition",{attrs:{"hide-on-leave":""}},[t.categoryLoading?s("v-skeleton-loader",{staticClass:"shadow-lg",attrs:{type:"card-heading, list-item, list-item, list-item"}}):s("v-card",{staticClass:"mx-auto shadow-lg rounded",attrs:{tile:""}},[s("v-list",[s("v-subheader",[t._v("Categories")]),t._v(" "),0===t.categories.length?s("p",{staticClass:"text-muted text-center mt-3",domProps:{textContent:t._s("Found Nothing")}}):s("v-list-item-group",{attrs:{color:"primary",multiple:""},on:{change:t.fetchNews},model:{value:t.selectedCategories,callback:function(e){t.selectedCategories=e},expression:"selectedCategories"}},t._l(t.categories,(function(e,a){return s("v-list-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var i=a.active,o=a.toggle;return[s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e)}})],1),t._v(" "),s("v-list-item-action",[s("v-checkbox",{attrs:{"input-value":i,"true-value":t.item},on:{click:o}})],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);