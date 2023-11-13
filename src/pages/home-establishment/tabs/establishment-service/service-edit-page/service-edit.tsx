import React from "react";
import { Card, Link, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";

export default function EditPageService() {
  const navigate = useNavigate();

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
          <form className="max-w-screen-lg text-center flex flex-col gap-12">
            <h2 className="text-2xl font-bold">Serviço</h2>
            <div className="w-full flex flex-col gap-12">
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                className=""
                placeholder="Digite o nome do Serviço"
                size="small"
              />
              <div className="flex wrap gap-6 justify-between">
                <div className="flex flex-col w-1/2 gap-12">
                  <TextField
                    id="outlined-basic"
                    label="Valor"
                    variant="outlined"
                    placeholder="Digite o valor do Serviço"
                    size="small"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Tipo"
                    variant="outlined"
                    placeholder="Digite o tipo do Serviço"
                    size="small"
                  />
                </div>
                <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                  <span className="drop-title">Drop files here</span>
                  or
                  <input type="file" accept="image/*" />
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
