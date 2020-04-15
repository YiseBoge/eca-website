(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{25:function(e,t,n){"use strict";var a={name:"DeleteDialog",props:["open","title"],methods:{result:function(e){this.$emit("onConfirmation",e)}}},o=n(2),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Delete confirmation")]),e._v(" "),n("v-card-text",[e._v("\n      Are you sure you want to permanently delete "),n("b",[e._v(e._s(e.title))]),e._v("?\n    ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.result(!1)}}},[e._v("\n        Cancel\n      ")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.result(!0)}}},[e._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"46851f48",null);t.a=i.exports},260:function(e,t,n){"use strict";n.r(t);var a=n(25),o=n(1),i=n(5),l=n(3),r={name:"Leadership",data:function(){return{deleteDialog:!1,title:null,selectedLeader:null,headers:[{text:"Name",value:"name",width:"15%"},{text:"Position",value:"position"},{text:"Level",value:"level"},{text:"Description",value:"description"},{text:"Actions",value:"actions",sortable:!1}]}},created:function(){this.fetchTableData()},methods:{onDeleteConfirmation:function(e){var t=this;this.deleteDialog=!1,e&&(console.log(this.selectedLeader),l.b.delete("/leadership/".concat(this.selectedLeader.id)).then((function(e){t.fetchTableData()}),(function(e){console.log(e)})))},onDelete:function(e){this.selectedLeader=e,this.title=e.name,this.deleteDialog=!0},onEdit:function(e){console.log(e),o.a.dispatch("setSelectedLeader",{id:e.id}),i.a.push("/leadership/".concat(e.id,"/edit"))},compress:function(e){return e.length>30?e.substr(0,30)+"...":e},fetchTableData:function(){o.a.dispatch("setLeaders",{page:1,size:10})}},components:{"delete-dialog":a.a},computed:{leaders:function(){return o.a.getters.getLeaders}}},s=n(2),c=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"px-5 py-3 shadow-lg"},[n("delete-dialog",{attrs:{open:e.deleteDialog,title:e.title},on:{onConfirmation:e.onDeleteConfirmation}}),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-card-title",[e._v("\n        Leadership\n      ")])],1),e._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[n("v-toolbar",{staticClass:"float-right",attrs:{color:"white",flat:""}},[n("v-btn",{attrs:{color:"primary",dark:"",to:"/leadership/new"}},[e._v("Add New\n        ")])],1)],1)],1),e._v(" "),n("v-data-table",{staticClass:" mx-auto my-auto",attrs:{headers:e.headers,items:e.leaders},scopedSlots:e._u([{key:"no-data",fn:function(){return[n("p",{staticClass:"my-2"},[e._v("No Data Available")])]},proxy:!0},{key:"item.title",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(e.compress(n.title))+"\n    ")]}},{key:"item.description",fn:function(t){var a=t.item;return[n("p",{domProps:{textContent:e._s(e.htmlToText(a.description))}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.onEdit(a)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),n("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.onDelete(a)}}},[e._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"60661a03",null);t.default=c.exports}}]);