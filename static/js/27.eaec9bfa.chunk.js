"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[27],{3027:function(e,a,s){s.d(a,{Z:function(){return oe}});var r=s(1413),i=s(5987),l=s(1694),o=s.n(l),t=s(2007),n=s.n(t),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,t=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,i.Z)(e,f);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:o()(t,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,N=void 0!==u&&u,h=e.as,y=void 0===h?"input":h,Z=(0,i.Z)(e,x),j=(0,c.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},Z),{},{ref:a,type:f,id:s||j,className:o()(t,l,m&&"is-valid",N&&"is-invalid")}))}));N.displayName="FormCheckInput";var h=N,y=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.htmlFor,n=(0,i.Z)(e,y),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},n),{},{ref:a,htmlFor:t||f,className:o()(l,s)}))}));Z.displayName="FormCheckLabel";var j=Z;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,N=void 0!==x&&x,y=e.isValid,Z=void 0!==y&&y,P=e.isInvalid,I=void 0!==P&&P,F=e.feedbackTooltip,k=void 0!==F&&F,g=e.feedback,C=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,_=e.as,G=void 0===_?"input":_,H=(0,i.Z)(e,w);l=(0,b.vE)(l,"form-check"),t=(0,b.vE)(t,"form-switch");var M=(0,c.useContext)(p).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),q=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,j),B=(0,d.jsx)(h,(0,r.Z)((0,r.Z)({},H),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:Z,isInvalid:I,disabled:N,as:G}));return(0,d.jsx)(p.Provider,{value:A,children:(0,d.jsx)("div",{style:E,className:o()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&t),children:O||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(j,{title:S,children:L}),g&&(0,d.jsx)(u,{type:C,tooltip:k,children:g})]})})})}));P.displayName="FormCheck";var I=Object.assign(P,{Input:h,Label:j}),F=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.type,t=e.size,n=e.htmlSize,f=e.id,v=e.className,m=e.isValid,u=void 0!==m&&m,x=e.isInvalid,N=void 0!==x&&x,h=e.plaintext,y=e.readOnly,Z=e.as,j=void 0===Z?"input":Z,w=(0,i.Z)(e,F),P=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-control"),(0,d.jsx)(j,(0,r.Z)((0,r.Z)({},w),{},{type:l,size:n,ref:a,readOnly:y,id:f||P,className:o()(v,h?"".concat(s,"-plaintext"):s,t&&"".concat(s,"-").concat(t),"color"===l&&"".concat(s,"-color"),u&&"is-valid",N&&"is-invalid")}))}));k.displayName="FormControl";var g=Object.assign(k,{Feedback:u}),C=["className","bsPrefix","as"],R=c.forwardRef((function(e,a){var s=e.className,l=e.bsPrefix,t=e.as,n=void 0===t?"div":t,c=(0,i.Z)(e,C);return l=(0,b.vE)(l,"form-floating"),(0,d.jsx)(n,(0,r.Z)({ref:a,className:o()(s,l)},c))}));R.displayName="FormFloating";var E=R,z=["controlId","as"],S=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,o=void 0===l?"div":l,t=(0,i.Z)(e,z),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(o,(0,r.Z)((0,r.Z)({},t),{},{ref:a}))})}));S.displayName="FormGroup";var T=S,V=s(9439),L=["as","bsPrefix","className"],O=["className"];var _=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,t=(0,i.Z)(e,L);s=(0,b.vE)(s,"col");var n=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return n.forEach((function(e){var a,r,i,l=t[e];delete t[e],"object"===typeof l&&null!=l?(a=l.span,r=l.offset,i=l.order):a=l;var o=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(a)),null!=i&&f.push("order".concat(o,"-").concat(i)),null!=r&&f.push("offset".concat(o,"-").concat(r))})),[(0,r.Z)((0,r.Z)({},t),{},{className:o().apply(void 0,[l].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),l=(0,V.Z)(s,2),t=l[0],n=t.className,c=(0,i.Z)(t,O),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(n,!p.length&&u)}))}));_.displayName="Col";var G=_,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,t=e.bsPrefix,n=e.column,f=void 0!==n&&n,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,x=e.htmlFor,N=(0,i.Z)(e,H),h=(0,c.useContext)(p).controlId;t=(0,b.vE)(t,"form-label");var y="col-form-label";"string"===typeof f&&(y="".concat(y," ").concat(y,"-").concat(f));var Z=o()(u,t,m&&"visually-hidden",f&&y);return x=x||h,f?(0,d.jsx)(G,(0,r.Z)({ref:a,as:"label",className:Z,htmlFor:x},N)):(0,d.jsx)(l,(0,r.Z)({ref:a,className:Z,htmlFor:x},N))}));M.displayName="FormLabel";var A=M,q=["bsPrefix","className","id"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.id,n=(0,i.Z)(e,q),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},n),{},{type:"range",ref:a,className:o()(l,s),id:t||f}))}));B.displayName="FormRange";var D=B,J=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,t=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,N=(0,i.Z)(e,J),h=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},N),{},{size:t,ref:a,className:o()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));K.displayName="FormSelect";var Q=K,U=["bsPrefix","className","as","muted"],W=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.as,n=void 0===t?"small":t,c=e.muted,f=(0,i.Z)(e,U);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:o()(l,s,c&&"text-muted")}))}));W.displayName="FormText";var X=W,Y=c.forwardRef((function(e,a){return(0,d.jsx)(I,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));Y.displayName="Switch";var $=Object.assign(Y,{Input:I.Input,Label:I.Label}),ee=["bsPrefix","className","children","controlId","label"],ae=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.children,n=e.controlId,c=e.label,f=(0,i.Z)(e,ee);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(T,(0,r.Z)((0,r.Z)({ref:a,className:o()(l,s),controlId:n},f),{},{children:[t,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));ae.displayName="FloatingLabel";var se=ae,re=["className","validated","as"],ie={_ref:n().any,validated:n().bool,as:n().elementType},le=c.forwardRef((function(e,a){var s=e.className,l=e.validated,t=e.as,n=void 0===t?"form":t,c=(0,i.Z)(e,re);return(0,d.jsx)(n,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(s,l&&"was-validated")}))}));le.displayName="Form",le.propTypes=ie;var oe=Object.assign(le,{Group:T,Control:g,Floating:E,Check:I,Switch:$,Label:A,Text:X,Range:D,Select:Q,FloatingLabel:se})}}]);
//# sourceMappingURL=27.eaec9bfa.chunk.js.map