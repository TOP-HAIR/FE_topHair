import React, { useEffect, useState } from "react";
import { Link, Card, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import { SubmitHandler, useForm } from "react-hook-form";
import LoaderResponse from "../../../../../components/loaderResponse";

export default function EditEmployees() {
  const { handleSubmit, register } = useForm();
  const [loadResponse, setloadResponse] = useState(false);
  const navigate = useNavigate();
  const { employeeId } = useParams();

  useEffect(() => {
    async function listarUsuarioById() {
      if (employeeId != undefined && employeeId != null) {
        setloadResponse(false);
        try {
          setloadResponse(true);
        } catch (error) {
          console.error("Erro ao buscar serviços:", error);
        }
      }
    }
    listarUsuarioById();
  }, []);

  const onSubmit: SubmitHandler = () => {
    try {
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
      Swal.fire("Erro", "Erro ao criar usuário.", "error");
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
            <h2 className="text-2xl font-bold">Adicionar Profissional</h2>
            <div className="w-full flex flex-col gap-12">
              <div className="flex wrap gap-6 justify-between">
                <div className="flex w-full flex-col gap-12">
                  <TextField
                    id="outlined-basic"
                    label="CPF"
                    variant="outlined"
                    placeholder="Digite o CPF"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    placeholder="Digite o nome"
                    size="small"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder="Digite o email"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    placeholder="Digite sua senha"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Confirmação de senha"
                    variant="outlined"
                    placeholder="Digite sua senha"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Telefone"
                    variant="outlined"
                    placeholder="Digite o numero de telefone"
                    size="small"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Especialidade"
                    variant="outlined"
                    placeholder="Digite a especialidade do profissional"
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-between">
              <Button
                className="w-64"
                variant="outlined"
                onClick={confirmCancel}
              >
                Cancelar
              </Button>
              <Button className="w-64" variant="contained" type="submit">
                Adicionar profissional
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}
