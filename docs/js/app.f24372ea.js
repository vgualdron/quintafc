(function(t){function e(e){for(var a,c,o=e[0],s=e[1],u=e[2],m=0,f=[];m<o.length;m++)c=o[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.beacaada.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),o={},s=Object(c["a"])(o,r,i,!1,null,null,null),u=s.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comics"},[n("navbar"),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-flex-grow-1 is-flex"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v("John Smith")]),n("p",{staticClass:"subtitle is-6"},[t._v("@johnsmith")])])]),n("div",{staticClass:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),n("a",[t._v("@bulmaio")]),t._v(". "),n("a",{attrs:{href:"#"}},[t._v("#css")]),n("a",{attrs:{href:"#"}},[t._v("#responsive")]),n("br"),n("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])])])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar is-fixed-top",class:t.selectedNavTheme,attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"#"}},[n("img",{attrs:{src:t.companyLogo,alt:"Comics project",width:"100",height:"28"}})]),n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.active},attrs:{"data-target":"navbarExampleTransparentExample"},on:{click:function(e){t.active=!t.active}}},[n("span"),n("span"),n("span")])])])])},d=[],v=n("4ffd"),b=n.n(v),C={name:"Navbar",data:function(){return{active:!1,companyLogo:b.a,selectedNavTheme:"is-light"}},methods:{showPoints:function(){this.$emit("showPoints")}}},h=C,_=Object(c["a"])(h,p,d,!1,null,null,null),O=_.exports,g={name:"Home",data:function(){return{showModal:!1}},components:{Navbar:O}},T=g,E=Object(c["a"])(T,m,f,!1,null,null,null),N=E.exports,S=[{path:"/",component:N}];a["a"].use(l["a"]);var P,x,I=new l["a"]({routes:S}),j=I,w=n("ade3"),M=n("2f62"),y={PATH:"@module/comics",actions:{FETCH_COMIC:"@actions/fetchComic",UPDATE_CURRENT_NUMBER_COMIC:"@actions/updateCurrentNumberComic",FETCH_POINTS:"@actions/fetchPoints",UPDATE_POINTS:"@actions/updatePoints"},getters:{},mutations:{SET_COMIC:"@mutations/setComic",SET_CURRENT_NUMBER_COMIC:"@mutations/setCurrentNumberComic",SET_POINTS:"@mutations/setPoints",SET_LOADING_COMIC:"@mutations/setLoadingComic"}},R={minNumberComic:1,maxNumberComic:2592,currentNumberComic:1,comic:{num:1},points:[],isLoadingComic:!1},U=n("1da1"),k=(n("96cf"),n("99af"),n("bc3a")),A=n.n(k),L=n("5530"),D=(n("7db0"),n("d3b7"),n("c740"),n("4e82"),n("e9c4"),function(t){var e=JSON.parse(localStorage.getItem(t));return e}),H=function(t){var e=t.path,n=t.data,a=D(e)?D(e):[],r=a.find((function(t){return t.num==n.num}));if(r){var i=a.findIndex((function(t){return t.num==n.num}));a[i]=Object(L["a"])(Object(L["a"])({},r),{},{points:r.points+n.points})}else a.push(n);return a.sort((function(t,e){return parseFloat(e.points)-parseFloat(t.points)})),localStorage.setItem(e,JSON.stringify(a)),JSON.parse(localStorage.getItem(e))},J={fetchComic:function(t){var e=t.number;return A()({url:"".concat("https://novumcolombia.com/proxy.php","/").concat(e,"/info.0.json?number=").concat(e),method:"GET"})},fetchPoints:function(t){return D(t)},addPoints:function(t){var e=t.path,n=t.data;return H({data:n,path:e})}},F=(P={},Object(w["a"])(P,y.actions.FETCH_COMIC,(function(t){return Object(U["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,e.prev=1,n(y.mutations.SET_LOADING_COMIC,!0),r={number:a.currentNumberComic},e.next=6,J.fetchComic(r);case 6:i=e.sent,n(y.mutations.SET_COMIC,i.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.error(e.t0);case 13:return e.prev=13,n(y.mutations.SET_LOADING_COMIC,!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()})),Object(w["a"])(P,y.actions.UPDATE_CURRENT_NUMBER_COMIC,(function(t,e){var n=t.commit;n(y.mutations.SET_CURRENT_NUMBER_COMIC,e)})),Object(w["a"])(P,y.actions.FETCH_POINTS,(function(t,e){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,J.fetchPoints(e);case 4:r=n.sent,a(y.mutations.SET_POINTS,r),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()})),Object(w["a"])(P,y.actions.UPDATE_POINTS,(function(t,e){return Object(U["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,J.addPoints(e);case 4:r=n.sent,a(y.mutations.SET_POINTS,r),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()})),P),$={},B=(x={},Object(w["a"])(x,y.mutations.SET_COMIC,(function(t,e){t.comic=e})),Object(w["a"])(x,y.mutations.SET_CURRENT_NUMBER_COMIC,(function(t,e){t.currentNumberComic=e})),Object(w["a"])(x,y.mutations.SET_POINTS,(function(t,e){t.points=e})),Object(w["a"])(x,y.mutations.SET_LOADING_COMIC,(function(t,e){t.isLoadingComic=e})),x),G={namespaced:!0,state:R,actions:F,getters:$,mutations:B},q=y.PATH;a["a"].use(M["a"]);var z=new M["a"].Store({modules:Object(w["a"])({},q,G)});n("c1c3"),n("e27f"),a["a"].config.productionTip=!1,new a["a"]({router:j,store:z,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},c1c3:function(t,e,n){},e27f:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=n("ecee"),i=n("c074"),c=n("ad3d");r["c"].add(i["f"]),r["c"].add(i["c"]),r["c"].add(i["b"]),r["c"].add(i["a"]),r["c"].add(i["e"]),r["c"].add(i["g"]),r["c"].add(i["d"]),a["a"].component("font-awesome-icon",c["a"])}});
//# sourceMappingURL=app.f24372ea.js.map