import{g as j,i as p,j as e,r as t,C as v,L as g,N as f,T as b,P as R,a as S,b as C,c as h,d as s,e as N,h as T}from"./index-8c46529e.js";import{a as V}from"./agendaContext-7dff1fb6.js";import{c}from"./validateInput-9464ed6a.js";var l={},I=p;Object.defineProperty(l,"__esModule",{value:!0});var r=l.default=void 0,_=I(j()),E=e,F=(0,_.default)((0,E.jsx)("path",{d:"M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6zm-4-6v4h2v-4h-2zm-4 4h2V9h-2v8zm-2 0v-6H7v6h2z"}),"Addchart");r=l.default=F;function w(){const[m,i]=t.useState(!1),[x,o]=t.useState(!1),[d,u]=t.useState([]);return t.useEffect(()=>{async function a(){i(!1);try{const n=await V();u(n.data),console.log(n),(n.data==null||n.data.length==0)&&o(!0),i(!0)}catch(n){console.error("Erro ao buscar relatórios:",n)}}a()},[]),e.jsx(e.Fragment,{children:e.jsxs(v,{className:"m-5",children:[e.jsx("h2",{className:"m-6 text-2xl font-bold",children:"Relatório do Estabelecimento"}),e.jsx("div",{className:"m-6",children:m?x?e.jsx(f,{}):e.jsx(b,{className:"shadow-table",component:R,children:e.jsxs(S,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(C,{children:e.jsxs(h,{className:"font-bold",children:[e.jsx(s,{align:"center",children:"Data Inicio"}),e.jsx(s,{align:"center",children:"Data Final"}),e.jsx(s,{align:"center",children:"Faturamento"}),e.jsx(s,{align:"center",children:"Status"})]})}),e.jsx(N,{children:d==null?void 0:d.filter(a=>a!=null).map(a=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0},marginBottom:100},children:[e.jsx(s,{align:"center",component:"th",scope:"row",children:c(a==null?void 0:a.dataInicio.toString())}),e.jsx(s,{align:"center",children:c(a==null?void 0:a.dataFinal.toString())}),e.jsxs(s,{align:"center",children:["R$ ",a==null?void 0:a.precoTotal]}),e.jsx(s,{align:"center",children:e.jsx(T,{to:`/establishment/reports/dashboard?dataInicio=${c(a==null?void 0:a.dataInicio.toString())}&dataFim=${c(a==null?void 0:a.dataFinal.toString())}`,underline:"hover",className:"cursor-pointer",children:e.jsx(r,{})})})]},a==null?void 0:a.dataInicio))})]})}):e.jsx(g,{})})]})})}export{w as default};