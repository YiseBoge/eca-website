(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{11:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a={required:[function(e){return(e||"").length>0||"This field is required"}],min_20:[function(e){return(e||"").length>20||"The minimum required character is 20"}],min_50:[function(e){return(e||"").length>50||"The minimum required character is 20"}],min_100:[function(e){return(e||"").length>200||"The minimum required character is 200"}]}},179:function(e,t,s){var a=s(263);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(8)(a,i);a.locals&&(e.exports=a.locals)},21:function(e,t,s){"use strict";function a(){this.title="",this.description="",this.start_date="",this.end_date="",this.location=""}s.d(t,"a",(function(){return a}))},262:function(e,t,s){"use strict";var a=s(179);s.n(a).a},263:function(e,t,s){(t=e.exports=s(7)(!1)).push([e.i,"@import url(https://cdn.quilljs.com/1.2.6/quill.snow.css);",""]),t.push([e.i,"\n",""])},280:function(e,t,s){"use strict";s.r(t);var a=s(13),i=s(14),l=s(15),r=s.n(l),n=s(11),o=s(3),c=s(1),d=s(5),u=s(6),m=(s(21),s(0),{name:"Add Leader",components:{VueEditor:a.a},data:function(){return{valid:!1,modal:!1,rules:n.a,levels:[1,2,3,4,5],loading:!1,alert:{message:"",type:"",visible:!1},button_text:"Upload Image",editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customModulesForEditor:[{alias:"imageDrop",module:i.a},{alias:"imageResize",module:r.a}]}},watch:{$route:"clear"},methods:{clear:function(){this.loadData(),this.alert={message:"",type:"",visible:!1}},loadData:function(){c.a.dispatch("setSelectedLeader",{id:d.a.currentRoute.params.id})},handleFileUpload:function(){var e=this.$refs.file.files[0].name;this.selectedLeader.image=this.$refs.file.files[0],this.button_text=e.slice(0,10),this.button_text+=e.length<10?"":"..."},submit:function(){var e=this;console.log(this.selectedLeader);var t=new FormData;Object.keys(this.selectedLeader).forEach((function(s){t.append(s,e.selectedLeader[s])})),t.append("_method","put");var s=this;s.loading=!0,o.b.post("leadership/".concat(this.selectedLeader.id),t).then((function(e){s.alert={message:"Successfully Updated Leader",type:"success",visible:!0},c.a.dispatch("setLeadership",{page:1,size:10}),c.a.dispatch("setSelectedLeader",{id:d.a.currentRoute.params.id})}),(function(e){Object(u.a)(e),500===e.response.status?s.alert={message:"Error: Something went wrong at the server",type:"error",visible:!0}:s.alert={message:"Please fix issues before submitting",type:"error",visible:!0}})).finally((function(){s.loading=!1}))}},created:function(){this.loadData()},mounted:function(){this.news=c.a.getters.getSelectedLeader},computed:{selectedLeader:function(){return console.log("In computed"),console.log(c.a.getters.getSelectedLeader),c.a.getters.getSelectedLeader},loadingPage:function(){return c.a.getters.getLoading}}}),v=(s(262),s(2)),p=Object(v.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"px-5 py-3 shadow-lg"},[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert.visible||!1,expression:"alert.visible || false"}],attrs:{type:e.alert.type,dismissible:""}},[e._v("\n    "+e._s(e.alert.message)+"\n  ")]),e._v(" "),s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Edit Leader")])]),e._v(" "),s("v-fade-transition",{attrs:{"hide-on-leave":""}},[e.loadingPage?s("v-card-text",[s("v-skeleton-loader",{attrs:{type:"list-heading, list-item, list-item-three-line, list-item-three-line, list-item, actions"}})],1):s("v-card-text",[s("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Full Name*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.selectedLeader.name,callback:function(t){e.$set(e.selectedLeader,"name",t)},expression:"selectedLeader.name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Position*",required:"",rules:e.rules.required||e.rules.min_20},model:{value:e.selectedLeader.position,callback:function(t){e.$set(e.selectedLeader,"position",t)},expression:"selectedLeader.position"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-select",{attrs:{items:e.levels,label:"Level*",required:""},model:{value:e.selectedLeader.level,callback:function(t){e.$set(e.selectedLeader,"level",t)},expression:"selectedLeader.level"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{rules:e.rules.min_20,label:"Description"},model:{value:e.selectedLeader.description,callback:function(t){e.$set(e.selectedLeader,"description",t)},expression:"selectedLeader.description"}})],1),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file",accept:"image/png, image/jpeg, image/bmp",rules:e.rules.file},on:{change:e.handleFileUpload}}),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticClass:"ma-2 d-block mx-auto mb-4",attrs:{large:"",tile:"",color:"info"},on:{click:function(t){return e.$refs.file.click()}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-camera")]),e._v("\n              "+e._s(e.button_text)+"\n            ")],1)],1)],1),e._v(" "),e.selectedLeader.image_url?s("div",{staticClass:"col-md-5 mx-auto"},[s("v-img",{attrs:{src:e.selectedLeader.image_url}})],1):e._e(),e._v(" "),s("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[s("v-btn",{staticClass:"d-block mx-auto",attrs:{disabled:!e.valid,color:"success",loading:e.loading},on:{click:e.submit}},[e._v(" Save")])],1)],1),e._v(" "),s("small",[e._v("*indicates required field")])],1)],1)],1)}),[],!1,null,"3c03e3f6",null);t.default=p.exports}}]);