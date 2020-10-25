(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=a(1),i=(a(21),a(10)),d=a.n(i);var s=function(){return r.a.createElement("nav",null,r.a.createElement("h1",null,r.a.createElement(d.a,{color:"disabled"}),"Drive"))},m=a(12),u=a.n(m),f=a(6),E=a.n(f),p=a(7),v=a.n(p);var b=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(()=>(c&&window.addEventListener("click",()=>{l(!1)}),window.removeEventListener("click",()=>{l(!1)})),[c]),r.a.createElement("div",{className:"add-container"},r.a.createElement("div",{onClick:function(e){e.stopPropagation(),l(!c)},className:"add-btn"},r.a.createElement(u.a,{fontSize:"large",color:"primary"}),r.a.createElement("span",{className:"add-text"},"New")),c&&r.a.createElement("div",{onClick:e=>e.stopPropagation(),className:"add-menu"},r.a.createElement("div",{onClick:function(){e.setShowAddEditCard(!0),e.setOperation("addFolder")},className:"flex-row-center"},r.a.createElement(E.a,null),r.a.createElement("h3",null,"Folder")),r.a.createElement("hr",{style:{width:"90%"}}),r.a.createElement("div",{onClick:function(){e.setShowAddEditCard(!0),e.setOperation("addFile")},className:"flex-row-center"},r.a.createElement(v.a,null),r.a.createElement("h3",null,"File"))))};var h=function(e){function t(t){var a=t.target.dataset.index;e.alterPath(a)}return r.a.createElement("div",{className:"breadcrumb"},r.a.createElement(b,{setOperation:e.setOperation,setShowAddEditCard:e.setShowAddEditCard}),r.a.createElement("div",{className:"path-container"},e.path.map((e,a)=>r.a.createElement("h5",{onClick:t,key:a,"data-index":a}," ",e," /"))))},C=a(13),O=a.n(C),y=a(14),F=a.n(y);var w=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];function i(e){e.preventDefault(),e.stopPropagation(),l(!0)}return Object(n.useEffect)(()=>(c&&window.addEventListener("click",()=>{l(!1)}),window.removeEventListener("click",()=>{l(!1)})),[c]),r.a.createElement("div",{onClick:function(){c||"folder"!==e.type||e.displayCurrentDirectory(e.name)},className:"card-container"},c?r.a.createElement("div",{onClick:e=>e.stopPropagation(),className:"card",style:{cursor:"auto"}},r.a.createElement(O.a,{onClick:function(){e.deleteFileFolder(e.name,e.type)},className:"delete-icon"}),r.a.createElement(F.a,{onClick:function(){e.editFileFolder(e.name,e.type,"edit")},className:"edit-icon"})):"folder"===e.type?r.a.createElement("div",{onContextMenu:i,className:"card"},r.a.createElement(E.a,null),r.a.createElement("span",null,e.name)):r.a.createElement("div",{onContextMenu:i,className:"card"},r.a.createElement(v.a,null),r.a.createElement("span",null,e.name)))};var N=function(e){return r.a.createElement("div",{className:"content"},e.contentOnScreen.map((t,a)=>r.a.createElement(w,{deleteFileFolder:e.deleteFileFolder,editFileFolder:e.editFileFolder,displayCurrentDirectory:e.displayCurrentDirectory,key:a,name:t.name,type:t.type})))};var S=function(e){var t=Object(n.useState)(e.editValue),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"add-card-window"},r.a.createElement("div",{className:"add-card"},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onChange:function(e){e.stopPropagation(),l(e.target.value)},onClick:e=>e.stopPropagation(),type:"text",placeholder:"Enter Name",value:c})),r.a.createElement("div",{className:"add-card-btns"},r.a.createElement("button",{onClick:function(t){t.stopPropagation(),e.setShowAddEditCard(!1)},className:"cancel-btn"},"Cancel"),"edit"===e.operation?r.a.createElement("button",{onClick:function(t){t.stopPropagation(),e.handleEdit(c),e.setShowAddEditCard(!1)},className:"create-btn"},"Save"):r.a.createElement("button",{onClick:function(t){t.stopPropagation(),"addFolder"===e.operation&&e.createFileFolder(c,"folder"),"addFile"===e.operation&&e.createFileFolder(c,"file"),e.setShowAddEditCard(!1)},className:"create-btn"},"Create"))))},j={key:"1",name:"my drive",files:[],folders:[{name:"Demo Folder",type:"folder",files:[],folders:[]}]};var k=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(j),i=Object(o.a)(l,2),d=i[0],m=i[1],u=Object(n.useState)(["mydrive"]),f=Object(o.a)(u,2),E=f[0],p=f[1],v=Object(n.useState)(j.folders.concat(j.files)),b=Object(o.a)(v,2),C=b[0],O=b[1],y=Object(n.useState)(),F=Object(o.a)(y,2),w=F[0],k=F[1],g=Object(n.useState)(""),P=Object(o.a)(g,2),A=P[0],x=P[1],D=Object(n.useState)(""),L=Object(o.a)(D,2),M=L[0],J=L[1];function V(){var e=d,t=e.folders;return E.forEach(a=>{if("my drive"!==a)for(var n=0;n<t.length;n++)if(a===t[n].name){e=t[n],t=t[n].folders;break}}),e}return Object(n.useEffect)(()=>{var e=V();O(e.folders.concat(e.files))},[E,d]),r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(h,{path:E,alterPath:function(e){for(var t=[],a=0;a<=e;a++)t.push(E[a]);p(t);var n=V();O(n.folders.concat(n.files))},setOperation:k,setShowAddEditCard:c}),r.a.createElement(N,{deleteFileFolder:function(e,t){var a=d,n=[],r=V();r[t+="s"].forEach(t=>{t.name!=e&&n.push(t)}),r[t]=n,m(a),O(r.folders.concat(r.files))},editFileFolder:function(e,t,a){k(a),c(!0),x(e),J(t)},displayCurrentDirectory:function(e){p(t=>[...t,e])},contentOnScreen:C}),a&&r.a.createElement(S,{operation:w,editValue:A,handleEdit:function(e){var t=d,a=V();a["".concat(M,"s")].forEach(t=>{t.name===A&&(t.name=e)}),m(t),O(a.folders.concat(a.files)),x("")},createFileFolder:function(e,t){t+="s";var a,n=!1,r=V()[t];if(a="folders"===t?{name:e,type:"folder",files:[],folders:[]}:{name:e,type:"file"},r.forEach(t=>{t.name===e&&(window.alert("Already Present"),n=!0)}),!n){r.push(a),m(d);var c=V();O(c.folders.concat(c.files))}},setShowAddEditCard:c}))},g=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),g)}},[[16,1,2]]]);
//# sourceMappingURL=main.956ec0f6.chunk.js.map