(this["webpackJsonpsprint-retrospective-react"]=this["webpackJsonpsprint-retrospective-react"]||[]).push([[0],{65:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a.n(r),i=a(18),s=a.n(i),o=(a(65),a(22)),l=a.n(o),j=a(29),u=a(16),d=a(107),b=a(113),h=a(114),O=a(110),p=a(108),x=a(109),m=a(118),f=a(115),v=Object(d.a)((function(){return{appbarstyle:{backgroundColor:"#2196F3"},typographyStyle:{flex:1}}})),g=function(e){var t=e.userName,a=e.avatar,r=v();return Object(c.jsx)(p.a,{position:"static",className:r.appbarstyle,children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(O.a,{variant:"h5",className:r.typographyStyle,children:"Sprint Retrospective"}),Object(c.jsx)(m.a,{src:a}),Object(c.jsxs)(f.a,{children:["Hi ",t]})]})})},y=a(111),S=a(112),w=a(51),N=a.n(w),k=a(50),D=a.n(k),I=Object(d.a)({root:{minWidth:200},title:{color:"#8E24AA"},pos:{marginBottom:12},modifiedDate:{fontSize:15},icon:{fontSize:15,color:"#283593",fontWeight:"bolder"}}),W=function(e){var t=e.name,a=e.cardCount,r=e.modifiedDate,n=I();return Object(c.jsx)(y.a,{variant:"outlined",className:n.root,children:Object(c.jsxs)(S.a,{children:[Object(c.jsx)(O.a,{variant:"h6",className:n.title,children:t}),Object(c.jsxs)(O.a,{className:n.pos,color:"textSecondary",children:[a," ",a>1?"cards":"card"]}),Object(c.jsxs)(O.a,{align:"right",className:n.modifiedDate,children:[Object(c.jsx)(N.a,{className:n.icon}),D()(r).format("DD/MM/YYYY")]})]})})},A=function(e){var t=e.boardList,a=Array.from(t),r=[];if(0!==a.length)for(var n=0;n<a.length;n++)r.push(Object(c.jsx)(b.a,{item:!0,sx:4,children:Object(c.jsx)(W,{name:a[n].name,modifiedDate:a[n].modifiedDate,cardCount:a[n].cardCount})},n));return Object(c.jsx)(b.a,{container:!0,spacing:3,children:r})};function C(){return Object(c.jsx)(h.a,{borderRadius:16,children:Object(c.jsx)(f.a,{size:"large",variant:"outlined",color:"primary"})})}var E=a(120),L=a(119),M=a(116),Y=a(33),z=a.n(Y),B=new(a(52).a);var F={write:function(e,t){return B.set(e,t)},read:function(e){return B.get(e)},clear:function(e){return B.remove(e)}},J=Object(d.a)((function(e){return{root:{flexGrow:1,padding:50},title:{color:"#283593",fontWeight:"bold"}}}));function P(e){var t=e.loginSuccessAction,a=Object(r.useState)(""),n=Object(u.a)(a,2),i=n[0],s=n[1],o=Object(r.useState)(""),d=Object(u.a)(o,2),p=d[0],x=d[1],m=J(),v=function(){var e=Object(j.a)(l.a.mark((function e(a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,z.a.post("http://localhost:5000/users/",{email:i,password:p});case 4:200===(c=e.sent).status&&(F.write("userID",c.data),t()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:m.root,children:Object(c.jsxs)(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(O.a,{className:m.title,variant:"h4",children:"Login"})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)("form",{onSubmit:function(e){return v(e)},children:Object(c.jsxs)(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(E.a,{children:Object(c.jsxs)(h.a,{width:350,children:[Object(c.jsx)(L.a,{htmlFor:"input-email",children:"Email"}),Object(c.jsx)(M.a,{id:"input-email",type:"text",fullWidth:!0,value:i,onInput:function(e){return s(String(e.target.value))}})]})})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(E.a,{children:Object(c.jsxs)(h.a,{width:350,children:[Object(c.jsx)(L.a,{htmlFor:"input-password",children:"Password"}),Object(c.jsx)(M.a,{id:"input-password",type:"password",fullWidth:!0,value:p,onInput:function(e){return x(String(e.target.value))}})]})})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(f.a,{type:"submit",children:"Submit"})})]})})})]})})}var R=Object(d.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function G(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(null),s=Object(u.a)(i,2),o=s[0],d=s[1],p=Object(r.useState)(!0),x=Object(u.a)(p,2),m=x[0],f=x[1],v=R(),y=function(){var e=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("https://sprint-retrospective-api.herokuapp.com/boards/".concat(t));case 3:a=e.sent,n(a.data),f(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){y(o)}),[o]),!o){var S=F.read("userID");S&&d(String(S))}return o?Object(c.jsxs)(b.a,{container:!0,direction:"column",children:[Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(g,{userName:"\u0110\u1ee9c",avatar:"https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(h.a,{m:3,children:Object(c.jsx)(O.a,{display:"block",variant:"h5",className:v.titleStyles,children:"My boards"})})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsx)(h.a,{ml:3,children:Object(c.jsx)(O.a,{display:"block",variant:"h6",className:v.titleStyles,children:"Public boards"})})}),Object(c.jsxs)(b.a,{item:!0,container:!0,children:[Object(c.jsx)(b.a,{item:!0,xs:1}),Object(c.jsx)(b.a,{item:!0,children:m?Object(c.jsx)(O.a,{children:"Loading..."}):Object(c.jsx)(A,{boardList:a})}),Object(c.jsx)(C,{}),Object(c.jsx)(b.a,{item:!0,xs:1})]})]}):Object(c.jsx)(P,{loginSuccessAction:function(){var e=F.read("userID");d(String(e))}})}s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.60e57871.chunk.js.map