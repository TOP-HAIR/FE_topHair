import React from "react";
import error404 from "../assets/configs/img/svg/error404.svg";
import logoTopHair from "../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import { Button } from "@mui/material";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../shared/hooks/utils/navigatePage";

export default function ErrorPage404() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full fixed h-20 bg-primary-dark-cyan flex justify-center">
        <div className="grid-home-width w-full flex justify-between px-4">
          <a className="h-full" href="/">
            <img className="h-full" src={logoTopHair} alt="Logo da TopHair" />
          </a>
          <div className="flex gap-16 items-center">
            <a
              className="hover-underline-animation text-white text-lg cursor-pointer"
              onClick={() => navigateToPage(navigate, "/")}
            >
              Home
            </a>
            <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
            <a
              className="hover-underline-animation text-white text-lg cursor-pointer"
              onClick={() => navigateToPage(navigate, "/client-page")}
            >
              Cliente
            </a>
            <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
            <a
              className="hover-underline-animation text-white text-lg cursor-pointer"
              onClick={() => navigateToPage(navigate, "/login")}
            >
              Estabelecimentos
            </a>
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-20 flex-wrap-reverse pt-20">
          <div className="h-96 w-80 bg-white card-service rounded flex flex-col p-4 gap-4 justify-between">
            <h2 className="text-4xl font-medium">Oops...</h2>
            <div className="flex flex-col gap-3">
              <p className="text-lg">Parece que você se perdeu.</p>
              <p className="text-lg">
                A página que você está procurando pode ter sido removida,
                renomeada ou está temporariamente indisponível.
              </p>
              <p className="text-lg">Volte para página principal.</p>
            </div>
            <Button
              className="text-white px-8 py-3 text-sm bg-primary-cyan"
              onClick={() => navigateToPage(navigate, "/")}
            >
              Voltar para a página principal
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="max-w-xl" src={error404} alt="Icone de erro 404" />
          </div>
        </div>
      </main>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </>
  );
}
