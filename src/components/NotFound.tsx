import React from "react";
import noContent from "../assets/configs/img/svg/noContent.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../shared/hooks/utils/navigatePage";

export default function NotFoundClientComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
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
            <img className="max-w-xl" src={noContent} alt="Icone de erro 404" />
          </div>
        </div>
      </div>
    </>
  );
}
