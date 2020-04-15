(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{274:function(t,e,n){"use strict";n.r(e);var i=n(28),o=n(1),a=n(5),l=n(3),c={name:"News",data:function(){return{deleteDialog:!1,title:null,selectedPublication:null,headers:[{text:"Title",value:"title",width:"15%"},{text:"Description",value:"description"},{text:"Category",value:"category"},{text:"Actions",value:"actions",sortable:!1}]}},created:function(){this.fetchTableData()},methods:{onDeleteConfirmation:function(t){var e=this;this.deleteDialog=!1,t&&(console.log(this.selectedPublication),l.b.delete("/publication/".concat(this.selectedPublication.id)).then((function(t){e.fetchTableData()}),(function(t){console.log(t)})))},onDelete:function(t){this.selectedPublication=t,this.title=t.title,this.deleteDialog=!0},onEdit:function(t){console.log(t),o.a.dispatch("setSelectedPublication",{id:t.id}),a.a.push("/publications/".concat(t.id,"/edit"))},compress:function(t){return t.length>30?t.substr(0,30)+"...":t},fetchTableData:function(){o.a.dispatch("setPublications",{page:1,size:10,year:"All",category:""})}},components:{"delete-dialog":i.a},computed:{publications:function(){return o.a.getters.getPublications}}},s=n(2),r=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-5 py-3 shadow-lg"},[n("delete-dialog",{attrs:{open:t.deleteDialog,title:t.title},on:{onConfirmation:t.onDeleteConfirmation}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-card-title",[t._v("\n        Publications\n      ")])],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[n("v-toolbar",{staticClass:"float-right",attrs:{color:"white",flat:""}},[n("v-btn",{attrs:{color:"primary",dark:"",to:"/publications/new"}},[t._v("Add New\n        ")])],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:" mx-auto my-auto",attrs:{headers:t.headers,items:t.publications},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("p",{staticClass:"my-2"},[t._v("No Data Available")])]},proxy:!0},{key:"item.title",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.compress(n.title))+"\n    ")]}},{key:"item.description",fn:function(e){var i=e.item;return[n("p",{domProps:{textContent:t._s(t.htmlToText(i.description))}})]}},{key:"item.actions",fn:function(e){var i=e.item;return[n("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.onEdit(i)}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.onDelete(i)}}},[t._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"2b7f9c19",null);e.default=r.exports},28:function(t,e,n){"use strict";var i={name:"DeleteDialog",props:["open","title"],methods:{result:function(t){this.$emit("onConfirmation",t)}}},o=n(2),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete confirmation")]),t._v(" "),n("v-card-text",[t._v("\n      Are you sure you want to permanently delete "),n("b",[t._v(t._s(t.title))]),t._v("?\n    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.result(!1)}}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.result(!0)}}},[t._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"46851f48",null);e.a=a.exports}}]);