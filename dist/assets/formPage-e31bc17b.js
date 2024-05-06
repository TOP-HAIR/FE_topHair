import{ai as D,R as w,r as b,j as e,D as p,Y as R,ae as E,af as N,ag as y,ah as S,aj as q,z,M as A,X as I,V as $,E as C}from"./index-60b90a62.js";import{a as F,I as P,d as T,b as k,T as L,c as M,R as V}from"./authContext-da2df242.js";import{I as B}from"./IconButton-7837f09d.js";import{v as H}from"./validateInput-9a108550.js";import{B as J}from"./Box-b0006547.js";const Z=D({palette:{mode:"dark"}});function _({register:t,errors:a,getValues:s}){var c,v,f,n,o;const[l,m]=w.useState(!1),[x,g]=w.useState(!1),u=b.useRef(null),i=b.useRef(null),j=d=>{if(d==1&&(m(r=>!r),u.current)){const r=u.current.value.length;setTimeout(()=>{u.current&&(u.current.selectionStart=r,u.current.selectionEnd=r)},0)}if(d==2&&(g(r=>!r),i.current)){const r=i.current.value.length;setTimeout(()=>{i.current&&(i.current.selectionStart=r,i.current.selectionEnd=r)},0)}},h=d=>{d.preventDefault()};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full flex flex-col gap-2",children:e.jsx("div",{className:"w-full flex gap-8 flex-col p-4",children:e.jsxs(F,{theme:Z,children:[e.jsx(p,{label:"Empresa",variant:"standard",size:"medium",type:"text",...t("empresa",{required:"Este campo é obrigatório"}),placeholder:"Digite o nome da empresa",error:!!a.empresa,helperText:(c=a.empresa)==null?void 0:c.message}),e.jsx(p,{label:"Email",variant:"standard",size:"medium",type:"text",...t("email",{required:"Este campo é obrigatório"}),placeholder:"Digite seu Email",error:!!a.email,helperText:(v=a.email)==null?void 0:v.message}),e.jsx(R,{mask:"99.999.999/9999-99",maskPlaceholder:"",defaultValue:"",...t("cnpj",{required:"Este campo é obrigatório",pattern:{value:/\d/,message:"Deve conter pelo menos um número"}}),children:d=>{var r;return e.jsx(p,{...d,label:"CNPJ",variant:"standard",size:"medium",type:"text",placeholder:"Digite seu CNPJ",error:!!a.cnpj,helperText:(r=a.cnpj)==null?void 0:r.message})}}),e.jsxs(E,{variant:"standard",children:[e.jsx(N,{htmlFor:"standard-adornment-password",children:"Password"}),e.jsx(y,{type:l?"text":"password",inputRef:u,placeholder:"Digite sua Senha",endAdornment:e.jsx(P,{position:"end",children:e.jsx(B,{"aria-label":"toggle password visibility",onClick:()=>j(1),onMouseDown:h,children:l?e.jsx(T,{}):e.jsx(k,{})})}),...t("senha",{required:"Este campo é obrigatório",pattern:{value:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]*$/,message:"Deve conter pelo menos uma letra, um número e um caractere especial"}}),error:!!a.senha}),a.senha&&e.jsx(S,{className:"text-red-500",children:(f=a.senha)==null?void 0:f.message})]}),e.jsxs(E,{variant:"standard",children:[e.jsx(N,{htmlFor:"standard-adornment-password",children:"Confirme sua Senha:"}),e.jsx(y,{type:x?"text":"password",inputRef:i,placeholder:"Repita sua Senha",endAdornment:e.jsx(P,{position:"end",children:e.jsx(B,{"aria-label":"toggle password visibility",onClick:()=>j(2),onMouseDown:h,children:x?e.jsx(T,{}):e.jsx(k,{})})}),...t("senhaConfirmacao",{required:"Este campo é obrigatório",validate:d=>d===s("senha")||"As senhas não coincidem"}),error:!!a.senhaConfirmacao,helperText:(n=a.senhaConfirmacao)==null?void 0:n.message}),a.senhaConfirmacao&&e.jsx(S,{className:"text-red-500",children:(o=a.senhaConfirmacao)==null?void 0:o.message})]})]})})})})}const O={production:!1,api:{viaCepApi:"https://viacep.com.br/ws"}},X=t=>q.get(`${O.api.viaCepApi}/${t}/json`),Y=D({palette:{mode:"dark"}});function G({register:t,setValue:a,errors:s}){var j,h,c,v,f,n;const[l,m]=w.useState(""),[x,g]=w.useState(""),u=b.useCallback(o=>{a("bairro",o.bairro),a("localidade",o.localidade),a("uf",o.uf),a("logradouro",o.logradouro)},[t]),i=async()=>{try{const o=await X(l);u(o.data),console.log(o.data)}catch(o){console.error("Erro ao buscar CEP:",o),g("Erro ao buscar CEP:")}};return b.useEffect(()=>{l&&a("cep",l)},[l]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full flex flex-col gap-2",children:e.jsx("div",{className:"w-full flex gap-8 flex-col p-4",children:e.jsxs(F,{theme:Y,children:[e.jsx(p,{label:"CEP",variant:"standard",size:"medium",type:"text",placeholder:"Digite o CEP",...t("cep",{required:"Este campo é obrigatório",maxLength:{value:9},minLength:{value:8,message:"CEP deve ter pelo menos 5 caracteres"}}),onChange:o=>{const d=o.target.value;m(d),H(d)?g(""):g("Formato de CEP inválido")},onBlur:()=>i(),error:!!s.cep,helperText:(j=s.cep)==null?void 0:j.message}),e.jsx(p,{label:"Logradouro",variant:"standard",size:"medium",type:"text",...t("logradouro",{required:"Este campo é obrigatório"}),error:!!s.logradouro,helperText:(h=s.logradouro)==null?void 0:h.message,focused:!0}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(p,{className:"w-3/4",label:"Bairro",variant:"standard",size:"medium",type:"text",...t("bairro",{required:"Este campo é obrigatório"}),error:!!s.bairro,helperText:(c=s.bairro)==null?void 0:c.message,focused:!0}),e.jsx(p,{className:"w-1/4",label:"Nº:",variant:"standard",size:"medium",type:"number",...t("numero",{required:"Este campo é obrigatório",pattern:{value:/\d/,message:"Deve conter pelo menos um número"}}),error:!!s.numero,helperText:(v=s.numero)==null?void 0:v.message,placeholder:"Número"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(p,{className:"w-2/4",label:"Estado",variant:"standard",size:"medium",type:"text",...t("uf",{required:"Este campo é obrigatório"}),focused:!0,error:!!s.uf,helperText:(f=s.uf)==null?void 0:f.message}),e.jsx(p,{className:"w-2/4",label:"Cidade",variant:"standard",size:"medium",type:"text",...t("localidade",{required:"Este campo é obrigatório"}),error:!!s.localidade,helperText:(n=s.localidade)==null?void 0:n.message,focused:!0})]}),e.jsx(p,{label:"Complemento (Opcional)",variant:"standard",size:"medium",type:"text",...t("complemento"),placeholder:"Digite o complemento"})]})})})})}function K(t){const[a,s]=b.useState(0);function l(m,x){x&&x.preventDefault(),!(m<0||m>=t.length)&&s(m)}return{currentStep:a,currentComponent:t[a],changeStep:l}}function te(){const{handleSubmit:t,register:a,setValue:s,getValues:l,formState:{errors:m},trigger:x}=z();localStorage.clear(),sessionStorage.clear();const g=n=>{n&&x().then(()=>{t(i)()})},u=[e.jsx(_,{register:a,getValues:l,errors:m}),e.jsx(G,{register:a,setValue:s,errors:m}),e.jsx(V,{updateValidRecaptcha:g})],i=n=>{M(n).then(o=>{console.log(o)}),console.log("Form data submitted:",n)},{currentComponent:j,changeStep:h,currentStep:c}=K(u),v=A(),f=async n=>{await x()&&h(c+1,n)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen w-full flex justify-center items-center ",children:e.jsx(J,{className:"my-5 px-4 py-3 form-modal bg-primary-dark-cyan rounded-lg flex justify-between items-center flex-col gap-4",children:e.jsxs("form",{className:"w-full h-full",onSubmit:t(i),children:[e.jsx(I,{onClick:()=>$(v,"/"),underline:"hover",className:"cursor-pointer",children:"Voltar para o site"}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("img",{className:"min-h-40 min-w-40 max-h-48 max-w-48",src:L,alt:"tophair-icon"})}),j,e.jsxs("div",{className:"px-4 w-full flex flex-col gap-8",children:[e.jsxs("div",{className:"w-full gap-6 flex columns-2",children:[e.jsx("div",{className:"w-1/2",children:c===1&&e.jsx(C,{variant:"contained",className:"w-full button-login bg-primary-aqua rounded-sm",onClick:n=>h(c-1,n),children:"Voltar"})}),c===0&&e.jsx(C,{variant:"contained",className:"w-1/2 button-login bg-primary-aqua rounded-sm",onClick:f,children:"Próximo"}),c===1&&e.jsx(C,{variant:"contained",className:"w-1/2 button-login bg-primary-aqua rounded-sm",onClick:f,children:"Cadastrar"})]}),e.jsx("p",{className:"text-center text-white text-xs",children:"Copyright © made by Top Hair"})]})]})})})})}export{te as default};