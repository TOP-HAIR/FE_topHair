import React from "react";
import TopHairLogo from "../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { userLinkOwner } from "../shared/hooks/utils/arrayList";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../shared/hooks/utils/navigatePage";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer
        id="teams"
        className="grid-home-width mx-auto h-full flex flex-col justify-center gap-24"
      >
        <hr className="bg-stone-300 mx-6" />
        <div className="flex gap-20 mx-6 justify-center flex-wrap">
          <div className="bg-black min-h-96 w-72 flex flex-col">
            <img className="bg-black h-64 w-full" src={TopHairLogo} alt="" />
          </div>
          <div className="min-h-64 w-72 flex flex-col justify-content gap-4">
            <h3 className="text-white text-2xl max-sm:text-xl">Links</h3>
            <Link onClick={() => navigateToPage(navigate, "/login")}>
              <a className="text-white text-lg max-sm:text-base">
                Estabelecimento
              </a>
            </Link>
            <Link onClick={() => navigateToPage(navigate, "/client-page")}>
              <a className="text-white text-lg max-sm:text-base">Barbearia</a>
            </Link>
            <Link onClick={() => navigateToPage(navigate, "/client-page")}>
              <a className="text-white text-lg" max-sm:text-base>
                Freelancer
              </a>
            </Link>
            <Link onClick={() => navigateToPage(navigate, "/client-page")}>
              <a className="text-white text-lg max-sm:text-base">
                Documentação
              </a>
            </Link>
          </div>
          <div className="min-h-64 w-72 flex flex-col justify-content gap-4">
            <h3 className="text-white text-2xl max-sm:text-xl">
              Redes Sociais:
            </h3>
            {userLinkOwner.map((userLink, index) => (
              <div key={index} className="flex gap-2 items-center">
                <GitHubIcon className="text-white text-4xl"></GitHubIcon>
                <LinkedInIcon className="text-cyan-800 text-4xl"></LinkedInIcon>
                <span className="text-white text-lg max-sm:text-base">
                  {userLink.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
