(function(e){function t(t){for(var c,a,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var c={},r={app:0},n=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6ea18848"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,c){o=r[e]=[t,c]}));t.push(o[2]=c);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var l=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",l.name="ChunkLoadError",l.type=c,l.request=n,o[1](l)}r[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(o,c,function(t){return e[t]}.bind(null,c));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1b2b":function(e,t,o){var c={"./BasicScenario.vue":"6029","./EditorScenario.vue":"ef83","./SimpleColliderScenario.vue":"c079","./SimpleScenario.vue":"9c7f"};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=n,e.exports=r,r.id="1b2b"},4525:function(e,t,o){},"4df7":function(e,t,o){"use strict";o("f042")},"56d7":function(e,t,o){"use strict";o.r(t);var c=o("7a23");function r(e,t){const o=Object(c["C"])("router-view");return Object(c["u"])(),Object(c["d"])(o)}o("4df7");var n=o("6b0d"),a=o.n(n);const i={},s=a()(i,[["render",r]]);var l=s,u=o("6605");const b={class:"home"},p={class:"card-container"},d={class:"preview"};var O={__name:"Home",setup(e){const t=Object(u["c"])(),o=t.getRoutes().filter(e=>e.path.includes("scenario"));return(e,t)=>{const r=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["e"])("div",b,[Object(c["f"])("div",p,[(Object(c["u"])(!0),Object(c["e"])(c["a"],null,Object(c["A"])(Object(c["G"])(o),e=>(Object(c["u"])(),Object(c["e"])("div",{key:e.path,class:"card"},[Object(c["g"])(r,{to:e.path},{default:Object(c["I"])(()=>[Object(c["f"])("div",d,[Object(c["f"])("h3",null,Object(c["F"])(e.name),1),Object(c["f"])("p",null,Object(c["F"])(e.meta.description),1)])]),_:2},1032,["to"])]))),128))])])}}};o("7172");const j=a()(O,[["__scopeId","data-v-f4a395d8"]]);var f=j,g=o("9c7f"),v=o("c079");const h=e=>(Object(c["x"])("data-v-085872e0"),e=e(),Object(c["v"])(),e),m={class:"scenario"},y=h(()=>Object(c["f"])("h1",null,"Scenarios A-FRAME",-1)),_={class:"scene__container"};var C={__name:"Scenario",setup(e){return(e,t)=>(Object(c["u"])(),Object(c["e"])("div",m,[y,Object(c["f"])("div",_,[Object(c["g"])(v["default"]),Object(c["g"])(g["default"])])]))}};o("e543");const k=a()(C,[["__scopeId","data-v-085872e0"]]);var w=k;const E=o("1b2b"),S=E.keys().map(e=>{const t=e.match(/^\.\/(.*)\.vue$/)[1],o=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),c=o.endsWith("-scenario")?o.slice(0,-9):o;return{path:"/scenario/"+c,name:t,component:E(e).default}}),I=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:()=>o.e("about").then(o.bind(null,"f820"))},{path:"/scenario",name:"Scenario",meta:{description:"Scenario simple list view"},component:w}],x=[...I,...S],P=Object(u["a"])({history:Object(u["b"])("/"),routes:x});console.log(P.getRoutes());var B=P,z=o("5502"),A=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});o("b048"),o("49e6"),o("8558"),o("907d"),o("a921");Object(c["c"])(l).use(A).use(B).mount("#app")},6029:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),r=o("7d7c"),n={__name:"Box",props:{aprops:Object},emits:["onClickEvent"],setup(e,{emit:t}){const o=t,r=e,n=()=>{console.log("clicked"),o("onClickEvent")};return(e,t)=>{const o=Object(c["C"])("a-box");return Object(c["u"])(),Object(c["d"])(o,Object(c["n"])(r.aprops,{onClick:n}),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const a=n;var i=a,s={__name:"Camera",props:{aprops:Object},setup(e){const t=e;return(e,o)=>{const r=Object(c["C"])("a-camera");return Object(c["u"])(),Object(c["d"])(r,Object(c["p"])(Object(c["k"])(t.aprops)),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const l=s;var u=l,b={__name:"Scene",props:{aprops:Object},setup(e){const t=e;return(e,o)=>{const r=Object(c["C"])("a-scene");return Object(c["u"])(),Object(c["d"])(r,Object(c["p"])(Object(c["k"])(t.aprops)),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const p=b;var d=p,O={__name:"Sky",props:{aprops:Object},setup(e){const t=e;return(e,o)=>{const r=Object(c["C"])("a-sky");return Object(c["u"])(),Object(c["d"])(r,Object(c["p"])(Object(c["k"])(t.aprops)),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const j=O;var f=j,g={__name:"Grid",props:{aprops:Object},setup(e){const t=e;return(e,o)=>{const r=Object(c["C"])("a-grid");return Object(c["u"])(),Object(c["d"])(r,Object(c["p"])(Object(c["k"])(t.aprops)),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const v=g;var h=v;const m={class:"basic-scenario"},y={class:"scene-container"};var _={__name:"BasicScenario",setup(e){const t=Object(c["z"])({width:"100",height:"100",color:"#888",rotation:"-90 0 0",opacity:"0.5"}),o=Object(c["z"])({material:{shader:"sunSky"}}),n=Object(c["z"])({background:{color:"#ECECEC"},cursor:{rayOrigin:"mouse"}}),a=Object(c["z"])({position:"1 1 5"}),s=Object(c["z"])({position:"2 2 2"}),l=Object(c["z"])({color:"red"}),b=()=>{console.log(l.value.color),"blue"===l.value.color?l.value.color="red":"red"===l.value.color&&(l.value.color="blue")};return(e,p)=>(Object(c["u"])(),Object(c["e"])("div",m,[Object(c["f"])("div",y,[Object(c["g"])(d,{embedded:"",aprops:n.value},{default:Object(c["I"])(()=>[Object(c["g"])(f,{aprops:o.value},null,8,["aprops"]),Object(c["g"])(r["a"],{id:"camera",aprops:a.value},{default:Object(c["I"])(()=>[Object(c["g"])(u)]),_:1},8,["aprops"]),Object(c["g"])(h,{aprops:t.value},null,8,["aprops"]),Object(c["g"])(r["a"],{ref:"entity-box",aprops:s.value},{default:Object(c["I"])(()=>[Object(c["g"])(i,{ref:"first-box",aprops:l.value,onOnClickEvent:p[0]||(p[0]=e=>b(l.value))},null,8,["aprops"])]),_:1},8,["aprops"])]),_:1},8,["aprops"])])]))}};const C=_;t["default"]=C},7172:function(e,t,o){"use strict";o("a69d")},"7d7c":function(e,t,o){"use strict";var c=o("7a23"),r={__name:"Entity",props:{aprops:Object},emits:["onClickEvent"],setup(e,{emit:t}){const o=t,r=e,n=()=>{console.log("clicked"),o("onClickEvent")};return(e,t)=>{const o=Object(c["C"])("a-entity");return Object(c["u"])(),Object(c["d"])(o,Object(c["n"])(r.aprops,{onClick:n}),{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default")]),_:3},16)}}};const n=r;t["a"]=n},"907d":function(e,t,o){},"9c7f":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const r={class:"simple-scenario"},n={class:"scene-container"};var a={__name:"SimpleScenario",setup(e){return console.log("enter111"),Object(c["s"])(()=>{console.log("enter")}),(e,t)=>{const o=Object(c["C"])("a-box"),a=Object(c["C"])("a-sphere"),i=Object(c["C"])("a-plane"),s=Object(c["C"])("a-entity"),l=Object(c["C"])("a-scene");return Object(c["u"])(),Object(c["e"])("div",r,[Object(c["f"])("div",n,[Object(c["g"])(l,{embedded:"",background:"color: #ECECEC"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{position:"-1 0.5 -3",rotation:"0 45 0",color:"#4CC3D9",animation:"startEvents: click; property: position;\n                from: -1 1.5 -3; to: -1 0.5 -3; dur: 1000",test:"","hello-world":"",hello:"event: click; message: Clicked!"}),Object(c["g"])(o,{position:"0 0.5 -1",rotation:"0 45 0",color:"#4CC3D9",animation:"startEvents: click; property: position;\n                from: -1 1.5 -3; to: -1 0.5 -3; dur: 1000",hello:"event: click; message: Clicked!"}),Object(c["g"])(a,{position:"0 1.25 -5",radius:"1.25",color:"#EF2D5E",animation:"startEvents: click; property: scale;\n                from: 2 2 2; to: 1 1 1; dur: 1000",hello:"message: Hola"}),Object(c["g"])(i,{position:"0 0 -4",rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4"}),Object(c["g"])(s,{cursor:"rayOrigin:mouse"})]),_:1})])])}}};const i=a;t["default"]=i},a69d:function(e,t,o){},a921:function(e,t){AFRAME.registerComponent("hello-world",{schema:{},multiple:!1,init:function(){console.log("componente iniciado correctamente")},update:function(e){console.log(e)},remove:function(){},pause:function(){},play:function(){},events:{}})},c079:function(e,t,o){"use strict";o.r(t);var c=o("7a23");const r={id:"simple-collider-scenario"},n={class:"scene-container"};var a={__name:"SimpleColliderScenario",setup(e){const t=Object(c["z"])(0);return console.log(t),(e,t)=>{const o=Object(c["C"])("a-entity"),a=Object(c["C"])("a-sphere"),i=Object(c["C"])("a-box"),s=Object(c["C"])("a-scene");return Object(c["u"])(),Object(c["e"])("div",r,[Object(c["f"])("div",n,[Object(c["g"])(s,{cursor:"rayOrigin: mouse",embedded:""},{default:Object(c["I"])(()=>[Object(c["g"])(o,{id:"collider",geometry:"primitive: box",position:"0 1.6 -5",rotation:"0 45 0",scale:"1 1 1","aabb-collider":""}),Object(c["g"])(a,{test:"",position:"0 1.25 -5",radius:"1.25",color:"#EF2D5E"}),Object(c["g"])(i,{position:"-1 0.5 -3",rotation:"0 45 0",color:"#4CC3D9",animation:"startEvents: click; property: position;\n                from: -1 1.5 -3; to: -1 0.5 -3; dur: 1000",hello:"event: click; message: Clicked!"})]),_:1})])])}}};const i=a;t["default"]=i},e543:function(e,t,o){"use strict";o("4525")},ef83:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),r={__name:"TableComponent",props:{testProperty:String},setup(e){const t=e;return console.log(t.testProperty),(e,t)=>{const o=Object(c["C"])("a-box"),r=Object(c["C"])("a-entity");return Object(c["u"])(),Object(c["d"])(r,{position:"0 0.5 -5"},{default:Object(c["I"])(()=>[Object(c["g"])(r,{"hello-world":"",position:"0 0 0"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{width:"2",height:"0.1",depth:"1",color:"brown",rotation:"10 0 0"}),Object(c["g"])(r,{position:"-0.9 -0.55 -0.4"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{width:"0.1",height:"1",depth:"0.1",color:"gray"})]),_:1}),Object(c["g"])(r,{position:"0.9 -0.55 -0.4"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{width:"0.1",height:"1",depth:"0.1",color:"gray"})]),_:1}),Object(c["g"])(r,{position:"-0.9 -0.55 0.4"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{width:"0.1",height:"1",depth:"0.1",color:"gray"})]),_:1}),Object(c["g"])(r,{position:"0.9 -0.55 0.4"},{default:Object(c["I"])(()=>[Object(c["g"])(o,{width:"0.1",height:"1",depth:"0.1",color:"gray"})]),_:1})]),_:1}),Object(c["g"])(o,{width:"1.5",height:"0.1",depth:"0.5",position:"0 0.15 0",color:"gray",rotation:"10 0 0"})]),_:1})}}};const n=r;var a=n,i=o("7d7c");const s={class:"editor-scenario"},l={class:"scene-container"};var u={__name:"EditorScenario",setup(e){const t=Object(c["z"])({position:"2 2 2",geometry:"primitive: box",material:"color: red"}),o=()=>{console.log("clicked from father")};return(e,r)=>{const n=Object(c["C"])("a-camera"),u=Object(c["C"])("a-entity"),b=Object(c["C"])("a-grid"),p=Object(c["C"])("a-box"),d=Object(c["C"])("a-scene");return Object(c["u"])(),Object(c["e"])("div",s,[Object(c["f"])("div",l,[Object(c["g"])(d,{embedded:"",background:"color: #ECECEC;",cursor:"rayOrigin: mouse"},{default:Object(c["I"])(()=>[Object(c["g"])(u,{position:"0 1.6 6"},{default:Object(c["I"])(()=>[Object(c["g"])(n)]),_:1}),Object(c["g"])(b,{width:"100",height:"100",color:"#888",rotation:"-90 0 0",opacity:"0.5"}),Object(c["g"])(u,{position:"0 1.6 0"},{default:Object(c["I"])(()=>[Object(c["g"])(p,{width:"1.5",height:"0.1",depth:"0.5",color:"gray",rotation:"90 0 0",material:"color: #779fca; shader: flat; height: 256.22",geometry:"height: 0.03; depth: 1.09",visible:""}),Object(c["g"])(p,{width:"1.5",height:"0.1",depth:"0.5",color:"gray",rotation:"90 0 0",material:"color: #ca77c3; shader: flat; height: 256.22",geometry:"width: 0.24; height: 0.07; depth: 0.13",visible:"",position:"-0.01 0 0.04"})]),_:1}),Object(c["g"])(i["a"],{aprops:t.value,onOnClickEvent:o},null,8,["aprops"]),Object(c["g"])(a,{testProperty:"testProperty executed"})]),_:1})])])}}};const b=u;t["default"]=b},f042:function(e,t,o){}});
//# sourceMappingURL=app.f8bb7067.js.map