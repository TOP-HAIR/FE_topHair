import React from "react";

export default function CardEstablishment(empresa: any) {
  return (
    <>
      <div className="w-full">
        <div className="card-service max-h-48 flex cursor-pointer">
          <div className="h-44 w-1/5 bg-black rounded"></div>
          <div className="h-full w-4/5 p-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full h-12 w-12 bg-black"></div>
              <p className="text-xl">{empresa.razaoSocial}</p>
            </div>
            <p className="text-lg">
              {empresa.endereco?.logradouro}, {empresa.endereco?.numero} -
              {empresa.endereco?.bairro}, {empresa.endereco?.cidade} -{" "}
              {empresa.endereco?.estado}, {empresa.endereco?.cep}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
