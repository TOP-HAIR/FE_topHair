import{a2 as I,o as R,p as _,l as S,k as u,r as f,m as A,h as j,aH as L,j as p,aI as F,w as O,J as N,q as h,x as $}from"./index-4d8cba6e.js";var P={exports:{}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z=w,U=z;function x(){}function T(){}T.resetWarningCache=x;var W=function(){function e(s,o,r,l,c,d){if(d!==U){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:T,resetWarningCache:x};return n.PropTypes=n,n};P.exports=W();var k=P.exports;const G=I(k);function M(e){return _("MuiInputAdornment",e)}const D=R("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=D;var g;const H=["children","className","component","disablePointerEvents","disableTypography","position","variant"],q=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${h(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},B=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:s,position:o,size:r,variant:l}=e,c={root:["root",n&&"disablePointerEvents",o&&`position${h(o)}`,l,s&&"hiddenLabel",r&&`size${h(r)}`]};return $(c,M,t)},J=S("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>u({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${b.positionStart}&:not(.${b.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),V=f.forwardRef(function(t,n){const s=A({props:t,name:"MuiInputAdornment"}),{children:o,className:r,component:l="div",disablePointerEvents:c=!1,disableTypography:d=!1,position:a,variant:v}=s,E=j(s,H),i=L()||{};let m=v;v&&i.variant,i&&!m&&(m=i.variant);const y=u({},s,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:c,position:a,variant:m}),C=B(y);return p.jsx(F.Provider,{value:null,children:p.jsx(J,u({as:l,ownerState:y,className:O(C.root,r),ref:n},E,{children:typeof o=="string"&&!d?p.jsx(N,{color:"text.secondary",children:o}):p.jsxs(f.Fragment,{children:[a==="start"?g||(g=p.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})}),K=V;export{K as I,G as P};