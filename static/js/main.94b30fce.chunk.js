(this["webpackJsonpsprint-retrospective-react"]=this["webpackJsonpsprint-retrospective-react"]||[]).push([[0],{54:function(t,e,c){},80:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c(1),r=c.n(a),i=c(37),s=c.n(i),o=(c(54),c(23)),j=c.n(o),l=c(38),b=c(16),d=c(92),u=c(98),h=c(99),p=c(95),x=c(93),O=c(94),f=c(100),m=Object(d.a)((function(){return{appbarstyle:{backgroundColor:"#2196F3"},typographyStyle:{flex:1}}})),v=function(){var t=m();return Object(n.jsx)(x.a,{position:"static",className:t.appbarstyle,children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(p.a,{variant:"h5",className:t.typographyStyle,children:"Sprint Retrospective"}),Object(n.jsx)(f.a,{src:"https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"})]})})},g=c(96),y=c(97),S=c(42),k=c.n(S),C=Object(d.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),N=function(t){var e=t.name,c=t.cardCount,a=t.modifiedDate,r=C();return Object(n.jsx)(g.a,{className:r.root,children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(p.a,{variant:"h5",component:"h2",children:e}),Object(n.jsx)(k.a,{}),Object(n.jsx)(p.a,{children:a}),Object(n.jsxs)(p.a,{className:r.pos,color:"textSecondary",children:[c," card"]})]})})},F=function(t){var e=t.boardList,c=Array.from(e),a=[];if(0!==c.length)for(var r=0;r<c.length;r++)a.push(Object(n.jsx)(u.a,{item:!0,sx:4,children:Object(n.jsx)(N,{name:c[r].name,modifiedDate:c[r].modifiedDate,cardCount:c[r].cardCount})},r));return Object(n.jsx)(u.a,{container:!0,spacing:3,children:a})},L=c(62).default,w=Object(d.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function B(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],r=e[1],i=Object(a.useState)(!0),s=Object(b.a)(i,2),o=s[0],d=s[1];Object(a.useEffect)((function(){(function(){var t=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.get("https://sprint-retrospective-api.herokuapp.com/boards/5f97c9e93f2cf8fef63f0777");case 3:e=t.sent,r(e.data),d(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var x=w();return Object(n.jsxs)(u.a,{container:!0,direction:"column",children:[Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(v,{})}),Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(h.a,{m:3,children:Object(n.jsx)(p.a,{display:"block",variant:"h5",className:x.titleStyles,children:"My boards"})})}),Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)(h.a,{ml:3,children:Object(n.jsx)(p.a,{display:"block",variant:"h6",className:x.titleStyles,children:"Public boards"})})}),Object(n.jsxs)(u.a,{item:!0,container:!0,children:[Object(n.jsx)(u.a,{item:!0,xs:1}),Object(n.jsx)(u.a,{item:!0,children:o?Object(n.jsx)(p.a,{children:"Loading..."}):Object(n.jsx)(F,{boardList:c})}),Object(n.jsx)(u.a,{item:!0,xs:1})]})]})}var D=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),D()}},[[80,1,2]]]);
//# sourceMappingURL=main.94b30fce.chunk.js.map