import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import FiltroCabeloImg from "../../../assets/configs/img/Rectangle 472.png";
import FiltroBarbaImg from "../../../assets/configs/img/Rectangle 473.png";
import FiltroTinturaImg from "../../../assets/configs/img/Rectangle 474.png";
import { Breadcrumbs, Button, Link, Rating, Typography } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { getTop5EmpresasContext } from "../../../shared/contexts/empresaContext";
import MapBoxComponent from "../../../components/mapbox";
import bannerClient from "../../../assets/configs/img/banner-client.png";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import { useNavigate } from "react-router-dom";

export default function ClientHomePage() {
  const [loadResponse, setloadResponse] = useState(false);
  const [empresaAvaliacao, setEmpresaAvaliacao] = useState<any[]>([]);
  const navigate = useNavigate();

  const linkNavigate = async (path: string) => {
    navigateToPage(navigate, path);
  };

  useEffect(() => {
    async function listarTop5Avaliacoes() {
      setloadResponse(false);
      try {
        const res = await getTop5EmpresasContext();
        console.log(res);
        setEmpresaAvaliacao(res);
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar top 5 empresas:", error);
      }
    }

    listarTop5Avaliacoes();
  }, []);

  return (
    <>
      <div className="px-4 w-full flex justify-center">
        <div className="grid-home-width w-full">
          <Breadcrumbs className="px-4 pt-24 pb-4" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/client-page">
              Home
            </Link>
            <Typography color="text.primary">Página Inicial</Typography>
          </Breadcrumbs>
        </div>
      </div>

      <section className="linear-gradient-client w-full flex justify-center image-banner-client">
        <div className="grid-home-width w-full flex justify-between px-20 items-center">
          <div className="h-72 w-96 bg-white p-5 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold">
              Ache o lugar que mais se adeque a você!!!
            </h3>
            <p className="text-medium font-family-dm-sans font-light">
              "Na barbearia certa, estilo e inspiração se entrelaçam,
              transformando cada visita em uma experiência autêntica e única."
            </p>
            <Button
              className="text-white px-8 py-3 text-sm bg-primary-cyan w-full"
              onClick={() => {
                linkNavigate("/client/list");
              }}
            >
              Procurar
            </Button>
          </div>
          <img
            className="max-h-96 h-96"
            src={bannerClient}
            alt="Homem com braços cruzados"
          />
        </div>
      </section>
      <section className="px-4 flex justify-center mt-10 py-15">
        <div className="grid-home-width w-full">
          <h2 className="text-3xl font-bold">
            Estabelecimentos mais Avaliados
          </h2>
          <hr className="h-0.5 bg-gray-500" />
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            slidesPerView={3}
          >
            {empresaAvaliacao?.map((valor) => (
              <SwiperSlide className="mx-5">
                <div
                  key={valor?.idEmpresa}
                  className="my-8 p-2 flex flex-col items-center justify-center gap-2 card-service cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
                  onClick={() => {
                    linkNavigate(`/client/establishment/${valor?.idEmpresa}`);
                  }}
                >
                  <h3 className="font-bold drop-shadow-2xl text-lg">
                    {valor.razaoSocial}
                  </h3>
                  <img className="h-20 w-20 bg-black rounded-full" />
                  <Rating name="read-only" value={4} readOnly />
                  <p className="text-black text-center font-normal font-family-dm-sans text-base p-3">
                    {valor.endereco?.logradouro}, {valor.endereco?.numero} -
                    {valor.endereco?.bairro}, {valor.endereco?.cidade} -{" "}
                    {valor.endereco?.estado}, {valor.endereco?.cep}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="px-4 flex justify-center p-10">
        <div className="grid-home-width w-full">
          <h2 className="text-3xl font-bold">Explore por Categorias</h2>
          <hr className="h-0.5 bg-gray-500" />
          <div className="w-full flex justify-center gap-8 py-10">
            <div
              className="relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                linkNavigate(`/client/list/cabelo`);
              }}
            >
              <img src={FiltroCabeloImg} alt="Imagem para Filtro por Cabelo" />
              <h3 className="text-2xl font-family-dm-sans font-medium absolute text-white bottom-8 left-24 ">
                Cabelo
              </h3>
            </div>
            <div
              className="relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                linkNavigate(`/client/list/barba`);
              }}
            >
              <img src={FiltroBarbaImg} alt="Imagem para Filtro por Barba" />
              <h3 className="text-2xl font-family-dm-sans font-medium absolute text-white bottom-8 left-24 ">
                Barba
              </h3>
            </div>
            <div
              className="relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                linkNavigate(`/client/list/tintura`);
              }}
            >
              <img
                src={FiltroTinturaImg}
                alt="Imagem para Filtro por Tintura"
              />
              <h3 className="text-2xl font-family-dm-sans font-medium absolute text-white bottom-8 left-24 ">
                Tintura
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 flex justify-center p-10">
        <div className="grid-home-width w-full">
          <h2 className="text-3xl font-bold">Veja no Mapa</h2>
          <hr className="h-0.5 bg-gray-500" />
        </div>
      </section>
      <section className="w-full h-96 pb-8">
        <MapBoxComponent></MapBoxComponent>
      </section>
    </>
  );
}
