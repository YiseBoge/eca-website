(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(e,t,i){var s=i(245);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(7)(s,a);s.locals&&(e.exports=s.locals)},244:function(e,t,i){"use strict";var s=i(174);i.n(s).a},245:function(e,t,i){(t=e.exports=i(6)(!1)).push([e.i,"@import url(https://cdn.quilljs.com/1.2.6/quill.snow.css);",""]),t.push([e.i,"\n",""])},256:function(e,t,i){"use strict";i.r(t);var s=i(11),a=i(12),l=i(13),o=i.n(l);function n(){this.title="",this.image="",this.file="",this.category="",this.description=""}var r=i(9),c=i(3),u=i(1),d={name:"Add Publication",components:{VueEditor:s.a},data:function(){return{valid:!1,modal:!1,publication:new n,rules:r.a,showAlert:!1,alertType:"success",image_button_text:"Upload Image",file_button_text:"Upload File",editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customModulesForEditor:[{alias:"imageDrop",module:a.a},{alias:"imageResize",module:o.a}]}},methods:{submit:function(){var e=this;console.log(this.publication);var t=new FormData;Object.keys(this.publication).forEach((function(i){t.append(i,e.publication[i])}));var i=this;c.b.post("publication",t).then((function(e){i.showAlert=!0,i.alertType="success"}),(function(e){i.showAlert=!0,i.alertType="error"}))}},created:function(){u.a.dispatch("setPublicationCategories")},computed:{categories:function(){return u.a.getters.getPublicationCategories}}},p=(i(244),i(2)),m=Object(p.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"px-5 py-3 shadow-lg"},[i("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.showAlert,expression:"showAlert"}],attrs:{type:e.alertType,dismissible:""}},[e._v("\n    "+e._s("success"===e.alertType?"Publication Successfully inserted.":"Error something went wrong")+"\n  ")]),e._v(" "),i("v-card-title",[i("span",{staticClass:"headline"},[e._v("New publication")])]),e._v(" "),i("v-card-text",[i("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Title*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.publication.title,callback:function(t){e.$set(e.publication,"title",t)},expression:"publication.title"}})],1),e._v(" "),i("v-col",{attrs:{cols:"12"}},[i("vue-editor",{attrs:{editorOptions:e.editorSettings,customModules:e.customModulesForEditor,rules:e.rules.min_100},model:{value:e.publication.description,callback:function(t){e.$set(e.publication,"description",t)},expression:"publication.description"}})],1),e._v(" "),i("v-col",{attrs:{cols:"4"}},[[i("v-file-input",{attrs:{label:"Upload Image","show-size":""},model:{value:e.publication.image,callback:function(t){e.$set(e.publication,"image",t)},expression:"publication.image"}})]],2),e._v(" "),i("v-col",{attrs:{cols:"4"}},[[i("v-file-input",{attrs:{label:"Upload File","show-size":""},model:{value:e.publication.file,callback:function(t){e.$set(e.publication,"file",t)},expression:"publication.file"}})]],2),e._v(" "),i("v-col",{staticClass:"mx-auto",attrs:{cols:"4"}},[i("v-select",{attrs:{label:"Select category",rules:e.rules.required,items:e.categories},model:{value:e.publication.category,callback:function(t){e.$set(e.publication,"category",t)},expression:"publication.category"}})],1)],1),e._v(" "),i("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[i("v-btn",{staticClass:"d-block mx-auto",attrs:{disabled:!e.valid,color:"success"},on:{click:e.submit}},[e._v(" Save")])],1)],1),e._v(" "),i("small",[e._v("*indicates required field")])],1)],1)}),[],!1,null,"7c877ab1",null);t.default=m.exports},9:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var s={required:[function(e){return(e||"").length>0||"This field is required"}],min_20:[function(e){return(e||"").length>20||"The minimum required character is 20"}],min_50:[function(e){return(e||"").length>50||"The minimum required character is 20"}],min_100:[function(e){return(e||"").length>200||"The minimum required character is 200"}]}}}]);