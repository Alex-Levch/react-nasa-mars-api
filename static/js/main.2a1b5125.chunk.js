(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{68:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a(9),s=a.n(c),o=(a(68),a(17)),l=a.n(o),i=a(55),u=a(29),j=a(14),m="https://api.nasa.gov/mars-photos/api/v1/rovers?",b="api_key=".concat("AGzNTY5CKbBE9NstQ1iqDx9i3FkdRMKw3Z3LIcb2"),d={baseUrl:"https://api.nasa.gov/mars-photos/api/v1/rovers",token:b},p=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m).concat(b));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.rovers);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=(a(70),a(108)),v=a(115),O=a(111),f=a(113),x=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},colorStyle:{color:"#fff",fontWeight:600,textShadow:"0 0 15px"},borderStyle:{border:"2px solid #bbdefb"},bgcStyle:{backgroundColor:"#388e3c"}}})),g=function(e){var t=e.selectedRover,a=e.filterByRoverName,r=e.rovers,c=x();return Object(n.jsx)("div",{className:"rovers",children:Object(n.jsxs)(O.a,{variant:"outlined",className:c.formControl,children:[Object(n.jsx)(v.a,{htmlFor:"outlined-age-native-simple",className:c.colorStyle,children:"Rover"}),Object(n.jsxs)(f.a,{className:c.bgcStyle,native:!0,value:t.hasOwnProperty("name")?t.name:"Choose rover",onChange:a,label:"Rover",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{disabled:!0,"aria-label":"None",value:"Choose rover",className:"rovers__option",children:"Choose rover"}),r.map((function(e){return Object(n.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})})},N=(a(74),function(e){var t=e.cameras,a=e.filterByCamerasName,r=e.selectedCamera,c=x();return Object(n.jsx)("div",{className:"cameras",children:Object(n.jsxs)(O.a,{variant:"outlined",className:c.formControl,children:[Object(n.jsx)(v.a,{htmlFor:"outlined-age-native-simple",className:c.colorStyle,children:"Camera"}),Object(n.jsxs)(f.a,{className:c.bgcStyle,native:!0,value:r.hasOwnProperty("name")?r.name:"Choose camera",onChange:a,label:"Camera",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{disabled:!0,"aria-label":"None",value:"Choose camera",className:"cameras__option",children:"Choose camera"}),t.map((function(e){return Object(n.jsx)("option",{className:"cameras__option",value:e.name,children:e.name},e.id)}))]})]})})}),_=(a(75),function(e){var t=e.solRange,a=e.selectSolDays,r=e.selectedRover;return Object(n.jsxs)("div",{className:"sol-range",children:[Object(n.jsx)("label",{htmlFor:"rangeId",className:"sol-range__label",children:"Choose sol:"}),Object(n.jsx)("input",{min:"1",max:r.hasOwnProperty("max_sol")?r.max_sol:"1",type:"range",className:"sol-range__field",id:"rangeId",defaultValue:t,onChange:a}),Object(n.jsx)("p",{className:"sol-range__text",children:t})]})}),y=a(114),C=a(52),S=a.n(C),w=a(54),R=a.n(w),k=a(53),P=a.n(k),B=(a(76),function(e){var t=e.selectedRover,a=e.selectedCamera,c=e.solRange,s=e.setSelectedRover,o=e.setSelectedCamera,i=e.setSolRange,m=Object(r.useState)([]),b=Object(j.a)(m,2),p=b[0],h=b[1],v=Object(r.useState)(0),O=Object(j.a)(v,2),f=(O[0],O[1],Object(r.useState)(4)),x=Object(j.a)(f,2),g=(x[0],x[1],d.baseUrl),N=d.token,_="",C="";t&&a&&t.hasOwnProperty("name")&&a.hasOwnProperty("name")&&(_=t.name.toLowerCase(),C=a.name.toLowerCase());var w="".concat(g,"/").concat(_,"/photos?sol=").concat(c,"&").concat(C,"&").concat(N),k=Object(r.useReducer)((function(e,t){switch(t.type){case"increase":return e+1;case"decrease":return e-1;case"reset":return 0;default:return e}}),0),B=Object(j.a)(k,2),E=B[0],I=B[1],A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_||!C){e.next=8;break}return e.next=3,fetch(w);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,h(a.photos);case 8:s({}),o({}),i("1"),I({type:"reset"});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){A()}),[]),Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("div",{className:"photo__download-block",children:Object(n.jsxs)(y.a,{variant:"contained",color:"primary",onClick:A,children:["Download Photo",Object(n.jsx)(S.a,{})]})}),Object(n.jsxs)("div",{className:"photo__buttons",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return I({type:"decrease"})},disabled:0===E,className:"photo__btn",children:Object(n.jsx)(P.a,{className:"btn-icon"})}),Object(n.jsx)("button",{type:"button",onClick:function(){return I({type:"increase"})},disabled:E===p.length-1,className:"photo__btn",children:Object(n.jsx)(R.a,{className:"btn-icon"})})]}),!p.length&&Object(n.jsx)("h2",{className:"photo__title-loading",children:"No photos, try another camera"}),p.length>1&&Object(n.jsxs)("div",{className:"photo__container",children:[Object(n.jsx)("h2",{className:"photo__title-count",children:"".concat(E+1," / ").concat(p.length)}),Object(n.jsx)("img",{className:"photo__img",src:p[E]&&p[E].img_src,alt:"rover photo"})]})]})}),E=(a(78),function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)({}),o=Object(j.a)(s,2),m=o[0],b=o[1],d=Object(r.useState)([]),h=Object(j.a)(d,2),v=h[0],O=h[1],f=Object(r.useState)({}),x=Object(j.a)(f,2),y=x[0],C=x[1],S=Object(r.useState)("1"),w=Object(j.a)(S,2),R=w[0],k=w[1],P=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(Object(i.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){P()}),[]);return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("h1",{className:"app__title",children:"NASA APIs"}),Object(n.jsx)("div",{className:"app__logo"}),Object(n.jsxs)("div",{className:"app__selects",children:[Object(n.jsx)(g,{filterByRoverName:function(e){var t=e.target,n=a.find((function(e){return e.name===t.value}));b(n),n&&O(n.cameras)},selectedRover:m,rovers:a}),Object(n.jsx)(N,{filterByCamerasName:function(e){var t=e.target,a=v.find((function(e){return e.name===t.value}));C(a)},selectedCamera:y,cameras:v}),Object(n.jsx)(_,{selectSolDays:function(e){var t=e.target;k(t.value)},solRange:R,selectedRover:m})]}),Object(n.jsx)(B,{selectedRover:m,selectedCamera:y,solRange:R,setSelectedRover:b,setSelectedCamera:C,setSolRange:k})]})});s.a.render(Object(n.jsx)(E,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.2a1b5125.chunk.js.map