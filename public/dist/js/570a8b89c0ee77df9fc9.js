(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{206:function(t,e,s){"use strict";s.r(e);var a=s(1),n={name:"news-show",methods:{selectNews:function(t){a.a.dispatch("setSelectedNews",{id:t})}},created:function(){var t=this.$route.params.id;this.selectNews(t)},computed:{data:function(){return a.a.getters.getSelectedNews}}},o=s(2),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"mt-6"},[s("v-col",[s("h3",{staticClass:"font-weight-light"},[t._v(t._s(t.data.title))]),t._v(" "),s("span",{staticClass:"font-italic text-muted mr-2",domProps:{textContent:t._s(t.formatToMinute(t.data.created_at))}}),t._v(" |\n      "),s("router-link",{staticClass:"ml-2",attrs:{to:"/news"},domProps:{textContent:t._s(t.data.category)}})],1)],1),t._v(" "),s("v-row",{staticClass:"mb-6"},[s("v-col",[s("div",{staticClass:"my-4",domProps:{innerHTML:t._s(t.data.description)}})])],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);