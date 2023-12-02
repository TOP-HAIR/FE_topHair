import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import CardService from "./components/card-service";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { ApiService } from "../../../../../shared/services/serviceService";
import Swal from "sweetalert2";
import { Service } from "../../../../../shared/entity/serviceEntity";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import LoaderResponse from "../../../../../components/loaderResponse";
import NoContentComponent from "../../../../../components/noContent";
import { getServiceContext } from "../../../../../shared/contexts/serviceContext";

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const navigate = useNavigate();
  const apiService = new ApiService();

  const linkNavigate = async (serviceId: number) => {
    navigateToPage(navigate, `/establishment/service/edit/${serviceId}`);
  };

  useEffect(() => {
    async function listarServicos() {
      setloadResponse(false);
      try {
        const res = await getServiceContext();
        if (res == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setServices(res.data);
        }
        console.log(res);
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarServicos();
  }, []);

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiService.deleteService(serviceId);

          const updatedServices = services.filter(
            (service) => service.idServico !== serviceId
          );
          setServices(updatedServices);
          Swal.fire("Sucesso", "Serviço excluído com sucesso.", "success");
        } catch (error) {
          console.error("Erro ao excluir o serviço:", error);
          Swal.fire("Erro", "Erro ao excluir o serviço.", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Seu serviço está seguro :)", "error");
      }
    });
  };

  return (
    <>
      <Card className="m-5 p-6 h-full">
        <div className="flex justify-between flex-wrap">
          <h2 className="text-2xl font-bold">Serviços do Estabelecimento</h2>
          <Link to="/establishment/service/edit">
            <Button className="bg-terciary-light-green" variant="contained">
              + Adicionar Serviço
            </Button>
          </Link>
        </div>
        {!loadResponse ? (
          <LoaderResponse />
        ) : resLenghtValid ? (
          <NoContentComponent />
        ) : (
          <div className="my-8 flex flex-wrap gap-x-5 gap-y-4">
            {services.map((service) => (
              <div
                key={service.idServico}
                className="bg-white min-w-96 w-80 grid rounded card-service p-4 relative grow"
              >
                <CardService
                  service={service}
                  onDelete={() => deletarService(service.idServico)}
                  linkEdit={() => linkNavigate(service.idServico)}
                />
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}
