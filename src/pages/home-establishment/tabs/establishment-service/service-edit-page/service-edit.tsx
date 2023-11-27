import React, { useEffect, useState } from "react";
import { Card, Link, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import { SubmitHandler, useForm } from "react-hook-form";
import Services, { DataService, Service } from "@/shared/entity/serviceEntity";
import { ApiService } from "@/shared/services/serviceService";
import LoaderResponse from "@/components/loaderResponse";
import { getServiceByIdContext } from "@/shared/contexts/serviceContext";

export default function EditPageService() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [loadResponse, setloadResponse] = useState(false);
  const { handleSubmit, register } = useForm<DataService>();
  const apiService = new ApiService();
  const { serviceId } = useParams();

  const handleFileChange = (e: any) => {
    const fileInput = e.target;

    if (fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName("");
    }
  };

  useEffect(() => {
    async function listarServicoById() {
      if (serviceId != undefined && serviceId != null) {
        setloadResponse(false);
        try {
          const res = await getServiceByIdContext(serviceId);
          console.log(res);
          setloadResponse(true);
        } catch (error) {
          console.error("Erro ao buscar serviços:", error);
        }
      }
    }
    listarServicoById();
  }, []);

  const onSubmit: SubmitHandler<DataService> = (data: DataService) => {
    const obj = {
      tipo: data.tipo,
      nome: data.nomeServico,
      valor: data.preco,
      descricao: data.descricao,
    };
    try {
      apiService.postService(obj);
    } catch (error) {
      console.error("Erro ao excluir o serviço:", error);
      Swal.fire("Erro", "Erro ao criar o serviço.", "error");
    }
  };

  const confirmCancel = () => {
    console.log(serviceId);
    Swal.fire({
      title: "Tem certeza que deseja cancelar esse serviço?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Não",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Sim, Tenho!",
      confirmButtonColor: "#2f9c7f",
      reverseButtons: true,
      width: 450,
    }).then((result) => {
      if (result.isConfirmed) {
        navigateToPage(navigate, -1);
      }
    });
  };
  return (
    <>
      <Card className="h-full m-5 p-6">
        <div className="flex flex-col">
          <Link
            onClick={() => navigateToPage(navigate, -1)}
            underline="hover"
            className="cursor-pointer"
          >
            Voltar
          </Link>
          <form
            className="max-w-screen-lg text-center flex flex-col gap-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl font-bold">Serviço</h2>
            <div className="w-full flex flex-col gap-12">
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                className=""
                placeholder="Digite o nome do Serviço"
                size="small"
                {...register("nomeServico")}
              />
              <div className="flex wrap gap-6 justify-between">
                <div className="flex flex-col w-1/2 gap-12">
                  <TextField
                    id="outlined-basic"
                    label="Valor"
                    variant="outlined"
                    placeholder="Digite o valor do Serviço"
                    size="small"
                    {...register("preco")}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Tipo"
                    variant="outlined"
                    placeholder="Digite o tipo do Serviço"
                    size="small"
                    {...register("tipo")}
                  />
                </div>
                <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                  <span className="drop-title">Drop files here</span>
                  or
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <TextField
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                multiline
                size="small"
                rows={8}
                placeholder="Descreva o Serviço"
                {...register("descricao")}
              />
            </div>
            <div className="flex justify-between">
              <Button
                className="w-48"
                variant="outlined"
                onClick={confirmCancel}
              >
                Cancelar
              </Button>
              <Button className="w-48" variant="contained" type="submit">
                Cadastrar Serviço
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}
