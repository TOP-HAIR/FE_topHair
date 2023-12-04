import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import CardEstablishment from "./card-establishment";
import { getEmpresaEstadoContext } from "../../../shared/contexts/empresaContext";
import NotFoundClientComponent from "../../../components/NotFound";
import LoaderResponse from "../../../components/loaderResponse";
import { useParams } from "react-router-dom";
import { getEmpresaEstadoFiltroContext } from "../../../shared/contexts/serviceContext";

export default function ClientHomeEstablishmentList() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [empresas, setEmpresas] = useState<any[]>([]);
  const { filtro } = useParams();

  useEffect(() => {
    async function listarEmpresa() {
      setloadResponse(false);
      try {
        const res = await getEmpresaEstadoContext();
        console.log(res);
        if (res == undefined || res.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setEmpresas(res);
        }
        console.log(res);
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    async function listarFiltroEmpresa() {
      setloadResponse(false);
      try {
        setEmpresas([]);
        if (filtro) {
          const res = await getEmpresaEstadoFiltroContext(filtro);
          if (res == undefined || res.length == 0) {
            setResLenghtValid(true);
          }
          if (res != undefined) {
            setEmpresas(res);
          }
          console.log(res);
          setloadResponse(true);
        }
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }
    if (filtro) {
      listarFiltroEmpresa();
    } else {
      listarEmpresa();
    }
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center">
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
              <div className="flex flex-col gap-4 pb-20">
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
