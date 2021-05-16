(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{69:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a(9),o=a.n(r),s=(a(69),a(17)),l=a.n(s),i=a(46),u=a(29),b=a(12),j="api_key=".concat("AGzNTY5CKbBE9NstQ1iqDx9i3FkdRMKw3Z3LIcb2"),m={baseUrl:"https://api.nasa.gov/mars-photos/api/v1/rovers",token:j},d=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.nasa.gov/mars-photos/api/v1/rovers?").concat(j));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.rovers);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=(a(71),a(109)),h=a(116),v=a(112),O=a(114),f=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},colorStyle:{color:"#fff",fontWeight:600,textShadow:"0 0 15px"},borderStyle:{border:"2px solid #bbdefb"},bgcStyle:{backgroundColor:"#388e3c"}}})),x=function(e){var t=e.selectedRover,a=e.filterByRoverName,c=e.rovers,r=f();return Object(n.jsx)("div",{className:"rovers",children:Object(n.jsxs)(v.a,{variant:"outlined",className:r.formControl,children:[Object(n.jsx)(h.a,{htmlFor:"outlined-age-native-simple",className:r.colorStyle,children:"Rover"}),Object(n.jsxs)(O.a,{className:r.bgcStyle,native:!0,value:t.hasOwnProperty("name")?t.name:"Choose rover",onChange:a,label:"Rover",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{disabled:!0,"aria-label":"None",value:"Choose rover",className:"rovers__option",children:"Choose rover"}),c.map((function(e){return Object(n.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})})},_=(a(75),function(e){var t=e.cameras,a=e.filterByCamerasName,c=e.selectedCamera,r=f();return Object(n.jsx)("div",{className:"cameras",children:Object(n.jsxs)(v.a,{variant:"outlined",className:r.formControl,children:[Object(n.jsx)(h.a,{htmlFor:"outlined-age-native-simple",className:r.colorStyle,children:"Camera"}),Object(n.jsxs)(O.a,{className:r.bgcStyle,native:!0,value:c.hasOwnProperty("name")?c.name:"Choose camera",onChange:a,label:"Camera",inputProps:{name:"rover",id:"outlined-age-native-simple"},children:[Object(n.jsx)("option",{disabled:!0,"aria-label":"None",value:"Choose camera",className:"cameras__option",children:"Choose camera"}),t.map((function(e){return Object(n.jsx)("option",{className:"cameras__option",value:e.name,children:e.name},e.id)}))]})]})})}),g=(a(76),function(e){var t=e.solRange,a=e.selectSolDays,c=e.selectedRover;return Object(n.jsxs)("div",{className:"sol-range",children:[Object(n.jsx)("label",{htmlFor:"rangeId",className:"sol-range__label",children:"Choose sol:"}),Object(n.jsx)("input",{min:"1",max:c.hasOwnProperty("max_sol")?c.max_sol:"1",type:"range",className:"sol-range__field",id:"rangeId",defaultValue:t,onChange:a}),Object(n.jsx)("p",{className:"sol-range__text",children:t})]})}),N=a(53),y=a.n(N),C=a(115),S=a(54),w=a.n(S),R=a(56),k=a.n(R),P=a(55),B=a.n(P),E=(a(77),function(e){var t=e.selectedRover,a=e.selectedCamera,r=e.solRange,o=e.setSelectedRover,s=e.setSelectedCamera,j=e.setSolRange,d=Object(c.useState)([]),p=Object(b.a)(d,2),h=p[0],v=p[1],O=Object(c.useState)(1),f=Object(b.a)(O,2),x=f[0],_=f[1],g=m.baseUrl,N=m.token,S="",R="";t&&a&&t.hasOwnProperty("name")&&a.hasOwnProperty("name")&&(S=t.name.toLowerCase(),R=a.name.toLowerCase());var P="".concat(g,"/").concat(S,"/photos?sol=").concat(r,"\n  &").concat(R,"&").concat(N),E=Object(c.useState)([]),I=Object(b.a)(E,2),A=I[0],D=I[1],F=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S||!R){e.next=8;break}return e.next=3,fetch(P);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,v(Object(i.a)(a.photos));case 8:o({}),s({}),j("1"),Q(),D([]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){F()}),[]);var L=Object(c.useState)(5),J=Object(b.a)(L,1)[0],K=Object(c.useState)(5),T=Object(b.a)(K,2),U=T[0],W=T[1],q=Object(c.useState)(0),z=Object(b.a)(q,2),G=z[0],M=z[1],Q=function(){_(0)};h.map((function(e,t){return A.push(t+1)}));var V=A.slice(G,U);return Object(n.jsxs)("div",{className:"photo",children:[Object(n.jsx)("div",{className:"photo__download-block",children:Object(n.jsxs)(C.a,{variant:"contained",color:"primary",onClick:F,children:["Download Photo",Object(n.jsx)(w.a,{})]})}),Object(n.jsxs)("div",{className:"photo__buttons",children:[Object(n.jsx)("button",{type:"button",onClick:function(){_((function(e){return e-1})),x%J===0&&(W(U-J),M(G-J))},disabled:0===x,className:"photo__btn photo__btn-left",children:Object(n.jsx)(B.a,{className:"photo__btn-icon"})}),Object(n.jsx)("button",{type:"button",onClick:function(){_((function(e){return e+1})),x+2>U&&(W(U+J),M(G+J))},disabled:x===h.length-1,className:"photo__btn photo__btn-right",children:Object(n.jsx)(k.a,{className:"photo__btn-icon"})})]}),!h.length&&Object(n.jsx)("h2",{className:"photo__title-loading",children:"No photos, try another camera"}),h.length>1&&Object(n.jsxs)("div",{className:"photo__container",children:[Object(n.jsx)("div",{className:"photo__buttons-row",children:V.map((function(e){return Object(n.jsx)("button",{className:y()("photo__btn-num",{photo__btn_active:x===e-1}),type:"button",variant:"contained",color:"primary",name:e,onClick:function(e){!function(e){var t=e.target;_((function(e){return Number(t.name)-1}))}(e),e.stopPropagation()},children:e},e)}))}),Object(n.jsx)("h2",{className:"photo__title-count",children:"".concat(x+1," / ").concat(h.length)}),Object(n.jsx)("img",{className:"photo__img",src:h[x]&&h[x].img_src,alt:"rover"}),h[x]&&Object(n.jsx)("p",{className:"photo__date",children:h[x].earth_date})]})]})}),I=(a(79),function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)({}),s=Object(b.a)(o,2),j=s[0],m=s[1],p=Object(c.useState)([]),h=Object(b.a)(p,2),v=h[0],O=h[1],f=Object(c.useState)({}),N=Object(b.a)(f,2),y=N[0],C=N[1],S=Object(c.useState)("1"),w=Object(b.a)(S,2),R=w[0],k=w[1],P=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(Object(i.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){P()}),[]);return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("h1",{className:"app__title",children:"NASA APIs"}),Object(n.jsx)("div",{className:"app__logo"}),Object(n.jsxs)("div",{className:"app__selects",children:[Object(n.jsx)(x,{filterByRoverName:function(e){var t=e.target,n=a.find((function(e){return e.name===t.value}));m(n),n&&O(n.cameras)},selectedRover:j,rovers:a}),Object(n.jsx)(_,{filterByCamerasName:function(e){var t=e.target,a=v.find((function(e){return e.name===t.value}));C(a)},selectedCamera:y,cameras:v}),Object(n.jsx)(g,{selectSolDays:function(e){var t=e.target;k(t.value)},solRange:R,selectedRover:j})]}),Object(n.jsx)(E,{selectedRover:j,selectedCamera:y,solRange:R,setSelectedRover:m,setSelectedCamera:C,setSolRange:k})]})});o.a.render(Object(n.jsx)(I,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.ead15d1b.chunk.js.map