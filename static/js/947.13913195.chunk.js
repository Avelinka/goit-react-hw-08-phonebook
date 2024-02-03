"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{8947:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r,o,i,c,a,u,s,l,m,d,h,p,f,x,g,b,j,w,Z=t(8185),y=t(7302),v=t(168),P=t(5867),z=P.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)})),k=P.ZP.h1(o||(o=(0,v.Z)(["\n  font-size: 40px;\n  font-weight: 700;\n"]))),C=P.ZP.h2(i||(i=(0,v.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n"]))),F=t(4420),L=t(3553),_=function(n){return n.contacts.items},q=function(n){return n.contacts.isLoading},R=function(n){return n.contacts.error},D=function(n){return n.filter},I=((0,L.P1)([_,D],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),t(3634)),N=t(5705),S=t(8007),J=t(5218),T=(0,P.ZP)(N.l0)(c||(c=(0,v.Z)(["\n  max-width: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin: 0 auto ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(10)})),A=P.ZP.label(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(1)})),B=P.ZP.span(u||(u=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n  font-size: 18;\n"])),(function(n){return n.theme.spacing(2)})),H=(0,P.ZP)(N.gN)(s||(s=(0,v.Z)(["\n  border-radius: ",";\n  border: 1px solid ",";\n  padding: "," ",";\n"])),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),K=(0,P.ZP)(N.Bc)(l||(l=(0,v.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),V=P.ZP.button(m||(m=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n  width: ",";\n  height: ",";\n  margin: 0 auto;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: ",";\n  transition: all 300ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    font-weight: 700;\n    box-shadow: 3px 3px 15px 1px ",";\n    -webkit-box-shadow: 3px 3px 15px 1px ",";\n    -moz-box-shadow: 3px 3px 15px 1px ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(40)}),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.lightblue}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.shadowblue}),(function(n){return n.theme.colors.shadowblue}),(function(n){return n.theme.colors.shadowblue})),$=t(184),E=S.Ry().shape({name:S.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f'. -]+$/,"Name may contain only letters, apostrophe, dot, dash and spaces. For example Jane Dou").required("Required"),number:S.Z_().trim().min(7,"Too Short!").matches(/^[0-9+ ()-]+$/,"Please enter a valid phone number. For example 111-11-11").required("Required")}),G=function(){var n=(0,F.v9)(_),e=(0,F.I0)();return(0,$.jsx)(N.J9,{initialValues:{name:"",number:""},validationSchema:E,onSubmit:function(t,r){var o=r.resetForm,i=n.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})),c=n.some((function(n){return n.number===t.number}));return i?J.ZP.error("".concat(t.name,": is already in contacts")):c?J.ZP.error("".concat(t.number,": is already in contacts")):(e((0,I.uK)(t)),void o())},children:(0,$.jsxs)(T,{autoComplete:"off",children:[(0,$.jsxs)(A,{htmlFor:"name",children:[(0,$.jsxs)(B,{children:[(0,$.jsx)(Z.HHm,{size:"18"}),"Name"]}),(0,$.jsx)(H,{autoComplete:"off",type:"text",id:"name",name:"name",placeholder:"Jane Doe",required:!0}),(0,$.jsx)(K,{name:"name",component:"span"})]}),(0,$.jsxs)(A,{htmlFor:"number",children:[(0,$.jsxs)(B,{children:[(0,$.jsx)(Z.UL8,{size:"16"}),"Phone"]}),(0,$.jsx)(H,{autoComplete:"off",type:"tel",id:"number",name:"number",placeholder:"111-11-11",required:!0}),(0,$.jsx)(K,{name:"number",component:"span"})]}),(0,$.jsxs)(V,{type:"submit",children:["Add contact",(0,$.jsx)(Z.RYR,{size:"16"})]})]})})},O=P.ZP.label(d||(d=(0,v.Z)(["\n  max-width: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin: 0 auto ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(5)})),U=P.ZP.span(h||(h=(0,v.Z)(["\n  display: flex;\n  gap: ",";\n  align-items: center;\n"])),(function(n){return n.theme.spacing(2)})),Y=P.ZP.input(p||(p=(0,v.Z)(["\n  border-radius: ",";\n  border: 1px solid ",";\n  padding: "," ",";\n"])),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),M=t(4808),Q=function(){var n=(0,F.v9)(D),e=(0,F.I0)();return(0,$.jsxs)(O,{children:[(0,$.jsxs)(U,{children:[(0,$.jsx)(Z.dVI,{size:"16"})," Find contacts by name"]}),(0,$.jsx)(Y,{name:"filter",autoComplete:"off",type:"text",value:n,onChange:function(n){e((0,M.T)(n.target.value.toLowerCase().trim()))},placeholder:"search"})]})},W=t(2791),X=t(9662),nn=P.ZP.ul(f||(f=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    gap: ",";\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(8)})),en=P.ZP.li(x||(x=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)})),tn=P.ZP.div(g||(g=(0,v.Z)(["\n  display: flex;\n  gap: ",";\n\n  @media (max-width: 460px) {\n    flex-direction: column;\n    gap: ",";\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)})),rn=P.ZP.span(b||(b=(0,v.Z)(["\n  font-size: 18px;\n"]))),on=P.ZP.button(j||(j=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n  width: ",";\n  height: ",";\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: ",";\n  transition: all 300ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    font-weight: 700;\n    box-shadow: 3px 3px 15px 1px ",";\n    -webkit-box-shadow: 3px 3px 15px 1px ",";\n    -moz-box-shadow: 3px 3px 15px 1px ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(30)}),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.lightblue}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.shadowblue}),(function(n){return n.theme.colors.shadowblue}),(function(n){return n.theme.colors.shadowblue})),cn=P.ZP.p(w||(w=(0,v.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),an=function(){var n=(0,F.v9)(_),e=(0,F.v9)(D),t=(0,F.v9)(R),r=(0,F.v9)(q),o=(0,F.I0)();(0,W.useEffect)((function(){o((0,I.yF)())}),[o]);var i=e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;if(null===i||void 0===i||!i.length)return(0,$.jsx)(cn,{children:"No contacts added yet."});var c=function(n){o((0,I.GK)(n.currentTarget.id))};return(0,$.jsxs)($.Fragment,{children:[r&&(0,$.jsx)(X.a,{}),t&&(0,$.jsx)("p",{children:t}),(0,$.jsx)(nn,{children:i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,$.jsxs)(en,{children:[(0,$.jsxs)(tn,{children:[(0,$.jsxs)(rn,{children:[t,":"]}),(0,$.jsx)(rn,{children:r})]}),(0,$.jsxs)(on,{type:"button",id:e,onClick:c,children:["Delete",(0,$.jsx)(Z.fw5,{size:"16"})]})]},e)}))})]})};function un(){return(0,$.jsx)(y.SB,{children:(0,$.jsxs)(y.im,{children:[(0,$.jsxs)(z,{children:[(0,$.jsx)(Z.R_f,{size:"40"}),(0,$.jsx)(k,{children:"Phonebook"})]}),(0,$.jsx)(G,{}),(0,$.jsxs)(z,{children:[(0,$.jsx)(Z.LDO,{size:"28"}),(0,$.jsx)(C,{children:"Contacts"})]}),(0,$.jsx)(Q,{}),(0,$.jsx)(an,{})]})})}}}]);
//# sourceMappingURL=947.13913195.chunk.js.map