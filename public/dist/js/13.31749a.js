(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(t,e,a){"use strict";var r=a(20);a.n(r).a},180:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,"\n.v-image__image {\n  transition: .3s linear;\n}\n",""])},20:function(t,e,a){var r=a(180);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(8)(r,s);r.locals&&(t.exports=r.locals)},263:function(t,e,a){"use strict";a.r(e);var r=a(3),s={data:function(){return{server:r.a}},props:{size:{type:Number,required:!0},value:{type:Object,default:function(){return{}}}},methods:{beautifyDate:function(t){return t}},computed:{probably:function(){return{md6:2===this.size,md4:3===this.size}}}},n=(a(179),a(2)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"md6",attrs:{xs12:""}},[a("base-card",{staticClass:"shadow-lg rounded",attrs:{height:t.value.prominent?450:250,color:"grey lighten-1",dark:"",to:"/news/"+t.value.id}},[a("v-img",{attrs:{src:t.server+t.value.image_url,height:"100%",gradient:"rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"}},[t.value.prominent?t._e():a("v-layout",{attrs:{"fill-height":"",wrap:"","text-xs-right":"","ma-0":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-chip",{staticClass:"mx-0 mb-2 text-uppercase",attrs:{label:"",color:"grey darken-3","text-color":"white",small:""},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.value.category)+"\n          ")]),t._v(" "),a("h3",{staticClass:"title font-weight-bold"},[t._v("\n            "+t._s(t.value.title)+"\n          ")]),t._v(" "),a("div",{staticClass:"caption text-truncate"},[t._v("\n            "+t._s(t.htmlToText(t.value.description))+"\n          ")]),t._v(" "),a("p",{staticClass:"overline my-1"},[t._v(t._s(t.formatToDate(t.value.created_at)))])],1),t._v(" "),a("v-flex",{attrs:{"align-self-end":""}},[a("v-chip",{staticClass:"text-uppercase ma-0",attrs:{color:"primary",label:"",small:""}},[t._v("\n            Read More\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);