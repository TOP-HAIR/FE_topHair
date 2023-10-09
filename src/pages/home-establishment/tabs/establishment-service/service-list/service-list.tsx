import React from "react";
import { Card } from "@mui/material";
import CardService from "./components/card-service";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ServiceList() {
  const comments = [
    {
      nome: "Serviço",
      tipo: "tipo do serviço",
      valor: "R$ 20,00",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <>
      <div className="w-full">
        <Card className="m-4 h-screen !overflow-auto">
          <div>
            <div className="flex m-6 justify-between flex-wrap">
              <h2 className="text-2xl font-bold">
                Serviços do Estabelecimento
              </h2>
              <Link to="/establishment/service/edit">
                <Button className="bg-terciary-light-green" variant="contained">
                  + Adicionar Serviço
                </Button>
              </Link>
            </div>
            <div className="m-6 flex flex-wrap gap-x-5 gap-y-4">
              {/* {comments.map((comment) => (
              <div className="mx-20"></div>
            ))} */}
              <CardService />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
