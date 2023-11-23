import React from "react";
import TopHairLogo from "../../../assets/configs/img/logo/top-hair-logo-white-version 2.svg";

export default function Header() {
  return (
    <>
      <header className="h-20 w-full bg-black-suport flex justify-center fixed z-50">
        <div className="grid-home-width w-full px-8">
          <div className="w-full h-full flex justify-between items-center">
            <a className="h-full" href="/">
              <img className="h-full" src={TopHairLogo} alt="Logo da TopHair" />
            </a>

            <div className="py-4 space-x-4 flex gap-12 justify-between items-center">
              <a
                className="hover-underline-animation text-white text-lg"
                href="#start-here"
              >
                Comece aqui
              </a>
              <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
              <a
                className="hover-underline-animation text-white text-lg"
                href="#freelancers"
              >
                Freelancers
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
