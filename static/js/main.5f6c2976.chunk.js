(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{68:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a(9),s=a.n(r),o=(a(68),a(17)),l=a.n(o),i=a(55),u=a(29),j=a(14),b="https://api.nasa.gov/mars-photos/api/v1/rovers?",d="api_key=".concat("AGzNTY5CKbBE9NstQ1iqDx9i3FkdRMKw3Z3LIcb2"),m={baseUrl:"https://api.nasa.gov/mars-photos/api/v1/rovers",token:d},p=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(d));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.rovers);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=(a(70),a(110)),v=a(117),O=a(113),f=a(115),x=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},colorStyle:{color:"#bbdefb"},borderStyle:{border:"2px solid #bbdefb"},bgcStyle:{backgroundColor:"#3e2723"}}})),g=function(e){var t=e.selectedRover,a=e.filterByRoverName,c=e.rovers,r=x();return Object(n.jsx)("div",{className:"rovers",children:Object(n.jsxs)(O.a,{variant:"outlined",className:r.formControl,children:[Object(n.jsx)(v.a,{htmlFor:"outlined-age-native-simple",className:r.colorStyle,children:"Rover"}),Object(n.jsxs)(f.a,{className:r.bgcStyle,native:!0,value:t.name,onChange:a,label:"Rover",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{"aria-label":"None",value:"",className:"rovers__option"}),c.map((function(e){return Object(n.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})})},N=(a(74),function(e){var t=e.cameras,a=e.filterByCamerasName,c=e.selectedCamera,r=x();return Object(n.jsx)("div",{className:"cameras",children:Object(n.jsxs)(O.a,{variant:"outlined",className:r.formControl,children:[Object(n.jsx)(v.a,{htmlFor:"outlined-age-native-simple",className:r.colorStyle,children:"Camera"}),Object(n.jsxs)(f.a,{className:r.bgcStyle,native:!0,value:c.name,onChange:a,defaultValue:"Choose camera",label:"Camera",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{"aria-label":"None",value:"",className:"cameras__option"}),t.map((function(e){return Object(n.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})})}),_=(a(75),function(e){var t=e.solRange,a=e.selectSolDays,c=e.selectedRover;return Object(n.jsxs)("div",{className:"sol-range",children:[Object(n.jsx)("label",{htmlFor:"rangeId",className:"",children:"Choose sol:"}),Object(n.jsx)("input",{min:"1",max:c.max_sol,type:"range",className:"sol-range__field",id:"rangeId",defaultValue:t,onChange:a}),Object(n.jsx)("span",{className:"sol-range__text",children:t})]})}),y=a(116),C=a(52),S=a.n(C),R=a(54),k=a.n(R),w=a(53),B=a.n(w),P=(a(76),function(e){var t=e.selectedRover,a=e.selectedCamera,r=e.solRange,s=(e.setSelectedRover,e.setSelectedCamera,e.setSolRange,Object(c.useState)([])),o=Object(j.a)(s,2),i=o[0],b=o[1],d=Object(c.useState)(0),p=Object(j.a)(d,2),h=(p[0],p[1],Object(c.useState)(4)),v=Object(j.a)(h,2),O=(v[0],v[1],m.baseUrl),f=m.token,x="",g="";t.hasOwnProperty("name")&&a.hasOwnProperty("name")&&(x=t.name.toLowerCase(),g=a.name.toLowerCase());var N="".concat(O,"/").concat(x,"/photos?sol=").concat(r,"&").concat(g,"&").concat(f),_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x||!g){e.next=8;break}return e.next=3,fetch(N);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,b(a.photos);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){_()}),[]);var C=Object(c.useReducer)((function(e,t){switch(t.type){case"increase":return e+1;case"decrease":return e-1;default:return e}}),0),R=Object(j.a)(C,2),w=R[0],P=R[1];return Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("div",{className:"photo__download-block",children:Object(n.jsxs)(y.a,{variant:"contained",color:"primary",onClick:_,children:["Download Photo",Object(n.jsx)(S.a,{})]})}),Object(n.jsxs)("div",{className:"photo__buttons",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return P({type:"decrease"})},disabled:0===w,className:"photo__btn btn-decrease",children:Object(n.jsx)(B.a,{})}),Object(n.jsx)("button",{type:"button",onClick:function(){return P({type:"increase"})},disabled:w===i.length-1,className:"photo__btn btn-increase",children:Object(n.jsx)(k.a,{})})]}),!i.length&&Object(n.jsx)("h2",{className:"photo__title-loading",children:"No photos, try another camera"}),i.length>1&&Object(n.jsxs)("div",{className:"photo__container",children:[Object(n.jsx)("h2",{className:"photo__title-count",children:"".concat(w+1," / ").concat(i.length)}),Object(n.jsx)("img",{className:"photo__img",src:i[w].img_src,alt:"rover photo"})]})]})}),E=(a(78),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)({}),o=Object(j.a)(s,2),b=o[0],d=o[1],m=Object(c.useState)([]),h=Object(j.a)(m,2),v=h[0],O=h[1],f=Object(c.useState)({}),x=Object(j.a)(f,2),y=x[0],C=x[1],S=Object(c.useState)("1"),R=Object(j.a)(S,2),k=R[0],w=R[1],B=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(Object(i.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){B()}),[]);return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("h1",{className:"app__title",children:"NASA APIs"}),Object(n.jsx)("div",{className:"app__logo"}),Object(n.jsxs)("div",{className:"app__selects",children:[Object(n.jsx)(g,{filterByRoverName:function(e){var t=e.target,n=a.find((function(e){return e.name===t.value}));d(n),O(n.cameras)},selectedRover:b,rovers:a}),Object(n.jsx)(N,{filterByCamerasName:function(e){var t=e.target,a=v.find((function(e){return e.name===t.value}));C(a)},selectedCamera:y,cameras:v}),Object(n.jsx)(_,{selectSolDays:function(e){var t=e.target;w(t.value)},solRange:k,selectedRover:b})]}),Object(n.jsx)(P,{selectedRover:b,selectedCamera:y,solRange:k,setSelectedRover:d,setSelectedCamera:C,setSolRange:w})]})});s.a.render(Object(n.jsx)(E,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.5f6c2976.chunk.js.map