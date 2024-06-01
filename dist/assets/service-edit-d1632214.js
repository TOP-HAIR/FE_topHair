import{o as E,r as j,u as y,v as z,j as e,C as k,w as V,t as x,L as D,k as d,I as F,B as C,S as m}from"./index-8c46529e.js";import{b as I,p as O,c as R}from"./serviceContext-e0f7e56c.js";import{i as P,f as L}from"./validateInput-9464ed6a.js";function G(){var S,g,h,b;const u=E(),[T,v]=j.useState(!1),{handleSubmit:w,register:l,setValue:c,formState:{errors:a}}=y(),{idServico:r}=z();j.useEffect(()=>{async function o(){var s,p,f,n,t;if(console.log(r),r!=null&&r!=null){v(!1);try{const i=await I(r),q=(s=i.data)==null?void 0:s.preco.toFixed(2).replace(".",",");c("nomeServico",(p=i.data)==null?void 0:p.nomeServico),c("preco",q),c("categoria",(f=i.data)==null?void 0:f.preco),c("qtdTempoServico",(n=i.data)==null?void 0:n.qtdTempoServico),c("descricao",(t=i.data)==null?void 0:t.descricao),console.log(i),v(!0)}catch(i){v(!0),console.error("Erro ao buscar serviços:",i)}}v(!0)}o()},[]);const N=async o=>{let s=o.qtdTempoServico;r==null&&r==null&&(s+=":00");const p=String(o.preco),f=parseFloat(p.replace(/[^\d.,]/g,"").replace(",",".")),n={categoria:o.categoria,nomeServico:o.nomeServico.trim(),preco:f,descricao:o.descricao.trim(),qtdTempoServico:s};if(r==null&&r==null)try{await O(n),m.fire("Sucess","Sucesso ao criar o serviço.","success"),x(u,-1),console.log(response)}catch(t){console.error("Erro ao criar o serviço:",t),m.fire("Erro","Erro ao criar o serviço.","error")}else if(r!=null&&r!=null)try{await R(n,r),m.fire("Sucess","Sucesso ao atualizar o serviço.","success"),x(u,-1)}catch(t){console.error("Erro ao atualizar o serviço:",t),m.fire("Erro","Erro ao atualizar o serviço.","error")}},B=()=>{m.fire({title:"Tem certeza que deseja cancelar esse serviço?",icon:"warning",showCancelButton:!0,cancelButtonText:"Não",cancelButtonColor:"#dc3545",confirmButtonText:"Sim, Tenho!",confirmButtonColor:"#2f9c7f",reverseButtons:!0,width:450}).then(o=>{o.isConfirmed&&x(u,-1)})};return e.jsx(e.Fragment,{children:e.jsx(k,{className:"h-full m-5 p-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(V,{onClick:()=>x(u,-1),underline:"hover",className:"cursor-pointer",children:"Voltar"}),e.jsxs("form",{className:"max-w-screen-lg text-center flex flex-col gap-12",onSubmit:w(N),children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Serviço"}),T?e.jsxs("div",{className:"w-full flex flex-col gap-8",children:[e.jsxs("div",{className:"w-full flex flex-col gap-12",children:[e.jsx(d,{id:"outlined-basic",label:"Nome",variant:"outlined",className:"",placeholder:"Digite o nome do Serviço",size:"small",...l("nomeServico",{required:"Campo é Obrigatório"}),error:!!a.nomeServico,helperText:(S=a.nomeServico)==null?void 0:S.message}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(F,{mask:"R$ 999,99",maskChar:"0",defaultValue:"",...l("preco",{required:"Campo é Obrigatório"}),children:o=>{var s;return e.jsx(d,{...o,className:"w-1/2",id:"outlined-basic",label:"Valor",variant:"outlined",placeholder:"Digite o valor do Serviço",size:"small",error:!!a.preco,helperText:(s=a.preco)==null?void 0:s.message})}}),e.jsx(d,{className:"w-1/2",id:"outlined-basic",label:"Tempo",variant:"outlined",placeholder:"Digite o tempo do serviço",defaultValue:"00:00:00",size:"small",...l("qtdTempoServico",{required:"Campo é Obrigatório"}),onInput:o=>{P(o),L(o)},error:!!a.qtdTempoServico,helperText:(g=a.qtdTempoServico)==null?void 0:g.message})]}),e.jsx(d,{id:"outlined-basic",label:"Categoria",variant:"outlined",multiline:!0,size:"small",placeholder:"Descreva o Serviço",...l("categoria",{required:"Campo é Obrigatório"}),error:!!a.categoria,helperText:(h=a.categoria)==null?void 0:h.message}),e.jsx(d,{id:"outlined-basic",label:"Descrição",variant:"outlined",multiline:!0,size:"small",rows:8,placeholder:"Descreva o Serviço",...l("descricao",{required:"Campo é Obrigatório"}),error:!!a.descricao,helperText:(b=a.descricao)==null?void 0:b.message})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(C,{className:"w-48",variant:"outlined",onClick:B,children:"Cancelar"}),e.jsx(C,{className:"w-48",variant:"contained",type:"submit",children:"Cadastrar Serviço"})]})]}):e.jsx(D,{})]})]})})})}export{G as default};