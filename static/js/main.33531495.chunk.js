(this["webpackJsonpsprint-retrospective-react"]=this["webpackJsonpsprint-retrospective-react"]||[]).push([[0],{216:function(e,t,n){},242:function(e,t){},244:function(e,t){},257:function(e,t){},259:function(e,t){},287:function(e,t){},288:function(e,t){},293:function(e,t){},295:function(e,t){},319:function(e,t){},349:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n(16),s=n.n(c),i=n(38),o=(n(216),n(11)),u=n(18),l=n(5),j=n.n(l),d=n(9),b=n(378),p=n(380),h=n(351),f=n(396),x=n(393),O=n(397),m=n(382),v=n(383),g=n(192),k=n(193),w=n.n(k),y=n(20),I=n.n(y),S="https://sprint-retrospective-api.herokuapp.com";function D(){return(D=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(S,"/users/").concat(t));case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function C(){return(C=Object(d.a)(j.a.mark((function e(t,n,r,a){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(S,"/users/register"),{email:t,password:n,firstName:r,lastName:a});case 3:if(201!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function N(){return(N=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(S,"/users/"),{email:t,password:n});case 3:if(200!==(r=e.sent).status){e.next=9;break}return localStorage.setItem("token",r.data),e.abrupt("return",r.data);case 9:return e.abrupt("return",null);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function W(){return(W=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(S,"/users/login-with-google"),{tokenId:t});case 3:if(200!==(n=e.sent).status){e.next=9;break}return localStorage.setItem("token",n.data),e.abrupt("return",n.data);case 9:return e.abrupt("return",null);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function B(){return(B=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(S,"/users/login-with-facebook"),{id:t,accessToken:n});case 3:if(200!==(r=e.sent).status){e.next=9;break}return localStorage.setItem("token",r.data),e.abrupt("return",r.data);case 9:return e.abrupt("return",null);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function A(){return(A=Object(d.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.put("".concat(S,"/users/update"),{firstName:t,lastName:n});case 3:if(200!==e.sent.status){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var F={login:function(e,t){return N.apply(this,arguments)},loginWithGoogle:function(e){return W.apply(this,arguments)},loginWithFacebook:function(e,t){return B.apply(this,arguments)},register:function(e,t,n,r){return C.apply(this,arguments)},getUser:function(e){return D.apply(this,arguments)},update:function(e,t){return A.apply(this,arguments)}},L=Object(b.a)((function(e){return{root:{flexGrow:1,padding:50},title:{color:"#283593",fontWeight:"bold"}}}));function T(e){var t=e.onSuccess,n=L(),c=Object(a.useState)(""),s=Object(o.a)(c,2),u=s[0],l=s[1],b=Object(a.useState)(""),k=Object(o.a)(b,2),y=k[0],I=k[1],S=function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,F.login(u,y);case 3:(r=e.sent)?(console.log("[Login email-password] Nhan duoc Token: ",r),t()):console.log("[Login email-password] Khong nhan duoc token");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.loginWithGoogle(n.tokenId);case 2:(r=e.sent)?(console.log("[Login Google] Nhan duoc Token: ",r),t()):console.log("[Login Google] Khong nhan duoc token");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.loginWithFacebook(n.id,n.accessToken);case 2:(r=e.sent)?(console.log("[Login Facebook] Nhan duoc Token: ",r),t()):console.log("[Login Facebook] Khong nhan duoc token");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:n.root,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(h.a,{className:n.title,variant:"h4",children:"Login"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)("form",{onSubmit:function(e){return S(e)},children:Object(r.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-email",children:"Email"}),Object(r.jsx)(m.a,{id:"input-email",type:"text",fullWidth:!0,value:u,onInput:function(e){return l(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-password",children:"Password"}),Object(r.jsx)(m.a,{id:"input-password",type:"password",fullWidth:!0,value:y,onInput:function(e){return I(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(v.a,{type:"submit",children:"Login"})})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(h.a,{children:["Don't have an account? ",Object(r.jsx)(i.b,{to:"/register",children:"Register"})]})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(g.GoogleLogin,{clientId:"656948797545-io59r3h73is40b8r755em4u5ghgntn21.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:D,onFailure:function(e){console.log("[Login Google] Failure: ",e)},cookiePolicy:"single_host_origin"})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(w.a,{appId:"384712686083034",fields:"name,email,picture",callback:C})})})]})})}var G=Object(b.a)((function(e){return{root:{flexGrow:1,padding:50},title:{color:"#283593",fontWeight:"bold"}}}));function E(e){var t=e.onSuccess,n=G(),c=Object(a.useState)(""),s=Object(o.a)(c,2),u=s[0],l=s[1],b=Object(a.useState)(""),g=Object(o.a)(b,2),k=g[0],w=g[1],y=Object(a.useState)(""),I=Object(o.a)(y,2),S=I[0],D=I[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),W=N[0],B=N[1],A=function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,F.register(u,k,S,W);case 3:r=e.sent,console.log("Register token received: ",r),r&&t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:n.root,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(h.a,{className:n.title,variant:"h4",children:"Register"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)("form",{onSubmit:function(e){return A(e)},children:Object(r.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-email",children:"Email"}),Object(r.jsx)(m.a,{id:"input-email",type:"text",fullWidth:!0,value:u,onInput:function(e){return l(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-first-name",children:"First Name"}),Object(r.jsx)(m.a,{id:"input-first-name",type:"text",fullWidth:!0,value:S,onInput:function(e){return D(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-last-name",children:"Last Name"}),Object(r.jsx)(m.a,{id:"input-last-name",type:"text",fullWidth:!0,value:W,onInput:function(e){return B(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(x.a,{width:350,children:[Object(r.jsx)(O.a,{htmlFor:"input-password",children:"Password"}),Object(r.jsx)(m.a,{id:"input-password",type:"password",fullWidth:!0,value:k,onInput:function(e){return w(String(e.target.value))}})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(v.a,{type:"submit",children:"Register"})})]})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(h.a,{children:["Already have an account? ",Object(r.jsx)(i.b,{to:"/login",children:"Login"})]})})]})})}var R=n(384),U=n(385),P=n(398),Y=Object(b.a)((function(){return{appbarstyle:{backgroundColor:"#2196F3"},typographyStyle:{flex:1}}}));function z(e){var t=e.userID,n=e.onAvatarClick,c=Object(a.useState)(null),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Y();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,F.getUser(t);case 3:(n=e.sent)&&u(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]),i?Object(r.jsx)(R.a,{position:"static",className:l.appbarstyle,children:Object(r.jsxs)(U.a,{children:[Object(r.jsx)(h.a,{variant:"h5",className:l.typographyStyle,children:"Sprint Retrospective"}),Object(r.jsx)(P.a,{src:i.avatar}),Object(r.jsxs)(v.a,{onClick:function(){n()},children:["Hi ",i.firstName]})]})}):Object(r.jsx)("div",{children:"Loading"})}var K=n(395),M=n(389),_=n(390),J=n(392),V=n(391),H=n(386),q=n(387),Q=n(388),X=n(196),Z=n.n(X),$=n(197),ee=n.n($),te=n(195),ne=n.n(te),re=Object(b.a)({root:{minWidth:200},title:{color:"#8E24AA"},pos:{marginBottom:12},modifiedDate:{fontSize:15},icon:{fontSize:15,color:"#283593",fontWeight:"bolder"}}),ae=function(e){var t=e.name,n=e.cardCount,a=e.modifiedDate,c=e.deleteAction,s=re();return Object(r.jsx)(H.a,{variant:"outlined",className:s.root,children:Object(r.jsxs)(q.a,{children:[Object(r.jsx)(h.a,{variant:"h6",className:s.title,children:t}),Object(r.jsxs)(h.a,{className:s.pos,color:"textSecondary",children:[n," ",n>1?"cards":"card"]}),Object(r.jsxs)(h.a,{align:"right",className:s.modifiedDate,children:[Object(r.jsx)(Z.a,{className:s.icon}),ne()(a).format("DD/MM/YYYY")]}),Object(r.jsx)(Q.a,{align:"right","aria-label":"delete",onClick:function(){return c()},children:Object(r.jsx)(ee.a,{})})]})})};function ce(e){var t=e.text,n=e.onClick;return Object(r.jsx)(x.a,{borderRadius:16,children:Object(r.jsx)(v.a,{size:"large",variant:"outlined",color:"primary",onClick:function(){n()},children:t})})}var se="http://localhost:5000";function ie(){return(ie=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(se,"/boards/").concat(t));case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function oe(){return(oe=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.delete("".concat(se,"/boards/").concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function ue(){return(ue=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/add"),{boardName:t,userID:n});case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function le(){return(le=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(se,"/boards/get-by-id/").concat(t));case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function je(){return(je=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(se,"/boards/details/").concat(t));case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function de(){return(de=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/add-went-well/"),{boardID:t,info:n});case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function be(){return(be=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/add-to-improve/"),{boardID:t,info:n});case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function pe(){return(pe=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/add-action-item/"),{boardID:t,info:n});case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function he(){return(he=Object(d.a)(j.a.mark((function e(t,n,r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/delete-board-detail/"),{boardID:t,column:n,info:r});case 3:if(200!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function fe(){return(fe=Object(d.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/update-board-name/"),{boardID:t,newName:n});case 3:if(200!==(r=e.sent).status){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function xe(){return(xe=Object(d.a)(j.a.mark((function e(t,n,r,a){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(se,"/boards/update-board-detail"),{boardID:t,column:n,oldInfo:r,newInfo:a});case 3:if(200!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c.data);case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var Oe={getBoards:function(e){return ie.apply(this,arguments)},getByID:function(e){return le.apply(this,arguments)},addBoard:function(e,t){return ue.apply(this,arguments)},getBoardDetail:function(e){return je.apply(this,arguments)},addWentWell:function(e,t){return de.apply(this,arguments)},addToImprove:function(e,t){return be.apply(this,arguments)},addActionItem:function(e,t){return pe.apply(this,arguments)},deleteBoard:function(e){return oe.apply(this,arguments)},deleteBoardDetail:function(e,t,n){return he.apply(this,arguments)},updateBoardName:function(e,t){return fe.apply(this,arguments)},updateItemContent:function(e,t,n,r){return xe.apply(this,arguments)}},me=function(e){var t=e.userID,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(a.useState)(!0),l=Object(o.a)(u,2),b=l[0],f=l[1],x=Object(a.useState)(!1),O=Object(o.a)(x,2),m=O[0],g=O[1],k=Object(a.useState)(""),w=Object(o.a)(k,2),y=w[0],I=w[1],S=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,Oe.getBoards(t);case 3:(n=e.sent)&&(i(n),f(!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){S(t)}),[]);var D=function(){g(!1)},C=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Oe.addBoard(y,t);case 3:S(t),D();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=[];if(N.push(Object(r.jsx)(p.a,{item:!0,sx:4,children:Object(r.jsx)(ce,{text:"add",onClick:function(){g(!0)}})},s&&s.length||0)),s&&0!==s.length)for(var W=function(e){N.push(Object(r.jsx)(p.a,{item:!0,sx:4,children:Object(r.jsx)(ae,{name:s[e].name,modifiedDate:s[e].modifiedDate,cardCount:s[e].cardCount,deleteAction:Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Oe.deleteBoard(s[e]._id);case 2:return n.next=4,S(t);case 4:case"end":return n.stop()}}),n)})))})},e))},B=0;B<s.length;B++)W(B);return b?Object(r.jsx)(h.a,{children:"Loading..."}):Object(r.jsxs)("div",{children:[Object(r.jsx)(p.a,{container:!0,spacing:3,children:N}),Object(r.jsxs)(K.a,{open:m,onClose:D,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(M.a,{id:"form-dialog-title",children:"Add new Board"}),Object(r.jsx)(_.a,{children:Object(r.jsx)(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Board name",type:"text",fullWidth:!0,variant:"outlined",onChange:function(e){I(e.target.value)}})}),Object(r.jsxs)(V.a,{children:[Object(r.jsx)(v.a,{onClick:D,color:"primary",children:"Cancel"}),Object(r.jsx)(v.a,{onClick:C,color:"primary",children:"Add"})]})]})]})},ve=Object(b.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function ge(e){var t=e.userID,n=ve();return Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(z,{userID:t,onAvatarClick:function(){console.log("avatar clicked")}})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(x.a,{m:3,children:Object(r.jsx)(h.a,{display:"block",variant:"h5",className:n.titleStyles,children:"My boards"})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(x.a,{ml:3,children:Object(r.jsx)(h.a,{display:"block",variant:"h6",className:n.titleStyles,children:"Public boards"})})}),Object(r.jsxs)(p.a,{item:!0,container:!0,children:[Object(r.jsx)(p.a,{item:!0,xs:1}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(me,{userID:t})}),Object(r.jsx)(p.a,{item:!0,xs:1})]})]})}var ke=n(200);function we(e){var t=e.boardID,n=e.columnName,c=e.info,s=e.onActionSucess,i=Object(a.useState)(!1),u=Object(o.a)(i,2),l=u[0],b=u[1],h=Object(a.useState)(""),f=Object(o.a)(h,2),x=f[0],O=f[1],m=function(){b(!1)},g=function(){var e=Object(d.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,Oe.updateItemContent(t,n,c,x);case 3:if(!e.sent){e.next=5;break}s();case 5:m();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)(ke.a,{elevation:3,children:[Object(r.jsx)(p.a,{container:!0,direction:"row",children:Object(r.jsx)(p.a,{item:!0,children:c})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(v.a,{onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.deleteBoardDetail(t,n,c);case 2:if(!e.sent){e.next=4;break}s();case 4:case"end":return e.stop()}}),e)}))),children:"Delete"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(v.a,{onClick:function(){b(!0)},children:"Update"})})]})})]}),Object(r.jsxs)(K.a,{open:l,onClose:m,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(M.a,{id:"form-dialog-title",children:"Change content"}),Object(r.jsx)(_.a,{children:Object(r.jsx)(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Item's content",type:"text",defaultValue:c,fullWidth:!0,variant:"outlined",onChange:function(e){O(e.target.value)}})}),Object(r.jsxs)(V.a,{children:[Object(r.jsx)(v.a,{onClick:m,color:"primary",children:"Cancel"}),Object(r.jsx)(v.a,{onClick:g,color:"primary",children:"Save"})]})]})]})}function ye(e){var t=e.boardID,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(a.useState)(null),l=Object(o.a)(u,2),f=l[0],O=l[1],m=Object(a.useState)(null),g=Object(o.a)(m,2),k=g[0],w=g[1],y=Object(a.useState)(""),I=Object(o.a)(y,2),S=I[0],D=I[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),W=N[0],B=N[1],A=Object(a.useState)(""),F=Object(o.a)(A,2),L=F[0],T=F[1],G=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))(),E=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.getBoardDetail(t);case 2:(n=e.sent)?(i(n.wentWell),O(n.toImprove),w(n.actionItems)):console.log("Not have board details");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E(t)}),[]);var R=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Oe.addWentWell(t,S);case 3:if(!e.sent){e.next=5;break}E(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Oe.addToImprove(t,W);case 3:if(!e.sent){e.next=5;break}E(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Oe.addActionItem(t,L);case 3:if(!e.sent){e.next=5;break}E(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=[];if(s&&0!==s.length)for(var z=0;z<s.length;z++)Y.push(Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(we,{boardID:t,columnName:"WentWell",info:s[z],onActionSucess:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:case"end":return e.stop()}}),e)})))})},z));var K=[];if(f&&0!==f.length)for(var M=function(e){K.push(Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(ke.a,{elevation:3,children:[f[e],Object(r.jsx)(v.a,{onClick:Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Oe.deleteBoardDetail(t,"ToImprove",f[e]);case 2:if(!n.sent){n.next=4;break}E(t);case 4:case"end":return n.stop()}}),n)}))),children:"Delete"})]})},e))},_=0;_<f.length;_++)M(_);var V=[];if(k&&0!==k.length)for(var H=function(e){V.push(Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(ke.a,{elevation:3,children:[k[e],Object(r.jsx)(v.a,{onClick:Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Oe.deleteBoardDetail(t,"ActionItems",k[e]);case 2:if(!n.sent){n.next=4;break}E(t);case 4:case"end":return n.stop()}}),n)}))),children:"Delete"})]})},e))},q=0;q<k.length;q++)H(q);return Object(r.jsx)("div",{className:G.root,children:Object(r.jsxs)(p.a,{container:!0,justify:"space-evenly",alignItems:"flex-start",spacing:3,children:[Object(r.jsx)(p.a,{item:!0,xs:4,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(h.a,{align:"center",variant:"h6",children:"Went well"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(r.jsx)(p.a,{item:!0,xs:10,children:Object(r.jsx)(J.a,{type:"text",variant:"filled",label:"Info",onChange:function(e){D(e.target.value)}})}),Object(r.jsx)(p.a,{item:!0,xs:2,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(v.a,{onClick:R,children:"Add"})})})]})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"center",direction:"column-reverse",children:Y})})]})}),Object(r.jsx)(p.a,{item:!0,xs:4,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(h.a,{align:"center",variant:"h6",children:"To Improve"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(r.jsx)(p.a,{item:!0,xs:10,children:Object(r.jsx)(J.a,{type:"text",variant:"filled",label:"Info",onChange:function(e){B(e.target.value)}})}),Object(r.jsx)(p.a,{item:!0,xs:2,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(v.a,{onClick:U,children:"Add"})})})]})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"center",direction:"column-reverse",children:K})})]})}),Object(r.jsx)(p.a,{item:!0,xs:4,children:Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(h.a,{align:"center",variant:"h6",children:"Action Items"})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(r.jsx)(p.a,{item:!0,xs:10,children:Object(r.jsx)(J.a,{type:"text",variant:"filled",label:"Info",onChange:function(e){T(e.target.value)}})}),Object(r.jsx)(p.a,{item:!0,xs:2,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(v.a,{onClick:P,children:"Add"})})})]})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"center",direction:"column-reverse",children:V})})]})})]})})}var Ie=Object(b.a)((function(){return{titleStyles:{marginBlockStart:25,color:"#283593",fontWeight:"bold"}}}));function Se(){var e=Object(u.h)().boardID,t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),b=l[0],f=l[1],O=Object(a.useState)(!1),m=Object(o.a)(O,2),g=m[0],k=m[1],w=Ie(),y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.getByID(t);case 2:(n=e.sent)&&s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){y(e)}),[]);var I=function(){k(!1)},S=function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,Oe.updateBoardName(e,b);case 3:if(!t.sent){t.next=5;break}y(e);case 5:I();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)(p.a,{container:!0,direction:"column",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(z,{userID:"5f97c9e93f2cf8fef63f0777",onAvatarClick:function(){console.log("avatar clicked")}})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsxs)(p.a,{container:!0,alignItems:"baseline",children:[Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(x.a,{m:3,children:Object(r.jsx)(h.a,{display:"block",variant:"h5",className:w.titleStyles,children:c?c.name:"Loading..."})})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(v.a,{onClick:function(){k(!0)},children:"Edit"})})]})}),Object(r.jsx)(p.a,{item:!0,children:Object(r.jsx)(ye,{boardID:e})})]}),Object(r.jsxs)(K.a,{open:g,onClose:I,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(M.a,{id:"form-dialog-title",children:"Change Board's name"}),Object(r.jsx)(_.a,{children:Object(r.jsx)(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Board name",type:"text",defaultValue:c?c.name:"",fullWidth:!0,variant:"outlined",onChange:function(e){f(e.target.value)}})}),Object(r.jsxs)(V.a,{children:[Object(r.jsx)(v.a,{onClick:I,color:"primary",children:"Cancel"}),Object(r.jsx)(v.a,{onClick:S,color:"primary",children:"Save"})]})]})]})}var De=n(198),Ce=n.n(De),Ne=function(){return localStorage.getItem("token")||null},We={getUserID:function(){var e=Ne();return e?Ce.a.verify(e,"1712354").sub:null},getToken:Ne,deleteToken:function(){return localStorage.removeItem("token")}};function Be(e){var t=Object(a.useState)(We.getUserID),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(u.g)();return Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/login",children:c?Object(r.jsx)(u.a,{to:"/"}):Object(r.jsx)(T,{onSuccess:function(){s(We.getUserID)}})}),Object(r.jsx)(u.b,{exact:!0,path:"/register",children:c?Object(r.jsx)(u.a,{to:"/"}):Object(r.jsx)(E,{onSuccess:function(){i.replace("/login")}})}),Object(r.jsx)(u.b,{path:"/board-detail/:boardID",children:Object(r.jsx)(Se,{})}),Object(r.jsx)(u.b,{path:"/board-detail",children:Object(r.jsx)(u.a,{to:"/login"})}),Object(r.jsx)(u.b,{exact:!0,path:"/",children:c?Object(r.jsx)(ge,{userID:c,logoutAction:function(){We.deleteToken(),s(null)}}):Object(r.jsx)(u.a,{to:"/login"})})]})}s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(Be,{})}),document.getElementById("root"))}},[[349,1,2]]]);
//# sourceMappingURL=main.33531495.chunk.js.map