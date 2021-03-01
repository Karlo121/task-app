(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{25:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var i,o,a,r,c,s,d,l,b,p=t(0),u=t.n(p),x=t(13),j=t.n(x),f=(t(25),t(19)),h=t(7),m=t(4),g=t(3),O=t(2),k=O.b.header(i||(i=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  color: #2c2f33;\n"]))),y=O.b.button(o||(o=Object(g.a)(["\n  display: inline-block;\n  background: #2c2f33;\n  color: #fff;\n  border: none;\n  padding: 10px 15px;\n  margin: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: inherit;\n\n  &:focus {\n    outline: none;\n  }\n  :active {\n    transform: scale(0.98);\n  }\n\n  background: ",";\n"])),(function(n){return n.theme.main})),v=t(1),w=function(n){return Object(v.jsx)(y,{theme:n.showForm?{main:"#FF4147"}:{main:"#24BD64"},onClick:n.onClick,children:n.text})},F=t.p+"static/media/logo.8e13046f.jpg",C=function(n){return Object(v.jsxs)(k,{children:[Object(v.jsx)("img",{src:F,alt:"Logo",height:"50px"}),Object(v.jsx)("h1",{children:n.title}),Object(v.jsx)(w,{showForm:n.showForm,text:n.showForm?"Close":"Add",onClick:n.onAdd})]})},T=t(20),D=O.b.div(a||(a=Object(g.a)(["\n  background: #2c2f33;\n  color: white;\n  margin: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n\n  border-left: ",";\n\n  h3 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])),(function(n){return n.isReminder?"5px solid #24BD64":" "})),S=Object(O.b)(T.a)(r||(r=Object(g.a)(["\n  color: white;\n"]))),A=function(n){var e=n.task;return Object(v.jsxs)(D,{isReminder:e.reminder,onDoubleClick:function(){return n.onToggle(e.id)},children:[Object(v.jsxs)("h3",{children:[e.text,Object(v.jsx)(S,{size:"20",onClick:function(){return n.onDelete(e.id)}})]}),Object(v.jsx)("p",{children:e.day})]})},z=function(n){var e=n.onDelete,t=n.task,i=n.onToggle;return Object(v.jsx)(v.Fragment,{children:t.map((function(n){return Object(v.jsx)(A,{task:n,onDelete:e,onToggle:i},n.id)}))})},B=Object(O.a)(c||(c=Object(g.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  background-color: #2C2F33;\n}\n\n.container {\n  max-width: 500px;\n  margin: 30px auto;\n  overflow: auto;\n  min-height: 300px;\n  border: 1px solid black;\n  padding: 30px;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.add-form {\n  margin-bottom: 40px;\n}\n\nfooter {\n  margin-top: 30px;\n  text-align: center;\n}\n\n"]))),I=[{id:1,text:"Feed Rami",day:"Feb 25th at 16:30",reminder:!0},{id:2,text:"Brush Rami",day:"Feb 25th at 18:30",reminder:!0},{id:3,text:"Feed Flora",day:"Feb 25th at 18:45",reminder:!0}],R=O.b.form(s||(s=Object(g.a)(["\n  margin-bottom: 40px;\n"]))),N=O.b.div(d||(d=Object(g.a)(["\n  margin: 20px 0;\n  label {\n    display: block;\n  }\n  input {\n    width: 100%;\n    height: 40px;\n    margin: 5px;\n    padding: 3px 7px;\n    font-size: 17px;\n  }\n"]))),L=O.b.div(l||(l=Object(g.a)(["\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  label {\n    display: block;\n  }\n  input {\n    width: 100%;\n    height: 40px;\n    margin: 5px;\n    padding: 3px 7px;\n    font-size: 17px;\n  }\n  label {\n    flex: 1;\n  }\n  input {\n    flex: 2;\n    height: 20px;\n  }\n"]))),M=O.b.input(b||(b=Object(g.a)(["\n  display: inline-block;\n  background: #2c2f33;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: inherit;\n  width: 100%;\n  :focus {\n    outline: none;\n  }\n  :active {\n    transform: scale(0.98);\n  }\n"]))),P=function(n){var e=Object(p.useState)(""),t=Object(m.a)(e,2),i=t[0],o=t[1],a=Object(p.useState)(""),r=Object(m.a)(a,2),c=r[0],s=r[1],d=Object(p.useState)(!1),l=Object(m.a)(d,2),b=l[0],u=l[1];return Object(v.jsxs)(R,{onSubmit:function(e){e.preventDefault(),i?(n.onAdd({text:i,day:c,reminder:b}),o(""),s(""),u(!1)):alert("Please add a task!")},children:[Object(v.jsxs)(N,{children:[Object(v.jsx)("label",{children:"Task"}),Object(v.jsx)("input",{type:"text",value:i,onChange:function(n){o(n.target.value)},placeholder:"Add Task"})]}),Object(v.jsxs)(N,{children:[Object(v.jsx)("label",{children:"Day & TIme"}),Object(v.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:c,onChange:function(n){s(n.target.value)}})]}),Object(v.jsxs)(L,{className:"form-control-check",children:[Object(v.jsx)("label",{children:"Set Reminder"}),Object(v.jsx)("input",{type:"checkbox",value:b?"true":"false",checked:b,onChange:function(n){u(n.currentTarget.checked)}})]}),Object(v.jsx)(M,{type:"submit",value:"Save Task",className:"btn btn-block"})]})},J=function(){var n=Object(p.useState)(I),e=Object(m.a)(n,2),t=e[0],i=e[1],o=Object(p.useState)(!1),a=Object(m.a)(o,2),r=a[0],c=a[1];return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(B,{}),Object(v.jsx)(C,{title:"Task App",onAdd:function(){c(!r)},showForm:r}),r&&Object(v.jsx)(P,{onAdd:function(n){var e=Math.floor(1e4*Math.random()+1),o=Object(h.a)(Object(h.a)({},n),{},{id:e});i([].concat(Object(f.a)(t),[o]))}}),t.length>0?Object(v.jsx)(z,{task:t,onDelete:function(n){i(t.filter((function(e){return n!==e.id}))),console.log(t)},onToggle:function(n){i(t.map((function(e){return e.id===n?Object(h.a)(Object(h.a)({},e),{},{reminder:!e.reminder}):e})))}}):"No tasks to show"]})},E=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),a(n),r(n)}))};j.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),E()}},[[30,1,2]]]);
//# sourceMappingURL=main.305a28a5.chunk.js.map