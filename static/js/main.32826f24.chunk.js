(this["webpackJsonpfirebase-chat-app"]=this["webpackJsonpfirebase-chat-app"]||[]).push([[0],{57:function(e,t,n){},61:function(e,t){},93:function(e,t,n){"use strict";n.r(t);var s=n(4),c=n(45),r=n.n(c),i=(n(57),n(48)),a=n(9),o=n(14),u=n(3),j=Object(s.createContext)(),d=function(e){var t=e.children,n=Object(s.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],a=Object(s.useState)(""),d=Object(o.a)(a,2),b=d[0],l=d[1],p=Object(s.useState)(""),h=Object(o.a)(p,2),f=h[0],O=h[1],g=Object(s.useState)(!1),x=Object(o.a)(g,2),m=x[0],v=x[1];return Object(u.jsx)(j.Provider,{value:{auth:m,changeAuth:function(e){v(e)},userName:r,userPwd:f,changeUserName:function(e){i(e)},changePwd:function(e){O(e)},userID:b,changeUserID:function(e){l(e)}},children:t})},b=n(46),l=n(13),p=n(47),h=function(e){return p.SHA256(e)},f=(Object(b.a)({apiKey:"AIzaSyDeGOpvl_DKZdh1vCC3KjVaDjo4E1jWWRM",authDomain:"firechat-b5eb7.firebaseapp.com",databaseURL:"https://firechat-b5eb7-default-rtdb.firebaseio.com/",projectId:"firechat-b5eb7",storageBucket:"firechat-b5eb7.appspot.com",messagingSenderId:"714586559822",appId:"1:714586559822:web:7f1659e7c9f8f265dffa1f",measurementId:"G-CYWN7LQMPW"}),Object(l.c)()),O=function(e){var t=Object(s.useContext)(j),n=t.userName,c=t.changeUserName,r=t.changePwd,i=t.userPwd,a=t.changeAuth,o=t.changeUserID,d=function(){(function(e,t){return Object(l.b)(Object(l.a)(Object(l.d)(f),"users/")).then((function(n){if(n.exists()){for(var s=n.val(),c=Object.keys(s),r=0;r<c.length;r++)if(s[c[r]].userName===e)return!(s[c[r]].password!==h(t).toString())&&s[c[r]].userId;return!1}return!1})).catch((function(e){console.error(e)}))})(n,i).then((function(t){!1!==t?(a(!0),o(t),e.history.push("/chat")):alert("\xa1Usuario y/o contrase\xf1a incorrectos!")}))};return Object(u.jsx)("div",{style:{display:"table-caption"},children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d()},autoComplete:"off",children:[Object(u.jsx)("span",{children:"Username"}),Object(u.jsx)("input",{onChange:function(e){c(e.target.value)},id:"username-input"}),Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{onChange:function(e){var t=e.target;r(t.value)},type:"password",id:"pwd-input"}),Object(u.jsx)("input",{type:"submit",value:"LogIn"}),Object(u.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e.history.push("/register")},children:"Register"})]})})},g=n(35),x={form:{display:"grid",placeItems:"center",margin:10},div:{display:"flex",justifyContent:"center",alignItems:"center",margin:10},box:{width:400,padding:40,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"#151515",textAlign:"center"},body:{margin:0,padding:0,fontFamily:"sans-serif",background:"#301b3f"},messageBubble:{borderRadius:5,backgroundColor:"greenblue",border:"1px solid",display:"inline-block",margin:5,width:"fit-content",padding:5}},m=function(e){var t=Object(s.useContext)(j).userID,n=function(e){};return Object(u.jsxs)("div",{style:x.messageBubble,id:e.msg.id,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsxs)("b",{children:[e.msg.owner,": "]})}),e.msg.msg]}),e.msg.ownerId===t?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(e){},children:"Editar"}),Object(u.jsx)("button",{onClick:function(){e.deleteMessage(e.msg.id)},children:"Eliminar"}),Object(u.jsx)("button",{onClick:n,children:"Responder"})]}):Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:n,children:"Responder"})})]})},v=function(e){return Object(u.jsx)("div",{style:{display:"grid"},children:e.messages.map((function(t,n){return Object(u.jsx)(m,{deleteMessage:e.deleteMessage,msg:t},n)}))})},y=n(94),w=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e.username}),Object(u.jsx)("p",{children:e.messages})]})},C=function(e){return Object(u.jsx)("div",{style:{display:"table-caption"},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:"Usuarios involucrados en el foro"})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text"})}),Object(u.jsx)("div",{children:void(e.participants&&e.participants.map((function(e){return Object(u.jsx)(w,{username:e.userName,messages:e.msg.count})})))})]})})},I=function(e){var t=Object(s.useContext)(j),n=t.userName,c=t.userID,r=t.changeUserName,i=t.changeAuth,a=Object(s.useState)({}),d=Object(o.a)(a,2),b=d[0],p=d[1],h=Object(s.useState)([]),O=Object(o.a)(h,2),x=O[0],m=O[1];Object(s.useEffect)((function(){Object(l.b)(Object(l.a)(Object(l.d)(f),"messages/")).then((function(e){if(e.exists())return e.val()})).catch((function(e){console.error(e)})).then((function(e){if(e){for(var t=Object.keys(e),n=[],s=0;s<t.length;s++)for(var c=e[t[s]],r=Object.keys(c),i=0;i<r.length;i++)n.unshift(c[r[i]]);m((function(e){return[].concat(n)}))}}))}),[]);return Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"left"},children:[Object(u.jsx)(C,{participants:null}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["Bienvenid@ ",n,"!"]}),Object(u.jsx)("div",{style:{height:"500px",width:"100%",overflow:"auto"},children:Object(u.jsx)(v,{user:n,deleteMessage:function(e){!function(e,t){Object(l.e)(Object(l.d)(f,"messages/"+t+"/"+e),null)}(e,c),m((function(t){return t.filter((function(t){return t.id!==e}))}))},messages:x})})]}),Object(u.jsx)("div",{style:{display:"table-caption"},children:Object(u.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),m((function(e){return[].concat(Object(g.a)(e),[b])})),t=b,n=c,Object(l.e)(Object(l.d)(f,"messages/"+n+"/"+t.id),{ownerId:t.ownerId,id:t.id,owner:t.owner,msg:t.msg,responses:t.responses}),p({}),document.querySelector("#message").value=""},autoComplete:"off",children:[Object(u.jsx)("input",{type:"text",id:"message",onChange:function(e){e.preventDefault(),p({ownerId:c,id:y.a(),owner:n,msg:e.target.value,responses:[]})}}),Object(u.jsx)("input",{type:"submit"}),Object(u.jsx)("input",{type:"button",value:"logout",onClick:function(){r(""),i(!1),e.history.push("/")}})]})})]})]})},k=function(e){var t=Object(s.useContext)(j),n=t.changeUserName,c=t.changePwd,r=t.userName,i=t.userPwd,a=t.changeUserID;return Object(u.jsx)("div",{style:{display:"table-caption"},children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=y.a();a(n),function(e,t,n){var s=h(t);Object(l.e)(Object(l.d)(f,"users/"+n),{userId:n,userName:e,password:s.toString()})}(r,i,n),e.history.push("/chat")},autocomplete:"off",children:[Object(u.jsx)("span",{children:"Username"}),Object(u.jsx)("input",{onChange:function(e){n(e.target.value)},id:"username-input"}),Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{onChange:function(e){c(e.target.value)},type:"password",id:"pwd-input"}),Object(u.jsx)("input",{type:"submit",value:"SignIng"})]})})};var S=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.b,{exact:!0,path:"/",children:Object(u.jsx)(a.a,{to:"/login"})}),Object(u.jsx)(a.b,{exact:!0,path:"/login",component:O}),Object(u.jsx)(a.b,{exact:!0,path:"/chat",component:I}),Object(u.jsx)(a.b,{exact:!0,path:"/register",component:k})]})})})};r.a.render(Object(u.jsx)(S,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.32826f24.chunk.js.map