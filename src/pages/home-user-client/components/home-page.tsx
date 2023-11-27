import React from "react";
import { Navigation } from "swiper/modules";
import FiltroCabeloImg from "../../../assets/configs/img/Rectangle 472.png";
import FiltroBarbaImg from "../../../assets/configs/img/Rectangle 473.png";
import FiltroTinturaImg from "../../../assets/configs/img/Rectangle 474.png";
import { Breadcrumbs, Link, Rating, Typography } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";

export default function ClientHomePage() {
  return (
    <>
      <div className="px-4 w-full flex justify-center">
        <div className="grid-home-width w-full">
          <Breadcrumbs className="pt-24 pb-4" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
      </div>

      <section className="linear-gradient-client flex justify-center">
        <img className="max-h-96 w-full h-96" src="" alt="" />
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
            {/* {valores.map((valor, index) => ( */}
            <SwiperSlide className="mx-5 min-h-">
              <div className="my-8 p-2 flex flex-col items-center justify-center gap-2 card-service">
                <h3 className="font-bold drop-shadow-2xl text-lg">faitls</h3>
                <img className="h-20 w-20 bg-black rounded-full" />
                <Rating name="read-only" value={4} readOnly />
                <p className="text-black font-normal font-family-dm-sans text-base">
                  awdwad
                </p>
              </div>
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </section>
      <section className="px-4 flex justify-center p-10">
        <div className="grid-home-width w-full">
          <h2 className="text-3xl font-bold">Explore por Categorias</h2>
          <hr className="h-0.5 bg-gray-500" />
          <div className="w-full flex justify-center gap-8 py-10">
            <div className="relative">
              <img src={FiltroCabeloImg} alt="Imagem para Filtro por Cabelo" />
              <h3 className="text-2xl font-family-dm-sans font-medium absolute text-white bottom-8 left-24 ">
                Cabelo
              </h3>
            </div>
            <div className="relative">
              <img src={FiltroBarbaImg} alt="Imagem para Filtro por Barba" />
              <h3 className="text-2xl font-family-dm-sans font-medium absolute text-white bottom-8 left-24 ">
                Barba
              </h3>
            </div>
            <div className="relative">
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
    </>
  );
}
