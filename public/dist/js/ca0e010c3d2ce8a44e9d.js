(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{206:function(t,a,e){"use strict";e.r(a);var s=e(1),i=e(3),o={name:"publication-show",data:function(){return{server:i.a,page:1,size:5,len:6,categories:["Real-Time","Trial Category","Conversions"],category:0}},watch:{$route:"selectPublication"},methods:{selectPublication:function(){s.a.dispatch("setSelectedPublication",{id:this.$route.params.id})}},created:function(){var t=this.$route.params.id;this.selectPublication(t)},computed:{data:function(){return s.a.getters.getSelectedPublication},loading:function(){return s.a.getters.getLoading}}},n=e(2),r=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[t.loading?e("v-row",{staticClass:"pt-10"},[e("v-col",[e("v-skeleton-loader",{staticClass:"w-100",attrs:{type:"article"}})],1)],1):e("div",[e("v-row",{staticClass:"mt-6"},[e("v-col",[e("h3",{staticClass:"font-weight-light"},[t._v(t._s(t.data.title))]),t._v(" "),e("span",{staticClass:"font-italic text-muted mr-2",domProps:{textContent:t._s(t.formatToMinute(t.data.created_at))}}),t._v(" |\n        "),e("router-link",{staticClass:"ml-2",attrs:{to:"/publications"},domProps:{textContent:t._s(t.data.category)}})],1)],1),t._v(" "),e("v-row",{staticClass:"mb-6"},[e("v-col",[e("div",{staticClass:"my-4",domProps:{innerHTML:t._s(t.data.description)}}),t._v(" "),e("a",{staticClass:"btn btn-primary btn-sm text-white shadow-lg",attrs:{href:t.server+t.data.file_url,target:"_blank"}},[e("v-icon",{attrs:{color:"white",left:"",small:""}},[t._v("mdi-download")]),t._v("\n          Download\n        ")],1)])],1)],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);