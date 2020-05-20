(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{17:function(e,t,n){"use strict";function i(){this.title="",this.description="",this.start_date="",this.end_date="",this.location=""}n.d(t,"a",(function(){return i}))},188:function(e,t,n){"use strict";n.r(t);var i=n(11),a=n(12),s=n(13),l=n.n(s),r=n(7),o=n(3),c=n(0),d=n(5),u=n(4),v=(n(17),n(1),{name:"Edit Event",components:{VueEditor:i.a},data:function(){return{valid:!1,modal:!1,rules:r.a,loading:!1,alert:{message:"",type:"",visible:!1},dates:[],editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customModulesForEditor:[{alias:"imageDrop",module:a.a},{alias:"imageResize",module:l.a}]}},watch:{$route:"clear"},methods:{clear:function(){this.loadData(),this.alert={message:"",type:"",visible:!1}},loadData:function(){c.a.dispatch("setSelectedEvent",{id:d.a.currentRoute.params.id})},submit:function(){var e=this;console.log(this.selectedEvent);var t=new FormData;Object.keys(this.selectedEvent).forEach((function(n){t.append(n,e.selectedEvent[n])})),t.append("start_date",this.dates[0]),t.append("end_date",this.dates[1]),t.append("_method","put");var n=this;n.loading=!0,o.b.post("event/".concat(this.selectedEvent.id),t).then((function(e){n.alert={message:"Successfully Updated Event",type:"success",visible:!0},c.a.dispatch("setEvents",{page:1,size:10})}),(function(e){Object(u.a)(e),500===e.response.status?n.alert={message:"Error: Something went wrong at the server",type:"error",visible:!0}:n.alert={message:"Please fix issues before submitting",type:"error",visible:!0}})).finally((function(){n.loading=!1}))}},created:function(){this.loadData()},mounted:function(){this.event=c.a.getters.getSelectedEvent},computed:{selectedEvent:function(){var e=c.a.getters.getSelectedEvent;return this.dates=[e.start_date,e.end_date],e},dateRangeText:function(){return this.dates.join("   ~   ")},loadingPage:function(){return c.a.getters.getLoading}}}),m=(n(228),n(2)),p=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"px-5 py-3 shadow-lg"},[n("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert.visible||!1,expression:"alert.visible || false"}],attrs:{type:e.alert.type,dismissible:""}},[e._v("\n    "+e._s(e.alert.message)+"\n  ")]),e._v(" "),n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Edit Event")])]),e._v(" "),n("v-fade-transition",{attrs:{"hide-on-leave":""}},[e.loadingPage?n("v-card-text",[n("v-skeleton-loader",{attrs:{type:"list-heading, list-item, list-item-three-line, list-item-three-line, list-item, actions"}})],1):n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title*",required:"",rules:e.rules.required||e.rules.required},model:{value:e.selectedEvent.title,callback:function(t){e.$set(e.selectedEvent,"title",t)},expression:"selectedEvent.title"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{rules:e.rules.min_20,label:"Description"},model:{value:e.selectedEvent.description,callback:function(t){e.$set(e.selectedEvent,"description",t)},expression:"selectedEvent.description"}})],1),e._v(" "),e.selectedEvent?n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-text-field",e._g({attrs:{label:"Events date",hint:"YYYY-MM-DD format","persistent-hint":"","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.dateRangeText,callback:function(t){e.dateRangeText=t},expression:"dateRangeText"}},i))]}}],null,!1,2674499432),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",range:""},on:{input:function(t){e.menu2=!1}},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1)],1):e._e(),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"mx-auto",attrs:{label:"Location"},model:{value:e.selectedEvent.location,callback:function(t){e.$set(e.selectedEvent,"location",t)},expression:"selectedEvent.location"}})],1)],1),e._v(" "),n("div",{staticClass:"my-2 mx-auto align-center align-content-center"},[n("v-btn",{staticClass:"d-block mx-auto",attrs:{disabled:!e.valid,color:"success",loading:e.loading},on:{click:e.submit}},[e._v(" Save")])],1)],1),e._v(" "),n("small",[e._v("*indicates required field")])],1)],1)],1)}),[],!1,null,"2ecc5d63",null);t.default=p.exports},228:function(e,t,n){"use strict";var i=n(30);n.n(i).a},229:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,"@import url(https://cdn.quilljs.com/1.2.6/quill.snow.css);",""]),t.push([e.i,"\n",""])},30:function(e,t,n){var i=n(229);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,a);i.locals&&(e.exports=i.locals)},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={required:[function(e){return(e||"").length>0||"This field is required"}],min_20:[function(e){return(e||"").length>20||"The minimum required character is 20"}],min_50:[function(e){return(e||"").length>50||"The minimum required character is 20"}],min_100:[function(e){return(e||"").length>200||"The minimum required character is 200"}]}}}]);