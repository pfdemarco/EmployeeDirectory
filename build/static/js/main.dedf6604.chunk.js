(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{33:function(e,t,n){e.exports=n(61)},38:function(e,t,n){},39:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=(n(38),n(11)),i=(n(39),n(32)),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(t),r=Object(c.a)(n,2),l=r[0],o=r[1],u=Object(a.useMemo)((function(){var t=Object(i.a)(e);return null!==l&&t.sort((function(e,t){return e[l.key]<t[l.key]?"ascending"===l.direction?-1:1:e[l.key]>t[l.key]?"ascending"===l.direction?1:-1:0})),t}),[e,l]),m=function(e){var t="ascending";l&&l.key===e&&"ascending"===l.direction&&(t="descending"),o({key:e,direction:t})};return{employees:u,requestSort:m,sortConfig:l}},m=n(29),s=function(e){var t=u(e.employees),n=t.employees,a=t.requestSort,l=t.sortConfig,o=function(e){if(l)return l.key===e?l.direction:void 0};return r.a.createElement(m.a,null,r.a.createElement("table",{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Profile Pic"),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return a("lastName")},className:o("lastName")},"Name")),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return a("email")},className:o("email")},"Email Address")),r.a.createElement("th",null,r.a.createElement("button",{type:"button",onClick:function(){return a("yearDate")},className:o("yearDate")},"DOB")))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("img",{src:e.pic,alt:e.firstName})),r.a.createElement("td",null,e.firstName," ",e.lastName),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dayMonthDate,"/",e.yearDate))})))))},d=n(30),f=n.n(d),h=function(){return f.a.get("https://randomuser.me/api/?results=99&nat=au")},E=n(18),p=n(13);var y=function(e){return r.a.createElement(E.a,{inline:!0},r.a.createElement(E.a.Text,{className:"text-white"},"Search by name, email or phone number"),r.a.createElement(p.a,{value:e.search,onChange:e.handleInputChange,type:"text",className:"m-3 form-control",placeholder:"Search"}))};var b=function(){return r.a.createElement("h1",null,"Employee Directory")},g=n(31);var v=function(e){return r.a.createElement(g.a,{className:"bg-nav border-10 justify-content-between"},r.a.createElement(b,null),r.a.createElement(y,{handleInputChange:e.handleInputChange,results:e.search}))},N=n(17),k=n.n(N);var w=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(),i=Object(c.a)(o,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){h().then((function(e){var t=function(e){return e.data.results.map((function(e){var t=k()(e.dob.date).format("DD/MM"),n=k()(e.dob.date).format("YYYY");return{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,id:e.login.uuid,pic:e.picture.medium,dayMonthDate:t,yearDate:n}}))}(e);l(t)}))}),[]),r.a.createElement("div",null,r.a.createElement(v,{handleInputChange:function(e){var t=e.target.value;console.log(t);var a=n.filter((function(e){var n=e.firstName.toLowerCase()+" "+e.lastName.toLowerCase()+e.email.toLowerCase()+e.phone.toLowerCase();if(console.log(t,n),-1!==n.indexOf(t.toLowerCase()))return e}));m(a)}}),n?r.a.createElement(s,{employees:u||n}):"Loading...")};var C=function(){return r.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dedf6604.chunk.js.map