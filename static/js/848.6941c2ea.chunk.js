"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[848],{7111:function(e,t,n){n.d(t,{Z:function(){return c}});var a="Section_section__Z2PLw",o="Section_section-title__Z3Kq1",r=n(3329),c=function(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{className:a,children:[t&&(0,r.jsx)("h1",{className:o,children:t}),n]})}},7848:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(4270),o=n(7111),r=n(9439),c=n(2791),s=n(9434),i=n(8893),l=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.contacts},u=function(e){return e.contacts.error},d=function(e){return e.filter},h={wrapper:"ContactForm_wrapper__-Umw-","phonebook-label-text":"ContactForm_phonebook-label-text__R622y","phonebook-input":"ContactForm_phonebook-input__nD0wA","phonebook-form-btn":"ContactForm_phonebook-form-btn__OiBKP"},p=n(3329),x=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,c.useState)(""),l=(0,r.Z)(o,2),u=l[0],d=l[1],x=(0,s.v9)(m),b=(0,s.I0)(),_=function(e){var t=e.currentTarget,n=t.name,o=t.value;switch(n){case"name":a(o);break;case"number":d(o);break;default:console.warn("field type name - ".concat(n," can't be managed"))}},f=function(){a(""),d("")};return(0,p.jsxs)("form",{className:h["phonebook-form"],onSubmit:function(e){e.preventDefault(),x.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?window.alert("we ara sorry, contact ".concat(n," has already existed")):(b((0,i.uK)({name:n,number:u})),f())},children:[(0,p.jsxs)("div",{className:h.wrapper,children:[(0,p.jsxs)("label",{className:h["phonebook-label"],children:[(0,p.jsx)("span",{className:h["phonebook-label-text"],children:"Name"}),(0,p.jsx)("input",{className:h["phonebook-input"],type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:_})]}),(0,p.jsxs)("label",{className:h["phonebook-label"],children:[(0,p.jsx)("span",{className:h["phonebook-label-text"],children:"Number"}),(0,p.jsx)("input",{className:h["phonebook-input"],type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:_})]})]}),(0,p.jsx)("button",{className:h["phonebook-form-btn"],type:"submit",children:"Add contact"})]})},b=n(96),_="Filter_filter-label__memAx",f="Filter_filter-label-text__+jugc",j="Filter_filter-input__dFgnI",v=function(){var e=(0,s.I0)(b.T);return(0,p.jsxs)("label",{className:_,children:[(0,p.jsx)("span",{className:f,children:"Find contacts by name"}),(0,p.jsx)("input",{className:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){e((0,b.T)(t.currentTarget.value))}})]})},N={"contact-list-item":"ContactItem_contact-list-item__nWWV8","contact-name-text":"ContactItem_contact-name-text__t2EKm","delete-contact-btn":"ContactItem_delete-contact-btn__wppP4"},k=function(e){var t=e.name,n=e.number,a=e.id,o=(0,s.I0)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("li",{className:N["contact-list-item"],children:[(0,p.jsxs)("span",{className:N["contact-name-text"],children:[t,": "]}),(0,p.jsxs)("span",{className:N["contact-number-text"],children:[" ",n]}),(0,p.jsx)("button",{className:N["delete-contact-btn"],type:"button",onClick:function(){o((0,i.GK)(a))},children:"Delete"})]})})},C=n(643),w=function(){return(0,p.jsx)(C.Z1,{height:"100",width:"100",color:"#a4133c",visible:!0,ariaLabel:"three-circles-rotating",wrapperStyle:{display:"flex",justifyContent:"center",position:"relative",top:"200px"}})},g={"no-contact-text":"ContactList_no-contact-text__pQHx7","error-text":"ContactList_error-text__3vbva"},y=function(){var e=(0,s.v9)(d),t=(0,s.I0)();(0,c.useEffect)((function(){t((0,i.yF)())}),[t]);var n=(0,s.v9)(m),a=(0,s.v9)(l),o=(0,s.v9)(u),r=""!==e?n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):n;return(0,p.jsxs)(p.Fragment,{children:[a&&(0,p.jsx)("div",{className:"backdrop",children:(0,p.jsx)(w,{})}),r&&r.length>0?(0,p.jsx)("ul",{className:g["contact-list"],children:r.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,p.jsx)(k,{id:t,name:n,number:a},t)}))}):o?(0,p.jsx)("p",{className:g["error-text"],children:o}):(0,p.jsx)("div",{children:(0,p.jsx)("p",{className:g["no-contact-text"],children:"Sorry, no contact found"})})]})},F="Contacts_main-content-wrapper__frSp6",Z=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.q,{children:(0,p.jsx)("title",{children:"PhoneBook"})}),(0,p.jsx)("main",{children:(0,p.jsxs)("div",{className:F,children:[(0,p.jsx)(o.Z,{title:"Phonebook",children:(0,p.jsx)(x,{})}),(0,p.jsxs)(o.Z,{title:"Contacts",children:[(0,p.jsx)(v,{}),(0,p.jsx)(y,{})]})]})})]})}}}]);
//# sourceMappingURL=848.6941c2ea.chunk.js.map