import React from "react";
import noContent from "../assets/configs/img/svg/noContent.svg";

export default function LoaderResponse() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="max-h-40 max-w-40"
            src={noContent}
            alt="Icone de sem conteúdo"
          />
          <span className="w-64 text-base text-center">
            Desculpe, não foram encontrados nenhum dado no momento.
          </span>
        </div>
      </div>
    </>
  );
}
