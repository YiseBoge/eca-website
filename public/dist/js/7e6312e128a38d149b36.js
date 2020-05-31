(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,s){"use strict";s.r(t);var i=s(8),a=s(9),l=s(10),r=s.n(l);function n(){this.name="",this.position="",this.description="",this.level=1,this.image_url=""}var o=s(7),c=s(3),u=s(4),d=s(0),m={name:"Add Leader",components:{VueEditor:i.a},data:function(){return{valid:!1,modal:!1,levels:[1,2,3,4,5],leader:new n,rules:o.a,loading:!1,alert:{message:"",type:"",visible:!1},button_text:"Upload Image",editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customModulesForEditor:[{alias:"imageDrop",module:a.a},{alias:"imageResize",module:r.a}]}},watch:{$route:"clear"},methods:{clear:function(){this.$refs.form.reset(),this.alert={message:"",type:"success",visible:!1}},handleFileUpload:function(){var e=this.$refs.file.files[0].name;this.leader.image=this.$refs.file.files[0],this.button_text=e.slice(0,10),this.button_text+=e.length<10?"":"..."},submit:function(){var e=this;console.log(this.leader);var t=new FormData;Object.keys(this.leader).forEach((function(s){t.append(s,e.leader[s])}));var s=this;s.loading=!0,c.b.post("leadership",t).then((function(e){s.alert={message:"Successfully Inserted Leader",type:"success",visible:!0},d.a.dispatch("setLeadership",{page:1,size:10})}),(function(e){Object(u.a)(e),500===e.response.status?s.alert={message:"Error: Something went wrong at the server",type:"error",visible:!0}:s.alert={message:"Please fix issues before submitting",type:"error",visible:!0}})).finally((function(){s.loading=!1}))}}},v=(s(242),s(2)),f=Object(v.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"px-5 py-3 shadow-lg"},[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert.visible||!1,expression:"alert.visible || false"}],attrs:{type:e.alert.type,dismissible:""}},[e._v("\n    "+e._s(e.alert.message)+"\n  ")]),e._v(" "),s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Add Leader")])]),e._v(" "),s("v-card-text",[s("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Full Name*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.leader.name,callback:function(t){e.$set(e.leader,"name",t)},expression:"leader.name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Position*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.leader.position,callback:function(t){e.$set(e.leader,"position",t)},expression:"leader.position"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-select",{attrs:{items:e.levels,label:"Level*",required:""},model:{value:e.leader.level,callback:function(t){e.$set(e.leader,"level",t)},expression:"leader.level"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{rules:e.rules.min_20,label:"Description"},model:{value:e.leader.description,callback:function(t){e.$set(e.leader,"description",t)},expression:"leader.description"}})],1),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file",accept:"image/png, image/jpeg, image/bmp",rules:e.rules.file},on:{change:e.handleFileUpload}}),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticClass:"ma-2 d-block mx-auto mb-4",attrs:{large:"",tile:"",color:"info"},on:{click:function(t){return e.$refs.file.click()}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-camera")]),e._v("\n            "+e._s(e.button_text)+"\n          ")],1)],1)],1),e._v(" "),s("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[s("v-btn",{staticClass:"d-block mx-auto",attrs:{disabled:!e.valid,color:"success",loading:e.loading},on:{click:e.submit}},[e._v(" Save")])],1)],1),e._v(" "),s("small",[e._v("*indicates required field")])],1)],1)}),[],!1,null,"51179104",null);t.default=f.exports},242:function(e,t,s){"use strict";var i=s(34);s.n(i).a},243:function(e,t,s){(t=e.exports=s(11)(!1)).push([e.i,"@import url(https://cdn.quilljs.com/1.2.6/quill.snow.css);",""]),t.push([e.i,"\n",""])},34:function(e,t,s){var i=s(243);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(12)(i,a);i.locals&&(e.exports=i.locals)},7:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var i={required:[function(e){return(e||"").length>0||"This field is required"}],min_20:[function(e){return(e||"").length>20||"The minimum required character is 20"}],min_50:[function(e){return(e||"").length>50||"The minimum required character is 20"}],min_100:[function(e){return(e||"").length>200||"The minimum required character is 200"}]}}}]);