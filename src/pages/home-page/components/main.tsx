import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import { comments, valores } from "../../../shared/hooks/utils/arrayList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeMain() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative">
        <div className="page-layout-1x relative">
          <div className="grid-home-width mx-auto">
            <div className="page-layout-1x flex items-center mx-8 ">
              <div className="flex flex-col gap-14 h-80 top-0">
                <div className="grid gap-4">
                  <h1 className="text-4xl uppercase font-bold max-w-lg max-sm:text-2xl">
                    Anime seu dia
                    <span className="color-terciary-light-green">
                      {" "}
                      admirando{" "}
                    </span>
                    sua beleza
                  </h1>
                  <p className="font-family-dm-sans text-xl max-sm:text-base">
                    Com Tophair, agende seus compromissos de beleza com
                    facilidade e estilo!
                  </p>
                </div>
                <div className="flex gap-5">
                  <Button
                    className="uppercase bg-primary-aqua w-96 text-md font-semibold"
                    variant="contained"
                    onClick={() => navigateToPage(navigate, "/login")}
                  >
                    Entrar como empresa
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full page-layout-background absolute bottom-0 h-32"></div>
        </div>
        <div
          id="about-us"
          className="w-full flex flex-col grid gap-16 linear-gradient-about-us py-32"
        >
          <div className="grid gap-20 grid-home-width mx-auto">
            <div className="grid gap-16 mx-8 max-md:gap-12">
              <div className="text-center">
                <h2 className="text-3xl text-white font-bold max-sm:text-2xl">
                  Quem somos nós
                </h2>
              </div>
              <div className="grid grid-rows-1 max-md:grid-rows-2 grid-flow-col max-lg:gap-24 gap-48">
                <div className="grid max-md:gap-14 gap-24 text-center max-md:flex max-md:flex-col-reverse">
                  <div className="flex justify-center w-full">
                    <img
                      className="rounded-xl shadow-about-us height-image"
                      src="../../../../src/assets/configs/img/about-us-image-1.png"
                      alt="Homem avaliando corte de cabelo"
                    />
                  </div>

                  <div className="grid gap-8">
                    <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl max-sm:text-lg">
                      Mercado de atuação
                    </h3>
                    <p className="text-white text-xl font-normal font-family-dm-sans max-sm:text-base">
                      O mercado de cuidados pessoais para homens tem vivenciado
                      um ressurgimento notável nos últimos anos, com as
                      barbearias masculinas se destacando como espaços que
                      oferecem não apenas serviços de corte de cabelo e barba,
                      mas também uma experiência única de relaxamento e estilo.
                    </p>
                  </div>
                </div>

                <div className="text-center grid max-md:gap-14 gap-24">
                  <div className="grid gap-8">
                    <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl max-sm:text-lg">
                      Como surgiu a ideia?
                    </h3>
                    <p className="text-white text-xl font-normal drop-shadow-2xl max-sm:text-base">
                      Com o constante avanço da tecnologia e crescente
                      utilização de aplicações para obtenção de serviços,
                      pensamos em desenvolver uma aplicação que possa levar o
                      cliente interessado em mudar o visual, diretamente a uma
                      barbearia. Sem dificuldades
                    </p>
                  </div>
                  <div className="flex justify-center w-full">
                    <img
                      className="rounded-xl shadow-about-us height-image"
                      src="../../../../src/assets/configs/img/about-us-image-2.png"
                      alt="Homem cortando cabelo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-background-about-us sm:p-8 max-sm:py-8">
            <div className="grid-home-width mx-auto text-center flex flex-col gap-8">
              <h2 className="text-2xl font-bold text-white max-sm:text-2xl">
                Valores
              </h2>

              <div className="grid grid-cols-3 gap-7 mx-7 max-sm:hidden">
                {valores.map((valor, index) => (
                  <div key={index} className="flex flex-col text-center gap-3 ">
                    <img
                      className="max-h-20 max-sm:h-12"
                      src={valor.imagem}
                      alt={valor.alt}
                    />
                    <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl max-sm:text-lg">
                      {valor.nome}
                    </h3>
                    <p className="text-white text-xl font-normal font-family-dm-sans max-sm:text-base">
                      {valor.texto}
                    </p>
                  </div>
                ))}
              </div>
              <div className="block sm:hidden w-screen">
                <Swiper navigation={true} loop={true} modules={[Navigation]}>
                  {valores.map((valor, index) => (
                    <SwiperSlide key={index}>
                      <div className="mx-20 flex flex-col gap-5">
                        <img
                          className="max-h-20"
                          src={valor.imagem}
                          alt={valor.alt}
                        />
                        <h3 className="color-terciary-light-green font-bold drop-shadow-2xl text-lg">
                          {valor.nome}
                        </h3>
                        <p className="text-white font-normal font-family-dm-sans text-base">
                          {valor.texto}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div id="our-project" className="py-32 grid-home-width mx-auto">
          <div className="mx-8 grid gap-44">
            <div className="text-center grid gap-24">
              <div className="grid gap-16">
                <h2 className="text-3xl font-bold max-sm:text-2xl">
                  Nosso Projeto?
                </h2>
                <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                  O nosso projeto foca em ser a ponte entre cliente e barbearia,
                  o objetivo da aplicação é permitir que os usuários pesquisem
                  estabelecimentos próximos localmente,e tenham a possibilidade
                  de agendarem serviços com profissionais especializados em suas
                  determinadas áreas. A aplicação também fornece recursos para
                  que os estabelecimentos gerenciem seus agendamentos e promovam
                  seus serviços, tendo como a customização do próprio perfil.
                </p>
              </div>
              <img
                className="rounded-xl shadow-about-us"
                src="../../../../src/assets/configs/img/our-project-image-1.png"
                alt="Imagem do google maps"
              />
            </div>

            <div className="grid grid-rows-2 max-lg:gap-24 gap-48">
              <div className="flex flex-col text-center">
                <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-24 gap-48">
                  <div className="grid gap-24">
                    <div className="grid gap-16">
                      <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl max-sm:text-lg">
                        Funcionalidades do cliente
                      </h2>
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                        Procure o serviço ideal sem preocupações e dores de
                        cabeça, agende um horário com rapidez. Visualize
                        avaliações, comentários e quais serviços um barbeiro
                        pode oferecer. Tenha uma busca personalizada de acordo
                        com a sua preferência.
                      </p>
                    </div>
                    <div className="grid gap-20">
                      <div className="grid gap-8">
                        <img
                          className="mx-auto"
                          src="./src/assets/configs/img/svg/Google Maps Old.svg"
                          alt="Ícone de um mapa"
                        />
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                          Busca por estabelecimentos próximos ao usuário.
                        </p>
                      </div>
                      <div className="grid gap-8">
                        <img
                          className="mx-auto"
                          src="./src/assets/configs/img/svg/Google Calendar.svg"
                          alt="Ícone de uma calendário"
                        />
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                          Facilidade e agilidade no processo de realização do
                          agendamento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="h-full rounded-xl shadow-about-us max-md:mx-auto height-image"
                    src="../../../../src/assets/configs/img/our-project-image-2.png"
                    alt="Imagem de um celular emcima de uma mesa"
                  />
                </div>
              </div>

              <div className="flex flex-col text-center">
                <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-24 gap-48 max-md:flex max-md:flex-col-reverse">
                  <img
                    className="h-full rounded-xl shadow-about-us max-md:mx-auto height-image"
                    src="../../../../src/assets/configs/img/our-project-image-3.png"
                    alt="Imagem de alguém mexendo no celular"
                  />
                  <div className="grid gap-24">
                    <div className="grid gap-16">
                      <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl max-sm:text-lg">
                        Funcionalidades da barbearia
                      </h2>
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                        Tenha total controle do seu negócio, dashbaords
                        detalhados e histórico dos serviços prestados com
                        faturamento mensal e mostre o seu serviço para todos,
                        personalisando o seu perfil atraindo mais clientes.
                      </p>
                    </div>
                    <div className="grid gap-20">
                      <div className="grid gap-8">
                        <img
                          className="mx-auto"
                          src="./src/assets/configs/img/svg/Tasklist.svg"
                          alt="Ícone de lista de task"
                        />
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                          Visibilidade, controle de agendamento, dashboards de
                          faturamento.
                        </p>
                      </div>
                      <div className="grid gap-8">
                        <img
                          className="mx-auto"
                          src="./src/assets/configs/img/svg/Edit.svg"
                          alt="Ícone de edit"
                        />
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                          Customização de perfil para cada tipo de
                          estabelecimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="comments" className="page-background-comments page-layout-1x">
          <div className="grid-home-width py-32 mx-auto h-full flex flex-col justify-center gap-24">
            <h2 className="text-3xl text-white font-bold text-center max-sm:text-2xl">
              Comentários
            </h2>
            <div>
              <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                slidesPerView={1}
              >
                {comments.map((comment, index) => (
                  <SwiperSlide key={index} className="text-white">
                    <div className="mx-20">
                      <img
                        className="mx-auto mb-5"
                        src={`src/assets/configs/img/img-perfil/img-perfil-${index}.png`}
                        alt={comment.alt}
                      />
                      <div className="text-center">
                        <h3 className="text-2xl mb-6 max-sm:text-lg">
                          {comment.name}
                        </h3>
                        <p className="text-xl mb-14 max-sm:text-base">
                          {comment.text}
                        </p>
                        <p className="text-xl max-sm:text-base">
                          {comment.company}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
