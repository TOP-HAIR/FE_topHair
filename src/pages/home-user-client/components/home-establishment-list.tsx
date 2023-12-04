import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import CardEstablishment from "./card-establishment";
import { getEmpresaEstadoContext } from "../../../shared/contexts/empresaContext";
import NotFoundClientComponent from "../../../components/NotFound";
import LoaderResponse from "../../../components/loaderResponse";

export default function ClientHomeEstablishmentList() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [empresas, setEmpresas] = useState<any[]>([]);

  useEffect(() => {
    async function listarEmpresa() {
      setloadResponse(false);
      try {
        const res = await getEmpresaEstadoContext();
        if (res == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setEmpresas(res.data);
        }
        console.log(res);
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarEmpresa();
  }, []);
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full">
          <div className="grid-home-width w-full flex justify-between">
            <Breadcrumbs className="px-4 pt-24 pb-4" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/client">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/client/home">
                Página Inicial
              </Link>
              <Typography color="text.primary">Estabelecimentos</Typography>
            </Breadcrumbs>
            <Button className="color-primary-cyan" variant="outlined"></Button>
          </div>
        </div>
        <section className="flex justify-center">
          <div className="mb-4 grid-home-width w-full flex flex-col gap-4">
            <div className="bg-gray-800 h-20 w-full rounded linear-gradient-client flex items-center justify-center">
              <h1 className="text-4xl text-white font-medium">Barbearias</h1>
            </div>
            {!loadResponse ? (
              <LoaderResponse />
            ) : resLenghtValid ? (
              <NotFoundClientComponent />
            ) : (
              <div>
                {empresas.map((empresa) => (
                  <div key={empresa.idEmpresa} className="w-full">
                    <CardEstablishment empresa={empresa} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
