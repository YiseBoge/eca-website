(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{11:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var i={required:[function(e){return(e||"").length>0||"This field is required"}],min_20:[function(e){return(e||"").length>20||"The minimum required character is 20"}],min_50:[function(e){return(e||"").length>50||"The minimum required character is 20"}],min_100:[function(e){return(e||"").length>200||"The minimum required character is 200"}]}},177:function(e,t,s){var i=s(260);"string"==typeof i&&(i=[[e.i,i,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};s(7)(i,l);i.locals&&(e.exports=i.locals)},259:function(e,t,s){"use strict";var i=s(177);s.n(i).a},260:function(e,t,s){(t=e.exports=s(6)(!1)).push([e.i,"@import url(https://cdn.quilljs.com/1.2.6/quill.snow.css);",""]),t.push([e.i,"\n",""])},267:function(e,t,s){"use strict";s.r(t);var i=s(13),l=s(14),a=s(15),r=s.n(a);function n(){this.name="",this.position="",this.description="",this.level=1,this.image_url=""}var o=s(11),c=s(3),u=s(5),d=s(1),m={name:"Add Leader",components:{VueEditor:i.a},data:function(){return{valid:!1,modal:!1,levels:[1,2,3,4,5],leader:new n,rules:o.a,showAlert:!1,alertType:"success",button_text:"Upload Image",editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customModulesForEditor:[{alias:"imageDrop",module:l.a},{alias:"imageResize",module:r.a}]}},methods:{handleFileUpload:function(){var e=this.$refs.file.files[0].name;this.leader.image=this.$refs.file.files[0],this.button_text=e.slice(0,10),this.button_text+=e.length<10?"":"..."},submit:function(){var e=this;console.log(this.leader);var t=new FormData;Object.keys(this.leader).forEach((function(s){t.append(s,e.leader[s])}));var s=this;c.b.post("leadership",t).then((function(e){s.showAlert=!0,s.alertType="success",console.log(e),d.a.dispatch("setLeadership",{page:1,size:10})}),(function(e){s.showAlert=!0,s.alertType="error",Object(u.a)(e)}))}}},v=(s(259),s(2)),p=Object(v.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"px-5 py-3 shadow-lg"},[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.showAlert,expression:"showAlert"}],attrs:{type:e.alertType,dismissible:""}},[e._v("\n    "+e._s("success"===e.alertType?"Leader Successfully Inserted.":"Error. Something Went Wrong")+"\n  ")]),e._v(" "),s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Leader")])]),e._v(" "),s("v-card-text",[s("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Full Name*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.leader.name,callback:function(t){e.$set(e.leader,"name",t)},expression:"leader.name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Position*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.leader.position,callback:function(t){e.$set(e.leader,"position",t)},expression:"leader.position"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-select",{attrs:{items:e.levels,label:"Level*",required:""},model:{value:e.leader.level,callback:function(t){e.$set(e.leader,"level",t)},expression:"leader.level"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{rules:e.rules.min_20,label:"Description"},model:{value:e.leader.description,callback:function(t){e.$set(e.leader,"description",t)},expression:"leader.description"}})],1),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file",accept:"image/png, image/jpeg, image/bmp",rules:e.rules.file},on:{change:e.handleFileUpload}}),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticClass:"ma-2 d-block mx-auto mb-4",attrs:{large:"",tile:"",color:"info"},on:{click:function(t){return e.$refs.file.click()}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-camera")]),e._v("\n            "+e._s(e.button_text)+"\n          ")],1)],1)],1),e._v(" "),s("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[s("v-btn",{staticClass:"d-block mx-auto",attrs:{disabled:!e.valid,color:"success"},on:{click:e.submit}},[e._v(" Save")])],1)],1),e._v(" "),s("small",[e._v("*indicates required field")])],1)],1)}),[],!1,null,"6e73a0b2",null);t.default=p.exports}}]);