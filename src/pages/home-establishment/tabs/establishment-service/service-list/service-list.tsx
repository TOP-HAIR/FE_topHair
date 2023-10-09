import React from "react";
import { Card } from "@mui/material";
import CardService from "./components/card-service";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import services from "../../../../../services/service";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Service from "../../../../../entity/service";

export default function ServiceList() {
  const [service, setServices] = useState<Service[]>([]);

  useEffect(() => {
    function listar() {
      services
        .get("https://65120a8bb8c6ce52b39544b4.mockapi.io/service")
        .then((respostaObtida) => {
          setServices(respostaObtida.data);
        })
        .catch((erroOcorrido) => {
          console.log(erroOcorrido);
        });
    }

    listar();
  }, []);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn bg-warning w-32",
      cancelButton: "btn bg-danger w-32",
    },
    buttonsStyling: true,
  });
  const deletarService = (serviceId: number) => {
    Swal.fire({
      title: "Tem certeza que deseja deletar esse serviço?",
      text: "Você não será capaz de reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Deletar!",
      cancelButtonText: "Cancelar",
      reverseButtons: false,
      width: 450,
    }).then((result) => {
      if (result.isConfirmed) {
        // Remover o comentário da lista
        const updatedServices = service.filter(
          (service) => service.id !== serviceId
        );
        setServices(updatedServices);

        services
          .delete(
            `https://65120a8bb8c6ce52b39544b4.mockapi.io/service/${serviceId}`
          )
          .then(() => {
            console.log("Serviço deletado com sucesso");
          })
          .catch((error) => {
            console.error("Erro ao deletar serviço:", error);
          });

        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Seu serviço foi deletado.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Seu serviço está seguro :)",
          "error"
        );
      }
    });
  };

  return (
    <>
      <div className="w-full">
        <Card className="m-4 h-screen">
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
              {service.map((service) => (
                <div
                  key={service.id}
                  className="bg-white min-w-96 w-80 grid rounded card-service p-4 relative grow"
                >
                  <CardService
                    service={service}
                    onDelete={() => deletarService(service.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
