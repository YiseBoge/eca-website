(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{292:function(t,e,i){"use strict";i.r(e);var s=i(0),a={methods:{beautifyDate:function(t){return t},fetchHeadlines:function(){s.a.dispatch("setHeadlines",{page:1,size:4})}},created:function(){this.fetchHeadlines()},computed:{data:function(){return s.a.getters.getHeadlines},homeLoaders:function(){return s.a.getters.getHomeLoaders}}},n=i(2),l=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-fade-transition",{attrs:{"hide-on-leave":""}},[t.homeLoaders.headlines?i("v-skeleton-loader",{staticClass:"mt-4",attrs:{type:"card-heading,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,actions"}}):i("div",{staticClass:"mx-auto mt-4",staticStyle:{overflow:"auto"}},[i("v-list",{staticClass:"transparent",attrs:{"three-line":""}},[i("h2",{staticClass:"px-3 text-primary"},[t._v("Headlines")]),t._v(" "),i("v-divider",{staticClass:"my-0"}),t._v(" "),0===t.data.length?i("p",{staticClass:"text-muted text-center mt-3",domProps:{textContent:t._s("Found Nothing")}}):t._e(),t._v(" "),t._l(t.data,(function(e){return[i("v-list-item",{key:e.id,staticClass:"pb-2",attrs:{to:"/news/"+e.id}},[i("v-list-item-content",[i("p",{staticClass:"overline text-muted"},[t._v(t._s(t.formatToDate(e.created_at)))]),t._v(" "),i("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.htmlToText(e.list_description))}})],1)],1)]}))],2),t._v(" "),0!==t.data.length?i("v-flex",{staticClass:"float-right",attrs:{"align-self-end":""}},[i("router-link",{staticClass:"btn btn-link nav-link",attrs:{to:"/news"}},[t._v("\n        More Headlines\n      ")])],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);