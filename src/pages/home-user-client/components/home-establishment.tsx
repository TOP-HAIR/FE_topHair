import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderResponse from "../../../components/loaderResponse";
import {
  getAvaliacoesEmpresaByIdContext,
  getEmpresaByIdContext,
} from "../../../shared/contexts/empresaContext";
import { Breadcrumbs, Typography, Link, Divider, Button } from "@mui/material";
import MapBoxComponent from "../../../components/mapbox";
import { getListaClientContext } from "../../../shared/contexts/serviceContext";
import { Service } from "../../../shared/entity/serviceEntity";
import { PopupButton } from "react-calendly";
import { Avaliacao } from "../../../shared/entity/empresaEntity";
import CardComments from "./card-comments";

export default function ClientHomeEstablishment() {
  const [loadResponse, setloadResponse] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const { idEmpresa } = useParams();

  useEffect(() => {
    async function buscarEmpresaById() {
      if (idEmpresa != undefined && idEmpresa != null) {
        setloadResponse(false);
        try {
          const res = await getEmpresaByIdContext(idEmpresa);
          console.log(res);
          setloadResponse(true);
        } catch (error) {
          console.error("Erro ao buscar serviços:", error);
        }
      }
    }
    buscarEmpresaById();

    async function listarServicos() {
      setloadResponse(false);
      try {
        const res = await getListaClientContext(idEmpresa);
        if (res != undefined) {
          setServices(res.data);
        }
        console.log(res);
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarServicos();

    async function listarAvaliacoes() {
      setloadResponse(false);
      try {
        if (idEmpresa != undefined && idEmpresa != null) {
          const res = await getAvaliacoesEmpresaByIdContext(idEmpresa);
          if (res != undefined) {
            setAvaliacoes(res.data);
          }
          console.log(res.data);
          setloadResponse(true);
        }
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarAvaliacoes();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex justify-center">
          <div className="grid-home-width w-full">
            <Breadcrumbs className="px-4 pt-24 pb-4" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/client">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/client/home">
                Página Inicial
              </Link>
              <Link underline="hover" color="inherit" href="/client/list">
                Estabelecimentos
              </Link>
              <Typography color="text.primary">Empresa</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <section className="px-4 flex justify-center">
          <div className="mb-4 grid-home-width w-full flex flex-col gap-4">
            <div className="bg-gray-800 h-12 w-full rounded linear-gradient-client flex items-center justify-center">
              <h1 className="text-2xl text-white font-medium">Nome Empresa</h1>
            </div>
            <div className="card-service h-64 flex cursor-pointer rounded">
              <div className="w-1/5 flex items-center justify-center">
                <div className="h-28 w-28 bg-black rounded-full"></div>
              </div>
              <div className="w-4/5 bg-black"></div>
            </div>
          </div>
        </section>
        <section className="px-4 flex justify-center">
          <div className="mb-4 grid-home-width w-full flex gap-4">
            <div className="card-service w-1/5 flex items-center justify-center rounded">
              <MapBoxComponent></MapBoxComponent>
            </div>
            <div className="card-service w-4/5 p-4 min-h-[36rem]">
              <h2 className="text-2xl font-medium text-center">Serviços</h2>
              <div className="py-4">
                <Divider className="bg-gray-300" />
              </div>
              <div className="rounded grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div
                    key={service.idServico}
                    className="bg-white w-full grid rounded card-service p-4 relative grow cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
                  >
                    <div className="min-h-16">
                      <div className="flex flex-col">
                        <h3 className="text-2xl">{service?.nomeServico}</h3>
                        <Divider className="bg-gray-300 my-2" />
                        <p className="text-xl">R$ {service?.preco}.00</p>
                        <p className="text-base">{service?.descricao}.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-4">
                <Divider className="bg-gray-300" />
              </div>
              <div className="w-full flex justify-end">
                <Button className="w-40" variant="outlined">
                  <PopupButton
                    url="https://calendly.com/grupo5adsa"
                    rootElement={document.getElementById("root")}
                    text="Agendar"
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 flex justify-center p-10">
          <div className="grid-home-width w-full">
            <h2 className="text-3xl font-bold">Comentários</h2>
            <hr className="h-0.5 bg-gray-500" />
            <div className="flex flex-col gap-6 my-8">
              {avaliacoes.map((avaliacao) => (
                <div key={avaliacao.idAvaliacao} className="w-full">
                  <CardComments avaliacao={avaliacao} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
