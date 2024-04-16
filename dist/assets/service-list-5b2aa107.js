import{j as e,x as j,y as S,r as t,z as N,D as E,C as b,B as d,E as C,G as w,L as y,N as k,J as B,K as L,Q as R,U as a}from"./index-de52eb67.js";function D({service:o,onDelete:i,linkEdit:c}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("h3",{className:"font-bold",children:["Serviço: ",o.nomeServico]}),e.jsxs("p",{children:[e.jsx("b",{children:"Tipo: "}),o.categoria]}),e.jsxs("p",{children:[e.jsx("b",{children:"Valor: "}),o.preco]}),e.jsxs("p",{children:[e.jsx("b",{children:"Descrição: "}),o.descricao]})]}),e.jsxs("div",{className:"absolute top-3 right-3 gap-2 flex ",children:[e.jsx(j,{className:"cursor-pointer",onClick:c}),e.jsx(S,{className:"cursor-pointer",onClick:i})]})]})}function V(){const[o,i]=t.useState([]),[c,l]=t.useState(!1),[x,u]=t.useState(!1),v=N(),f=new E,m=async s=>{B(v,`/establishment/service/edit/${s}`)};t.useEffect(()=>{async function s(){l(!1);try{const r=await L();(r==null||r.data.length==0)&&u(!0),r!=null&&i(r.data),console.log(r),l(!0)}catch(r){console.error("Erro ao buscar serviços:",r)}}s()},[]);const p=async()=>{try{await R(),a.fire("Sucesso!","Arquivo Exportado com sucesso!!!","success")}catch(s){a.fire("Errp!","Erro ao exportar arquivo!!!","error"),console.error("Erro ao buscar funcionários",s)}},h=s=>{a.fire({title:"Tem certeza que deseja deletar esse serviço?",text:"Você não será capaz de reverter essa ação!",icon:"warning",showCancelButton:!0,confirmButtonText:"Deletar!",cancelButtonText:"Cancelar",reverseButtons:!1,width:450}).then(async r=>{if(r.isConfirmed)try{await f.deleteService(s);const n=o.filter(g=>g.idServico!==s);i(n),a.fire("Sucesso","Serviço excluído com sucesso.","success")}catch(n){console.error("Erro ao excluir o serviço:",n),a.fire("Erro","Erro ao excluir o serviço.","error")}else r.dismiss===a.DismissReason.cancel&&a.fire("Cancelled","Seu serviço está seguro :)","error")})};return e.jsx(e.Fragment,{children:e.jsxs(b,{className:"m-5 p-6 h-full",children:[e.jsxs("div",{className:"flex justify-between flex-wrap",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Serviços do Estabelecimento"}),e.jsxs("div",{className:"flex flex-wrap gap-4 md:px-6 sm:px-6",children:[e.jsxs(d,{className:"border-lime-700 color-primary-cyan",variant:"outlined",onClick:()=>{p()},children:[e.jsx(C,{})," Exportar .csv"]}),e.jsx(w,{to:"/establishment/service/edit",children:e.jsx(d,{className:"bg-terciary-light-green",variant:"contained",children:"+ Adicionar Serviço"})})]})]}),c?x?e.jsx(k,{}):e.jsx("div",{className:"my-8 grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8",children:o.map(s=>e.jsx("div",{className:"bg-white w-full grid rounded card-service p-4 relative grow cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95",children:e.jsx(D,{service:s,onDelete:()=>h(s.idServico),linkEdit:()=>m(s.idServico)})},s.idServico))}):e.jsx(y,{})]})})}export{V as default};