import React from "react";

export default function AboutUs() {
  return (
    <>
      <div
        id="about-us"
        className="w-full flex flex-col grid gap-16 linear-gradient-about-us py-32"
      >
        <div className="grid gap-20 grid-home-width mx-auto">
          <div className="grid gap-16 mx-8 max-md:gap-12">
            <div className="text-center">
              <h2 className="text-3xl text-white font-bold">Quem somos nós</h2>
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
                    O mercado de cuidados pessoais para homens tem vivenciado um
                    ressurgimento notável nos últimos anos, com as barbearias
                    masculinas se destacando como espaços que oferecem não
                    apenas serviços de corte de cabelo e barba, mas também uma
                    experiência única de relaxamento e estilo.
                  </p>
                </div>
              </div>

              <div className="text-center grid max-md:gap-14 gap-24">
                <div className="grid gap-8">
                  <h3 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                    Como surgiu a ideia?
                  </h3>
                  <p className="text-white text-xl font-normal drop-shadow-2xl">
                    Com o constante avanço da tecnologia e crescente utilização
                    de aplicações para obtenção de serviços, pensamos em
                    desenvolver uma aplicação que possa levar o cliente
                    interessado em mudar o visual, diretamente a uma barbearia.
                    Sem dificuldades
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
    </>
  );
}
