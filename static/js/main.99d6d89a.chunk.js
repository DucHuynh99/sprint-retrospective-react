(this["webpackJsonpsprint-retrospective-react"]=this["webpackJsonpsprint-retrospective-react"]||[]).push([[0],{55:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(3),r=c(1),n=c.n(r),i=c(37),s=c.n(i),o=(c(55),c(23)),l=c.n(o),j=c(38),d=c(16),b=c(94),h=c(100),p=c(101),u=c(97),m=c(95),O=c(96),f=c(102),x=Object(b.a)((function(){return{appbarstyle:{backgroundColor:"#2196F3"},typographyStyle:{flex:1}}})),v=function(){var e=x();return Object(a.jsx)(m.a,{position:"static",className:e.appbarstyle,children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(u.a,{variant:"h5",className:e.typographyStyle,children:"Sprint Retrospective"}),Object(a.jsx)(f.a,{src:"https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"})]})})},g=c(98),y=c(99),S=c(43),k=c.n(S),N=c(42),D=c.n(N),w=Object(b.a)({root:{minWidth:200},title:{color:"#8E24AA"},pos:{marginBottom:12},modifiedDate:{fontSize:15},icon:{fontSize:15,color:"#283593",fontWeight:"bolder"}}),C=function(e){var t=e.name,c=e.cardCount,r=e.modifiedDate,n=w();return Object(a.jsx)(g.a,{variant:"outlined",className:n.root,children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)(u.a,{variant:"h6",className:n.title,children:t}),Object(a.jsxs)(u.a,{className:n.pos,color:"textSecondary",children:[c," ",c>1?"cards":"card"]}),Object(a.jsxs)(u.a,{align:"right",className:n.modifiedDate,children:[Object(a.jsx)(k.a,{className:n.icon}),D()(r).format("DD/MM/YYYY")]})]})})},M=function(e){var t=e.boardList,c=Array.from(t),r=[];if(0!==c.length)for(var n=0;n<c.length;n++)r.push(Object(a.jsx)(h.a,{item:!0,sx:4,children:Object(a.jsx)(C,{name:c[n].name,modifiedDate:c[n].modifiedDate,cardCount:c[n].cardCount})},n));return Object(a.jsx)(h.a,{container:!0,spacing:3,children:r})},Y=c(64).default,A=Object(b.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function B(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(!0),s=Object(d.a)(i,2),o=s[0],b=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.get("https://sprint-retrospective-api.herokuapp.com/boards/".concat(t));case 3:c=e.sent,n(c.data),b(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}})()("5f97c9e93f2cf8fef63f0777")}),[]);var m=A();return Object(a.jsxs)(h.a,{container:!0,direction:"column",children:[Object(a.jsx)(h.a,{item:!0,children:Object(a.jsx)(v,{})}),Object(a.jsx)(h.a,{item:!0,children:Object(a.jsx)(p.a,{m:3,children:Object(a.jsx)(u.a,{display:"block",variant:"h5",className:m.titleStyles,children:"My boards"})})}),Object(a.jsx)(h.a,{item:!0,children:Object(a.jsx)(p.a,{ml:3,children:Object(a.jsx)(u.a,{display:"block",variant:"h6",className:m.titleStyles,children:"Public boards"})})}),Object(a.jsxs)(h.a,{item:!0,container:!0,children:[Object(a.jsx)(h.a,{item:!0,xs:1}),Object(a.jsx)(h.a,{item:!0,children:o?Object(a.jsx)(u.a,{children:"Loading..."}):Object(a.jsx)(M,{boardList:c})}),Object(a.jsx)(h.a,{item:!0,xs:1})]})]})}s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.99d6d89a.chunk.js.map