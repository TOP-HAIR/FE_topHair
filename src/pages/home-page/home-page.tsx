import React from "react";
import TopHairLogo from "../../assets/configs/img/logo/top-hair-logo.svg";
import HomeMain from "./components/main";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <>
      <div className="w-auto relative bg-secondary-gray">
        <div className="right-0 page-layout-1x absolute w-8/12 bg-image-home"></div>
        <div className="shadow-home-form">
          <div className="page-layout-1x absolute w-7/12 page-home-form bg-white"></div>
        </div>

        <div className="relative grid-home-width mx-auto z-10 ">
          <nav className="absolute h-16 max-md:h-14 bg-white w-full shadow-home-header mt-5">
            <div className="mx-8 h-full flex justify-between space-x-4">
              <div>
                <img
                  className="h-full"
                  src={TopHairLogo}
                  alt="Logo da TopHair"
                />
              </div>
              <div className="gap-8 flex items-center uppercase max-md:hidden text-base font-bold">
                <a className="hover-underline-animation p-2" href="#about-us">
                  Sobre nós
                </a>
                <a
                  className="hover-underline-animation p-2"
                  href="#our-project"
                >
                  Nosso Projeto
                </a>
                <a className="hover-underline-animation p-2" href="#comments">
                  Comentários
                </a>
                <a className="hover-underline-animation p-2" href="#teams">
                  Equipe
                </a>
              </div>
            </div>
          </nav>
        </div>
        <HomeMain />
        <div className="bg-black py-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
