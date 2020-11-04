(this["webpackJsonpsprint-retrospective-react"]=this["webpackJsonpsprint-retrospective-react"]||[]).push([[0],{70:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),c=r.n(a),s=r(21),i=r.n(s),u=(r(70),r(8)),o=r.n(u),l=r(10),j=r(14),p=r(112),d=r(119),b=r(121),h=r(97),x=r(113),f=r(114),O=r(124),m=r(115),v=Object(p.a)((function(){return{appbarstyle:{backgroundColor:"#2196F3"},typographyStyle:{flex:1}}})),g=function(e){var t=e.userName,r=e.avatar,a=e.updateUserProfileAction,c=v();return Object(n.jsx)(x.a,{position:"static",className:c.appbarstyle,children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(h.a,{variant:"h5",className:c.typographyStyle,children:"Sprint Retrospective"}),Object(n.jsx)(O.a,{src:r}),Object(n.jsxs)(m.a,{onClick:function(){a()},children:["Hi ",t]})]})})},w=r(116),y=r(117),k=r(118),S=r(53),N=r.n(S),I=r(54),D=r.n(I),A=r(52),B=r.n(A),W=Object(p.a)({root:{minWidth:200},title:{color:"#8E24AA"},pos:{marginBottom:12},modifiedDate:{fontSize:15},icon:{fontSize:15,color:"#283593",fontWeight:"bolder"}}),C=function(e){var t=e.name,r=e.cardCount,a=e.modifiedDate,c=e.deleteAction,s=W();return Object(n.jsx)(w.a,{variant:"outlined",className:s.root,children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(h.a,{variant:"h6",className:s.title,children:t}),Object(n.jsxs)(h.a,{className:s.pos,color:"textSecondary",children:[r," ",r>1?"cards":"card"]}),Object(n.jsxs)(h.a,{align:"right",className:s.modifiedDate,children:[Object(n.jsx)(N.a,{className:s.icon}),B()(a).format("DD/MM/YYYY")]}),Object(n.jsx)(k.a,{align:"right","aria-label":"delete",onClick:function(){return c()},children:Object(n.jsx)(D.a,{})})]})})},F=r(18),L=r.n(F);function E(){return(E=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://sprint-retrospective-api.herokuapp.com/boards/".concat(t));case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function P(){return(P=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.delete("https://sprint-retrospective-api.herokuapp.com/boards/".concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var M={getBoards:function(e){return E.apply(this,arguments)},deleteBoard:function(e){return P.apply(this,arguments)}},U=function(e){var t=e.boardList,r=e.refreshBoards,a=Array.from(t),c=[];if(0!==a.length)for(var s=function(e){c.push(Object(n.jsx)(d.a,{item:!0,sx:4,children:Object(n.jsx)(C,{name:a[e].name,modifiedDate:a[e].modifiedDate,cardCount:a[e].cardCount,deleteAction:Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.deleteBoard(a[e]._id);case 2:return t.next=4,r();case 4:case"end":return t.stop()}}),t)})))})},e))},i=0;i<a.length;i++)s(i);return Object(n.jsx)(d.a,{container:!0,spacing:3,children:c})};var Y=r(126),R=r(125),z=r(122),J=r(120),_=new(r(55).a);var G={write:function(e,t){return _.set(e,t)},read:function(e){return _.get(e)},clear:function(e){return _.remove(e)}};function H(){return(H=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://sprint-retrospective-api.herokuapp.com/users/".concat(t));case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function q(){return(q=Object(l.a)(o.a.mark((function e(t,r,n,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("https://sprint-retrospective-api.herokuapp.com/users/register",{email:t,password:r,firstName:n,lastName:a});case 3:if(200!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function K(){return(K=Object(l.a)(o.a.mark((function e(t,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("https://sprint-retrospective-api.herokuapp.com/users/",{email:t,password:r});case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function Q(){return(Q=Object(l.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.put("https://sprint-retrospective-api.herokuapp.com/users/update",{firstName:t,lastName:r});case 3:if(200!==e.sent.status){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var T={login:function(e,t){return K.apply(this,arguments)},register:function(e,t,r,n){return q.apply(this,arguments)},getUser:function(e){return H.apply(this,arguments)},update:function(e,t){return Q.apply(this,arguments)}},V=Object(p.a)((function(e){return{root:{flexGrow:1,padding:50},title:{color:"#283593",fontWeight:"bold"}}}));function X(e){var t=e.loginSuccessAction,r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(""),p=Object(j.a)(u,2),x=p[0],f=p[1],O=Object(a.useState)(!1),v=Object(j.a)(O,2),g=v[0],w=v[1],y=Object(a.useState)(""),k=Object(j.a)(y,2),S=k[0],N=k[1],I=Object(a.useState)(""),D=Object(j.a)(I,2),A=D[0],B=D[1],W=V(),C=function(){var e=Object(l.a)(o.a.mark((function e(r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,T.login(s,x);case 3:n=e.sent,G.write("userID",n),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(o.a.mark((function e(r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,T.register(s,x,S,A);case 3:n=e.sent,G.write("userID",n),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g?Object(n.jsx)("div",{className:W.root,children:Object(n.jsxs)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(h.a,{className:W.title,variant:"h4",children:"Login"})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)("form",{onSubmit:function(e){return C(e)},children:Object(n.jsxs)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-email",children:"Email"}),Object(n.jsx)(z.a,{id:"input-email",type:"text",fullWidth:!0,value:s,onInput:function(e){return i(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-password",children:"Password"}),Object(n.jsx)(z.a,{id:"input-password",type:"password",fullWidth:!0,value:x,onInput:function(e){return f(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(m.a,{type:"submit",children:"Submit"})})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsxs)(h.a,{children:["Don't have an account? ",Object(n.jsx)(J.a,{onClick:function(){return w(!1)},children:"Register"})]})})]})}):Object(n.jsx)("div",{className:W.root,children:Object(n.jsxs)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(h.a,{className:W.title,variant:"h4",children:"Register"})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)("form",{onSubmit:function(e){return F(e)},children:Object(n.jsxs)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-email",children:"Email"}),Object(n.jsx)(z.a,{id:"input-email",type:"text",fullWidth:!0,value:s,onInput:function(e){return i(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-first-name",children:"First Name"}),Object(n.jsx)(z.a,{id:"input-first-name",type:"text",fullWidth:!0,value:S,onInput:function(e){return N(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-last-name",children:"Last Name"}),Object(n.jsx)(z.a,{id:"input-last-name",type:"text",fullWidth:!0,value:A,onInput:function(e){return B(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(b.a,{width:350,children:[Object(n.jsx)(R.a,{htmlFor:"input-password",children:"Password"}),Object(n.jsx)(z.a,{id:"input-password",type:"password",fullWidth:!0,value:x,onInput:function(e){return f(String(e.target.value))}})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(m.a,{type:"submit",children:"Submit"})})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsxs)(h.a,{children:["Already have an account? ",Object(n.jsx)(J.a,{onClick:function(){return w(!0)},children:"Login"})]})})]})})}var Z=Object(p.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function $(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(null),i=Object(j.a)(s,2),u=i[0],p=i[1],x=Object(a.useState)(!0),f=Object(j.a)(x,2),O=f[0],m=f[1],v=Z(),w=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=8;break}if(!(t=G.read("userID"))){e.next=8;break}return T.getUser(t).then((function(e){e&&p(e)})),e.next=6,M.getBoards(t);case 6:(r=e.sent)&&(c(r),m(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()})),u?Object(n.jsxs)(d.a,{container:!0,direction:"column",children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(g,{userName:u.firstName,avatar:u.avatar,updateUserProfileAction:function(){}})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(b.a,{m:3,children:Object(n.jsx)(h.a,{display:"block",variant:"h5",className:v.titleStyles,children:"My boards"})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(b.a,{ml:3,children:Object(n.jsx)(h.a,{display:"block",variant:"h6",className:v.titleStyles,children:"Public boards"})})}),Object(n.jsxs)(d.a,{item:!0,container:!0,children:[Object(n.jsx)(d.a,{item:!0,xs:1}),Object(n.jsx)(d.a,{item:!0,children:O?Object(n.jsx)(h.a,{children:"Loading..."}):Object(n.jsx)(U,{boardList:r,refreshBoards:Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,M.getBoards(u._id);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))})}),Object(n.jsx)(d.a,{item:!0,xs:1})]})]}):Object(n.jsx)(X,{loginSuccessAction:function(){return w()}})}i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.f3514eab.chunk.js.map