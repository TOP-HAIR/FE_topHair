import React from "react";
import TopHairLogo from "../../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import ImagemHomemMain from "../../assets/configs/img/homem-jovem-e-sensivel-pensando.png";
export default function HomeUserClient() {
  return (
    <>
      <header className="h-20 w-full bg-black-suport flex justify-center fixed">
        <div className="grid-home-width w-full px-8">
          <div className="w-full h-full flex justify-between items-center">
            <img className="h-full" src={TopHairLogo} alt="Logo da TopHair" />
            <div className="py-4 space-x-4 flex gap-12 justify-between items-center">
              <a
                className="hover-underline-animation text-white text-lg"
                href="#about-us"
              >
                Freelancers
              </a>
              <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
              <a
                className="hover-underline-animation text-white text-lg"
                href="#about-us"
              >
                Estabelecimentos
              </a>
              <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
              <p className="text-white text-lg w-32">
                Faça login ou se cadastre
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className=" w-full flex flex-col">
        <section className="bg-black page-layout-1x w-full flex justify-center ">
          <div className="mt-10 grid-home-width max-md:columns-2 w-full h-full flex">
            <div className="w-full flex items-center">
              <img
                className="min-w-md max-w-md max-h-[44rem] my-auto"
                src={ImagemHomemMain}
                alt="Imagem de um Homem posando"
              />
            </div>
            <div className="w-full flex flex-col content-center my-auto gap-4">
              <div>
                <h1 className="uppercase bg-text-home-client font-family-inria-sans text-8xl">
                  Fashion
                </h1>
                <p className="text-white font-family-inria-sans text-xl">
                  Ache em qualquer lugar uma barbearia perto da sua casa.
                </p>
              </div>
              <div className="w-full pr-24">
                <p className="uppercase text-white text-4xl font-family-dm-sans">
                  <span className="color-primary-aqua">Style</span> for life
                </p>
                <p className="uppercase text-white text-4xl font-family-dm-sans float-right">
                  Make your own <span className="color-primary-aqua">pace</span>
                </p>
              </div>
              <p className="text-white text-lg">
                Descubra as barbearias mais renomadas e talentosas perto de
                você. Estamos prontos para transformar seu visual e garantir que
                cada corte seja uma obra-prima. Junte-se a nós para uma
                experiência única de beleza e estilo. Seu melhor visual começa
                aqui, no coração do seu estado!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
