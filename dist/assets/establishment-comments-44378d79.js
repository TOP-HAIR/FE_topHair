var Re=Object.defineProperty;var je=(e,o,n)=>o in e?Re(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var oe=(e,o,n)=>(je(e,typeof o!="symbol"?o+"":o,n),n);import{n as ie,j as s,o as Se,p as Ve,l as D,q as ae,k as r,af as we,r as p,m as Ae,h as le,E as re,V as Ee,D as Le,ag as Me,v as Ne,w as _,x as He,A as ze,s as se,C as Ie,L as Oe,N as $e}from"./index-6eff42d1.js";const Te={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Pe=Te,Be=ie(s.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Ue=ie(s.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function ke(e){return Ve("MuiRating",e)}const _e=Se("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),I=_e,De=["value"],We=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Xe(e,o,n){return e<o?o:e>n?n:e}function Ge(e){const o=e.toString().split(".")[1];return o?o.length:0}function Y(e,o){if(e==null)return e;const n=Math.round(e/o)*o;return Number(n.toFixed(Ge(o)))}const qe=e=>{const{classes:o,size:n,readOnly:m,disabled:x,emptyValueFocused:v,focusVisible:c}=e,a={root:["root",`size${ae(n)}`,x&&"disabled",c&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[v&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return He(a,ke,o)},Je=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${I.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${ae(n.size)}`],n.readOnly&&o.readOnly]}})(({theme:e,ownerState:o})=>r({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${I.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${I.focusVisible} .${I.iconActive}`]:{outline:"1px solid #999"},[`& .${I.visuallyHidden}`]:Pe},o.size==="small"&&{fontSize:e.typography.pxToRem(18)},o.size==="large"&&{fontSize:e.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})),ce=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},o)=>[o.label,e.emptyValueFocused&&o.labelEmptyValueActive]})(({ownerState:e})=>r({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Ye=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.icon,n.iconEmpty&&o.iconEmpty,n.iconFilled&&o.iconFilled,n.iconHover&&o.iconHover,n.iconFocus&&o.iconFocus,n.iconActive&&o.iconActive]}})(({theme:e,ownerState:o})=>r({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Ke=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>we(e)&&e!=="iconActive",overridesResolver:(e,o)=>{const{iconActive:n}=e;return[o.decimal,n&&o.iconActive]}})(({iconActive:e})=>r({position:"relative"},e&&{transform:"scale(1.2)"}));function Qe(e){const o=le(e,De);return s.jsx("span",r({},o))}function ne(e){const{classes:o,disabled:n,emptyIcon:m,focus:x,getLabelText:v,highlightSelectedOnly:c,hover:a,icon:O,IconContainerComponent:L,isActive:$,itemValue:u,labelProps:M,name:F,onBlur:W,onChange:R,onClick:j,onFocus:T,readOnly:P,ownerState:l,ratingValue:f,ratingValueRounded:X}=e,S=c?u===f:u<=f,B=u<=a,V=u<=x,G=u===X,N=re(),b=s.jsx(Ye,{as:L,value:u,className:_(o.icon,S?o.iconFilled:o.iconEmpty,B&&o.iconHover,V&&o.iconFocus,$&&o.iconActive),ownerState:r({},l,{iconEmpty:!S,iconFilled:S,iconHover:B,iconFocus:V,iconActive:$}),children:m&&!S?m:O});return P?s.jsx("span",r({},M,{children:b})):s.jsxs(p.Fragment,{children:[s.jsxs(ce,r({ownerState:r({},l,{emptyValueFocused:void 0}),htmlFor:N},M,{children:[b,s.jsx("span",{className:o.visuallyHidden,children:v(u)})]})),s.jsx("input",{className:o.visuallyHidden,onFocus:T,onBlur:W,onChange:R,onClick:j,disabled:n,value:u,id:N,type:"radio",name:F,checked:G})]})}const Ze=s.jsx(Be,{fontSize:"inherit"}),eo=s.jsx(Ue,{fontSize:"inherit"});function oo(e){return`${e} Star${e!==1?"s":""}`}const so=p.forwardRef(function(o,n){const m=Ae({name:"MuiRating",props:o}),{className:x,defaultValue:v=null,disabled:c=!1,emptyIcon:a=eo,emptyLabelText:O="Empty",getLabelText:L=oo,highlightSelectedOnly:$=!1,icon:u=Ze,IconContainerComponent:M=Qe,max:F=5,name:W,onChange:R,onChangeActive:j,onMouseLeave:T,onMouseMove:P,precision:l=1,readOnly:f=!1,size:X="medium",value:S}=m,B=le(m,We),V=re(W),[G,N]=Ee({controlled:S,default:v,name:"Rating"}),b=Y(G,l),de=Le(),[{hover:h,focus:U},H]=p.useState({hover:-1,focus:-1});let w=b;h!==-1&&(w=h),U!==-1&&(w=U);const{isFocusVisibleRef:K,onBlur:me,onFocus:pe,ref:fe}=Me(),[he,q]=p.useState(!1),Q=p.useRef(),ge=Ne(fe,Q,n),ve=t=>{P&&P(t);const i=Q.current,{right:d,left:k,width:A}=i.getBoundingClientRect();let E;de.direction==="rtl"?E=(d-t.clientX)/A:E=(t.clientX-k)/A;let g=Y(F*E+l/2,l);g=Xe(g,l,F),H(C=>C.hover===g&&C.focus===g?C:{hover:g,focus:g}),q(!1),j&&h!==g&&j(t,g)},ye=t=>{T&&T(t);const i=-1;H({hover:i,focus:i}),j&&h!==i&&j(t,i)},Z=t=>{let i=t.target.value===""?null:parseFloat(t.target.value);h!==-1&&(i=h),N(i),R&&R(t,i)},xe=t=>{t.clientX===0&&t.clientY===0||(H({hover:-1,focus:-1}),N(null),R&&parseFloat(t.target.value)===b&&R(t,null))},be=t=>{pe(t),K.current===!0&&q(!0);const i=parseFloat(t.target.value);H(d=>({hover:d.hover,focus:i}))},Ce=t=>{if(h!==-1)return;me(t),K.current===!1&&q(!1);const i=-1;H(d=>({hover:d.hover,focus:i}))},[Fe,ee]=p.useState(!1),z=r({},m,{defaultValue:v,disabled:c,emptyIcon:a,emptyLabelText:O,emptyValueFocused:Fe,focusVisible:he,getLabelText:L,icon:u,IconContainerComponent:M,max:F,precision:l,readOnly:f,size:X}),y=qe(z);return s.jsxs(Je,r({ref:ge,onMouseMove:ve,onMouseLeave:ye,className:_(y.root,x,f&&"MuiRating-readOnly"),ownerState:z,role:f?"img":null,"aria-label":f?L(w):null},B,{children:[Array.from(new Array(F)).map((t,i)=>{const d=i+1,k={classes:y,disabled:c,emptyIcon:a,focus:U,getLabelText:L,highlightSelectedOnly:$,hover:h,icon:u,IconContainerComponent:M,name:V,onBlur:Ce,onChange:Z,onClick:xe,onFocus:be,ratingValue:w,ratingValueRounded:b,readOnly:f,ownerState:z},A=d===Math.ceil(w)&&(h!==-1||U!==-1);if(l<1){const E=Array.from(new Array(1/l));return s.jsx(Ke,{className:_(y.decimal,A&&y.iconActive),ownerState:z,iconActive:A,children:E.map((g,C)=>{const J=Y(d-1+(C+1)*l,l);return s.jsx(ne,r({},k,{isActive:!1,itemValue:J,labelProps:{style:E.length-1===C?{}:{width:J===w?`${(C+1)*l*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),J)})},d)}return s.jsx(ne,r({},k,{isActive:A,itemValue:d}),d)}),!f&&!c&&s.jsxs(ce,{className:_(y.label,y.labelEmptyValue),ownerState:z,children:[s.jsx("input",{className:y.visuallyHidden,value:"",id:`${V}-empty`,type:"radio",name:V,checked:b==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),s.jsx("span",{className:y.visuallyHidden,children:O})]})]}))}),no=so;function to({comment:e}){var o;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx("img",{className:"rounded-full h-12 w-12",src:e.imagem,alt:"Imagem Perfil Usuário"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-lg ",children:(o=e==null?void 0:e.usuario)==null?void 0:o.nomeCompleto}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(no,{name:"read-only",value:e==null?void 0:e.nivel,readOnly:!0}),s.jsx("p",{className:"font-extralight",children:e==null?void 0:e.nivel})]})]})]}),s.jsx("p",{className:" font-family-dm-sans",children:e.comentario})]})}class io extends ze{constructor(){super();oe(this,"commentUrl");this.commentUrl="/avaliacoes"}async getUltimosAgendamentos(){const n=this.commentUrl;return await se("GET",n+"/empresa/")}async getComments(){const n=this.commentUrl;return await se("GET",n+`/empresa/${this.idEmpresa}`)}}const ue=new io,te=sessionStorage.getItem("dataEmpresa");if(te!==null){const o=JSON.parse(te).idEmpresa;ue.idEmpresa=o}const ao=async()=>await ue.getComments();function co(){const[e,o]=p.useState(!1),[n,m]=p.useState(!1),[x,v]=p.useState([]);return p.useEffect(()=>{async function c(){o(!1);try{const a=await ao();console.log(a),(a==null||a.data.length==0)&&m(!0),a!=null&&v(a.data),o(!0)}catch(a){console.error("Erro ao buscar serviços:",a)}}c()},[]),s.jsx(s.Fragment,{children:s.jsx("section",{className:"w-full h-full",children:s.jsxs(Ie,{className:"h-full m-5",children:[s.jsx("h2",{className:"m-6 text-2xl font-bold",children:"Comentários"}),e?n?s.jsx($e,{}):s.jsx("div",{className:"m-6 grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8",children:x.map(c=>s.jsx("div",{className:"w-full grid rounded card-service p-4 relative gap-4 grow",children:s.jsx(to,{comment:c})},c.idAvaliacao))}):s.jsx(Oe,{})]})})})}export{co as default};