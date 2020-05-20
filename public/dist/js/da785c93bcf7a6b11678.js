(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{183:function(t,e,n){var r=n(280);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,i);r.locals&&(t.exports=r.locals)},279:function(t,e,n){"use strict";var r=n(183);n.n(r).a},280:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"\nbody[data-v-24746008]::-webkit-scrollbar {\n  width: 1px !important;\n}\nbody[data-v-24746008]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\nbody[data-v-24746008]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\nv-app-bar[data-v-24746008] {\n  font-family: 'IBM Plex Serif', serif !important;\n}\n",""])},299:function(t,e,n){"use strict";n.r(e);var r=n(23),i=n(18),a=n(0),o={name:"Search",data:function(){return{keyword:"",isLoading:!1,search:null,resultTypes:["News","Event","Publication","Media","Leaders"],resultIcons:["mdi-newspaper","mdi-calendar","mdi-file-document","mdi-folder-multiple-image","mdi-account-search"]}},methods:{getIcon:function(t){return this.resultIcons[this.resultTypes.indexOf(t)]},navigate:function(t){t.type===this.resultTypes[0]?i.a.push("/".concat(t.type.toLowerCase(),"/").concat(t.item_id)):t.type===this.resultTypes[2]?i.a.push("/".concat(t.type.toLowerCase(),"s/").concat(t.item_id)):t.type===this.resultTypes[1]&&i.a.push("/".concat(t.type.toLowerCase(),"s/"))},truncate:function(t){return t.slice(0,50)}},computed:{searchedContents:function(){return a.a.getters.getSearchResponse},loading:function(){return a.a.getters.getSearchLoading}},watch:{search:function(t){t.length<3||a.a.dispatch("search",{keyword:t})}}},s=n(2);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={components:{search:Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticStyle:{width:"300px"}},[n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{staticClass:"mx-5",attrs:{flat:"",light:"",dense:"",items:t.searchedContents,loading:t.loading,"search-input":t.search,clearable:"","hide-details":"","hide-selected":"","item-text":"title",label:"Search","prepend-inner-icon":"mdi-magnify",solo:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"append",fn:function(){return[n("p")]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-list-item",{on:{click:function(e){return t.navigate(r)}}},[n("v-list-item-avatar",{staticClass:"headline font-weight-light white--text",attrs:{color:"primary"}},[t._v("\n            "+t._s(r.title.charAt(0))+"\n          ")]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(r.title)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"text-truncate",domProps:{textContent:t._s(t.truncate(t.htmlToText(r.description)))}})],1),t._v(" "),n("v-list-item-action",{on:{click:function(e){return t.navigate(r)}}},[n("v-icon",{domProps:{textContent:t._s(t.getIcon(r.type))}})],1)],1)]}}]),model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)}),[],!1,null,null,null).exports},data:function(){return{drawer:!1,group:null,links:[{text:"ABOUT US",icon:"mdi-information",to:"/about"},{text:"NEWS",icon:"mdi-newspaper",to:"/news"},{text:"PUBLICATIONS",icon:"mdi-file-document",to:"/publications"},{text:"TENDERS",icon:"mdi-gavel",to:"/tenders"},{text:"EVENTS",icon:"mdi-calendar",to:"/events"},{text:"MEDIA",icon:"mdi-folder-multiple-image",to:"/media"}]}},computed:{currentPage:function(){return this.$route.path}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({route:function(t){i.a.push(t),this.drawer=!1}},Object(r.c)(["toggleDrawer"])),watch:{group:function(){this.drawer=!1}}},d=(n(279),Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"overflow-hidden",attrs:{raised:"",tile:""}},[n("v-app-bar",{staticClass:"px-md-12",attrs:{color:"primary",dark:""},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"}},"v-img",r,!1))]}}])},[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),t._v(" "),n("a",{attrs:{href:"/"}},[n("v-toolbar-title",[n("v-img",{staticStyle:{width:"200px"},attrs:{src:"/img/brand/white.png"}})],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-spacer"),t._v(" "),n("search"),t._v(" "),t._l(t.links,(function(e,r){return n("v-btn",{key:r,staticClass:"ml-0 hidden-sm-and-down",attrs:{to:e.to,text:""}},[t._v("\n        "+t._s(e.text)+"\n      ")])}))],2)],1),t._v(" "),t.$vuetify.breakpoint.smAndDown?n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item-group",{staticClass:"mt-5",attrs:{justify:"center","active-class":"primary--text"}},[t._l(t.links,(function(e,r){return[n("v-list-item",{key:e.text,class:t.currentPage===e.to?"primary--text v-list-item--active":"",on:{click:function(n){return t.route(e.to)}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(e.text))])],1)]}))],2)],1)],1):t._e()],1)}),[],!1,null,"24746008",null));e.default=d.exports}}]);