(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function c(t){return i.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{"chunk-56a77692":"ae5867df",pdfjsWorker:"eeacd9f2"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var u=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"19d3":function(t,e,n){},"23a0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,r,o,!1,null,null,null),u=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{paths:t.stack}}),n("Explorer",t._b({},"Explorer",{folderContent:t.folderContent},!1)),n("Footer",t._b({},"Footer",{pdfCount:t.pdfCount},!1))],1)},p=[],h=(n("a434"),n("96cf"),n("1da1")),d=n("bc3a"),g=n.n(d),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"mainHeader"},[n("div",{staticClass:"icons"},[n("i",{staticClass:"fa fa-arrow-left fa-10x",on:{click:function(e){return t.goBack()}}}),n("i",{staticClass:"fa fa-home fa-10x",on:{click:function(e){return t.goHome()}}})]),n("div",{attrs:{id:"hierarchy"}},t._l(t.paths,(function(e,a){return n("span",{key:"path-"+a,staticClass:"path",on:{click:function(n){return t.navigate(e.path,a)}}},[t._v(" "+t._s(e.name)+" > ")])})),0)])},v=[],k={name:"Header",props:["paths"],methods:{navigate:function(t,e){this.$parent.getDirectory(e)},goHome:function(){this.$parent.goHome()},goBack:function(){this.$parent.goBack()}}},b=k,P=(n("5a82"),Object(c["a"])(b,m,v,!1,null,null,null)),_=P.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"explorer"},t._l(t.folderContent,(function(t,e){return n("span",{key:"folderContent-"+e},[n("Item",{attrs:{itemName:t.name,isDirectory:t.isDirectory}})],1)})),0)},C=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",on:{click:t.openItem}},[this.isDirectory?n("i",{staticClass:"fa fa-folder-open"}):t._e(),this.isDirectory?t._e():n("i",{staticClass:"fa fa-file"}),n("div",[t._v(" "+t._s(this.itemName)+" ")])])},x=[],D={name:"Item",props:["itemName","isDirectory"],methods:{openItem:function(){this.$parent.openItem(this.itemName,this.isDirectory)}}},j=D,O=(n("dc56"),Object(c["a"])(j,w,x,!1,null,null,null)),E=O.exports,$={name:"Explorer",props:["folderContent"],components:{Item:E},methods:{openItem:function(t,e){this.$parent.openItem(t,e)}}},F=$,N=(n("77d9"),Object(c["a"])(F,y,C,!1,null,null,null)),H=N.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("span",{staticClass:"footerLabel"},[t._v(" PDF Files: "+t._s(t.pdfCount)+" ")])])},S=[],B={name:"Footer",props:["pdfCount"]},R=B,T=(n("dbcb"),Object(c["a"])(R,I,S,!1,null,null,null)),J=T.exports,M="https://salty-forest-05662.herokuapp.com",L={name:"App",data:function(){return{stack:[{name:"Home",path:"/"}],folderContent:[],pdfCount:0}},components:{Header:_,Explorer:H,Footer:J},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.backstack&&(t.stack=JSON.parse(localStorage.backstack)),t.getDirectory(t.stack.length-1);case 2:case"end":return e.stop()}}),e)})))()},methods:{getDirectory:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.stack=this.stack.splice(0,e+1),t.next=4,g.a.get(M+"?path="+this.stack[e].path);case 4:n=t.sent,"error"===n.data.message?alert(n.data.data):(this.folderContent=n.data.data,this.pdfCount=n.data.pdfCount),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),openDirectory:function(t){var e=this.stack.length,n=this.stack[e-1].path+t+"/";this.stack.push({name:t,path:n}),this.getDirectory(e)},openItem:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?this.openDirectory(e):(a=M+this.stack[this.stack.length-1].path+e,ut.push({name:"document",path:"document",params:{filePath:a,fileName:e}}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),goHome:function(){this.stack.length>1&&this.getDirectory(0)},goBack:function(){this.stack.length>1&&(this.stack.pop(),this.getDirectory(this.stack.length-1))}},watch:{stack:function(){localStorage.backstack=JSON.stringify(this.stack)}}},W=L,A=Object(c["a"])(W,f,p,!1,null,null,null),V=A.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PDFHeader",t._b({},"PDFHeader",{fileName:t.fileName,curPage:t.curPage,pages:t.pages},!1)),n("PDFDocument",t._b({},"PDFDocument",{url:t.url,scale:t.scale,curPage:t.curPage},!1))],1)},z=[],G=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"pdfHeader"},[n("div",{staticClass:"icons"},[n("i",{staticClass:"fa fa-arrow-left fa-10x",on:{click:function(e){return t.goBack()}}})]),n("div",{staticClass:"pdfInteractables"},[n("span",[t._v(" "+t._s(this.fileName)+" ")]),n("span",{staticClass:"icons",on:{click:function(e){return t.loadPrevPage()}}},[n("i",{staticClass:"fa fa-angle-left"})]),t._v(" "+t._s(this.page)+" / "+t._s(this.pages)+" "),n("span",{staticClass:"icons",on:{click:function(e){return t.loadNextPage()}}},[n("i",{staticClass:"fa fa-angle-right"})])])])}),K=[],Q={name:"PDFHeader",props:["fileName","curPage","pages"],data:function(){return{page:this.curPage}},methods:{goBack:function(){ut.go(-1)},loadPrevPage:function(){this.page>1&&(this.page-=1,this.$parent.changePage(this.page))},loadNextPage:function(){this.page<this.pages&&(this.page+=1,this.$parent.changePage(this.page))}}},U=Q,X=(n("e92f"),Object(c["a"])(U,G,K,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{attrs:{id:"pageCanvas"}})])}],et={name:"PDFDocument",props:["url","scale","curPage"],created:function(){this.getPDFPage()},methods:{getPDFPage:function(){var t=this;n.e("chunk-56a77692").then(n.t.bind(null,"9511",7)).then((function(e){e.getDocument(t.url).then((function(e){e.getPage(t.curPage).then((function(e){var n=e.getViewport(t.scale),a=document.getElementById("pageCanvas");a.height=n.height,a.width=n.width;var r=a.getContext("2d");r.clearRect(0,0,a.width,a.height);var o={canvasContext:r,viewport:n};e.render(o).then((function(){return console.log("Page rendered")}))})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))}},watch:{curPage:function(){this.getPDFPage()}}},nt=et,at=(n("8fec"),Object(c["a"])(nt,Z,tt,!1,null,null,null)),rt=at.exports,ot={name:"Viewer",props:["filePath","fileName"],data:function(){return{url:this.filePath,scale:1.5,curPage:1,pages:1}},components:{PDFHeader:Y,PDFDocument:rt},created:function(){this.getPageNumbers()},methods:{getPageNumbers:function(){var t=this;n.e("chunk-56a77692").then(n.t.bind(null,"9511",7)).then((function(e){e.getDocument(t.filePath).then((function(e){t.pages=e.numPages})).catch((function(e){console.log(e),t.pages=0}))})).catch((function(t){console.log(t)}))},changePage:function(t){this.curPage=t}}},ct=ot,it=Object(c["a"])(ct,q,z,!1,null,null,null),st=it.exports;a["a"].use(l["a"]);var ut=new l["a"]({routes:[{path:"/",name:"home",component:V},{path:"/document",name:"document",component:st,props:!0}]});a["a"].config.productionTip=!1,new a["a"]({router:ut,render:function(t){return t(u)}}).$mount("#app")},"5a82":function(t,e,n){"use strict";var a=n("e248"),r=n.n(a);r.a},"77d9":function(t,e,n){"use strict";var a=n("19d3"),r=n.n(a);r.a},"85ec":function(t,e,n){},"8fec":function(t,e,n){"use strict";var a=n("be56"),r=n.n(a);r.a},be56:function(t,e,n){},c490:function(t,e,n){},d20a:function(t,e,n){},dbcb:function(t,e,n){"use strict";var a=n("c490"),r=n.n(a);r.a},dc56:function(t,e,n){"use strict";var a=n("23a0"),r=n.n(a);r.a},e248:function(t,e,n){},e92f:function(t,e,n){"use strict";var a=n("d20a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1e70b075.js.map