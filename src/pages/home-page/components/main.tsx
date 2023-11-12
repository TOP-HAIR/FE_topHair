import React from "react";
import Comments from "./commets";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";

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
                  <h1 className="text-4xl uppercase font-bold max-w-lg">
                    Anime seu dia
                    <span className="color-terciary-light-green">
                      {" "}
                      admirando{" "}
                    </span>
                    sua beleza
                  </h1>
                  <p className="font-family-dm-sans text-xl">
                    Com Tophair, agende seus compromissos de beleza com
                    facilidade e estilo!
                  </p>
                </div>
                <div className="flex gap-5">
                  <Button
                    className="uppercase bg-primary-cyan w-72 text-md h-10 font-semibold"
                    variant="contained"
                  >
                    Entrar como cliente
                  </Button>
                  <Button
                    className="uppercase bg-primary-aqua w-72 text-md font-semibold"
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
                <h2 className="text-3xl text-white font-bold">
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
                    <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                      Mercado de atuação
                    </h3>
                    <p className="text-white text-xl font-normal font-family-dm-sans">
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
                    <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                      Como surgiu a ideia?
                    </h3>
                    <p className="text-white text-xl font-normal drop-shadow-2xl">
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

          <div className="page-background-about-us p-8">
            <div className="grid-home-width mx-auto text-center grid gap-8">
              <h2 className="text-2xl font-bold text-white">Valores</h2>

              <div className="grid grid-cols-3 gap-7 mx-7 ">
                <div className="flex flex-col text-center gap-3 ">
                  <img
                    className="h-20"
                    src="../../../../src/assets/configs/img/svg/Visão.svg"
                    alt="Icone da Visão da Empresa"
                  />
                  <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                    Visão
                  </h3>
                  <p className="text-white text-xl font-normal font-family-dm-sans">
                    Oferecer uma experiência excepcional para usuários e
                    estabelecimentos.
                  </p>
                </div>

                <div className="flex flex-col text-center gap-3">
                  <img
                    className="h-20"
                    src="../../../../src/assets/configs/img/svg/Missão.svg"
                    alt="Icone da Missão da Empresa"
                  />
                  <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                    Missão
                  </h3>
                  <p className="text-white text-xl font-normal font-family-dm-sans">
                    Ajudar os estabelecimentos a gerenciar seus agendamentos e
                    expandir seus negócios.
                  </p>
                </div>

                <div className="flex flex-col text-center gap-3">
                  <img
                    className="h-20"
                    src="../../../../src/assets/configs/img/svg/Valores.svg"
                    alt="Icone da Valores da Empresa"
                  />
                  <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                    Valores
                  </h3>
                  <p className="text-white text-xl font-normal font-family-dm-sans">
                    Inovação, excelência e transparência nos negócios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="our-project" className="py-32 grid-home-width mx-auto">
          <div className="mx-8 grid gap-44">
            <div className="text-center grid gap-24">
              <div className="grid gap-16">
                <h2 className="text-3xl font-bold">Nosso Projeto?</h2>
                <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
                      <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                        Funcionalidades do cliente
                      </h2>
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                          Busca por estabelecimentos próximos ao usuário.
                        </p>
                      </div>
                      <div className="grid gap-8">
                        <img
                          className="mx-auto"
                          src="./src/assets/configs/img/svg/Google Calendar.svg"
                          alt="Ícone de uma calendário"
                        />
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
                      <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                        Funcionalidades da barbearia
                      </h2>
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
                        <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
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
        <Comments />
      </div>
    </>
  );
}
