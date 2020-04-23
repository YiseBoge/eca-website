(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{268:function(t,e,n){"use strict";n.r(e);var a=n(28),o=n(1),i=n(3),s=n(5),r={name:"News",data:function(){return{deleteDialog:!1,title:null,selectedNews:null,headers:[{text:"Title",value:"title"},{text:"Description",value:"description"},{text:"Category",value:"category"},{text:"Featured",value:"is_featured"},{text:"Actions",value:"actions",sortable:!1,width:"100px"}]}},created:function(){this.fetchTableData()},methods:{onDeleteConfirmation:function(t){var e=this;this.deleteDialog=!1,t&&(console.log(this.selectedNews),i.b.delete("/news/".concat(this.selectedNews.id)).then((function(t){e.fetchTableData()}),(function(t){Object(s.a)(t)})))},onDelete:function(t){this.selectedNews=t,this.title=t.title,this.deleteDialog=!0},compress:function(t){return t.length>30?t.substr(0,30)+"...":t},fetchTableData:function(){o.a.dispatch("setNews",{page:1,size:10,year:"All",category:""})}},components:{"delete-dialog":a.a},computed:{news:function(){return o.a.getters.getNews},loading:function(){return o.a.getters.getLoading}}},l=n(2),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-5 py-3 shadow-lg"},[n("delete-dialog",{attrs:{open:t.deleteDialog,title:t.title},on:{onConfirmation:t.onDeleteConfirmation}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-card-title",[t._v("\n        News\n      ")])],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[n("v-toolbar",{staticClass:"float-right",attrs:{color:"white",flat:""}},[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.$router.push("/news/new")}}},[t._v("Add New\n        ")])],1)],1)],1),t._v(" "),n("v-fade-transition",{attrs:{"hide-on-leave":""}},[t.loading?n("v-skeleton-loader",{attrs:{type:"table"}}):n("v-data-table",{staticClass:" mx-auto my-auto",attrs:{headers:t.headers,items:t.news,"sort-by":"calories"},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("p",{staticClass:"my-2"},[t._v("No Data Available")])]},proxy:!0},{key:"item.title",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.compress(n.title))+"\n      ")]}},{key:"item.description",fn:function(e){var a=e.item;return[n("p",{staticClass:"text-truncate my-2",staticStyle:{"max-width":"400px"},domProps:{textContent:t._s(t.htmlToText(a.description))}})]}},{key:"item.is_featured",fn:function(e){var a=e.item;return[n("p",{staticClass:"my-2",domProps:{textContent:t._s(a.is_featured?"Yes":"No")}})]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.$router.push("/news/"+a.id+"/edit")}}},[t._v("\n          mdi-pencil\n        ")]),t._v(" "),n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.onDelete(a)}}},[t._v("\n          mdi-delete\n        ")])]}}])})],1)],1)}),[],!1,null,null,null);e.default=c.exports},28:function(t,e,n){"use strict";var a={name:"DeleteDialog",props:["open","title"],methods:{result:function(t){this.$emit("onConfirmation",t)}}},o=n(2),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete confirmation")]),t._v(" "),n("v-card-text",[t._v("\n      Are you sure you want to permanently delete "),n("b",[t._v(t._s(t.title))]),t._v("?\n    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.result(!1)}}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.result(!0)}}},[t._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"46851f48",null);e.a=i.exports}}]);