import React, { useEffect, useState } from "react";
import { Card, Link, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataService } from "../../../../../shared/entity/serviceEntity";
import { ApiService } from "../../../../../shared/services/serviceService";
import LoaderResponse from "../../../../../components/loaderResponse";
import { getServiceByIdContext } from "../../../../../shared/contexts/serviceContext";
import {
  formatTime,
  inputSemEspaco,
  inputSomenteNumero,
} from "../../../../../shared/hooks/utils/validateInput";

export default function EditPageService() {
  const navigate = useNavigate();
  const [loadResponse, setloadResponse] = useState(false);
  const { handleSubmit, register, setValue } = useForm<DataService>();
  const apiService = new ApiService();
  const { idServico } = useParams();

  useEffect(() => {
    async function listarServicoById() {
      console.log(idServico);
      if (idServico != undefined && idServico != null) {
        setloadResponse(false);
        try {
          const res = await getServiceByIdContext(idServico);
          setValue("nomeServico", res.data?.nomeServico);
          setValue("preco", res.data?.preco);
          setValue("qtdTempoServico", res.data?.qtdTempoServico);
          setValue("descricao", res.data?.descricao);

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
      // tipo: data.tipo,
      nomeServico: data.nomeServico,
      preco: data.preco,
      descricao: data.descricao,
      qtdTempoServico: data.qtdTempoServico,
    };
    try {
      apiService.postService(obj);
    } catch (error) {
      console.error("Erro ao excluir o serviço:", error);
      Swal.fire("Erro", "Erro ao criar o serviço.", "error");
    }
  };

  const confirmCancel = () => {
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
            {!loadResponse ? (
              <LoaderResponse />
            ) : (
              <div className="w-full flex flex-col gap-8">
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
                  <div className="flex gap-6 w-full">
                    <TextField
                      className="w-1/2"
                      id="outlined-basic"
                      label="Valor"
                      variant="outlined"
                      placeholder="Digite o valor do Serviço"
                      size="small"
                      {...register("preco")}
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputSemEspaco(e);
                      }}
                    />

                    <TextField
                      className="w-1/2"
                      id="outlined-basic"
                      label="Tempo"
                      variant="outlined"
                      placeholder="Digite o tempo do serviço"
                      size="small"
                      {...register("qtdTempoServico")}
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputSomenteNumero(e);
                        formatTime(e);
                      }}
                    />
                  </div>

                  <TextField
                    id="outlined-basic"
                    label="Categoria"
                    variant="outlined"
                    multiline
                    size="small"
                    placeholder="Descreva o Serviço"
                    {...register("categoria")}
                  />

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
              </div>
            )}
          </form>
        </div>
      </Card>
    </>
  );
}
