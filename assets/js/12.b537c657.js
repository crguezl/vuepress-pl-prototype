(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{495:function(t,e,a){"use strict";a.r(e);var r=a(118),n=(a(175),a(4),["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."]),s={data:function(){return{author:"",quote:"",src:""}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var a,r,n,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Comfort yourself with a kitten","https://api.thecatapi.com/v1/images/search?size=full","56a4f1cc-7f60-468d-9dba-e4b6f04b7c7d",a="https://api.quotable.io/random","<em>It appears you have stumbled onto the dark hole page of this website.</em> \n         This page was built to catch the wanderers who have gone astray. \n         <br/>",e.prev=5,e.next=8,fetch("https://api.thecatapi.com/v1/images/search?size=full",{headers:{"x-api-key":"56a4f1cc-7f60-468d-9dba-e4b6f04b7c7d"}});case 8:return r=e.sent,console.log(r),e.next=12,r.json();case 12:return n=e.sent,console.log(n),t.src=n[0].url,e.next=17,fetch(a);case 17:return s=e.sent,e.next=20,s.json();case 20:o=e.sent,t.quote=o.content,t.author=o.author,e.next=28;break;case 25:e.prev=25,e.t0=e.catch(5),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[5,25]])})))()},methods:{getMsg:function(){return n[Math.floor(Math.random()*n.length)]}}},o=a(56),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container"},[a("div",{staticClass:"theme-default-content"},[a("h1",[t._v("404")]),t._v(" "),a("blockquote",[t._v(t._s(t.getMsg()))]),t._v(" "),a("div",{attrs:{id:"comment-cat"}}),t._v(" "),a("div",{attrs:{id:"cat"}},[a("img",{attrs:{src:t.src}})]),t._v(" "),a("br"),t._v(" "),a("div",{attrs:{id:"quote"}},[t._v("\n      "+t._s(t.quote)+"\n    ")]),t._v(" "),a("div",{staticStyle:{"text-align":"right"},attrs:{id:"author"}},[t._v("\n      "+t._s(t.author)+"\n    ")]),t._v(" "),a("RouterLink",{attrs:{to:"/"}},[t._v(" Take me home. ")])],1)])}),[],!1,null,null,null);e.default=c.exports}}]);