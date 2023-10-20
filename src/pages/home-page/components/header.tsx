import React from "react";
import TopHairLogo from "../../../assets/configs/img/logo/top-hair-logo.svg";

export default function HeaderPage() {
  return (
    <>
      <div className="relative grid-home-width mx-auto z-10 ">
        <nav className="absolute h-16 max-md:h-14 bg-white w-full shadow-home-header mt-5">
          <div className="mx-8 h-full flex justify-between space-x-4">
            <div>
              <img className="h-full" src={TopHairLogo} alt="" />
            </div>
            <div className="gap-12 flex items-center uppercase max-md:hidden text-base font-bold">
              <a className="hover:bg-sky-700" href="#about-us">
                Sobre nós
              </a>
              <a className="hover:bg-sky-700" href="#our-project">
                Nosso Projeto
              </a>
              <a className="hover:bg-sky-700" href="#comments">
                Comentários
              </a>
              <a className="hover:bg-sky-700" href="#teams">
                Equipe
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
