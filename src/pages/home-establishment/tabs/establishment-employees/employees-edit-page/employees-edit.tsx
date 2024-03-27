import React, { useEffect, useState } from "react";
import { Link, Card, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import { SubmitHandler, useForm } from "react-hook-form";
import LoaderResponse from "../../../../../components/loaderResponse";
import { EmployeeCadastro } from "../../../../../shared/entity/empresaEntity";
import {
  employeeRegisterContext,
  getEmployeeByIdContext,
  putEmployeeContext,
} from "../../../../../shared/contexts/empresaContext";
import InputMask from "react-input-mask";

interface EmployeeRegister extends EmployeeCadastro {
  confirmarSenha: string;
}

export default function EditEmployees() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EmployeeRegister>();
  const [loadResponse, setloadResponse] = useState(false);
  const navigate = useNavigate();
  const { idEmployee } = useParams();

  useEffect(() => {
    async function listarUsuarioById() {
      if (idEmployee != undefined && idEmployee != null) {
        setloadResponse(false);
        try {
          const res = await getEmployeeByIdContext(idEmployee);
          setValue("cpf", res.data?.cpf);
          setValue("nomeCompleto", res.data?.nomeCompleto);
          setValue("email", res.data?.email);
          setValue("telefone", res.data?.telefone);
          setloadResponse(true);
        } catch (error) {
          console.error("Erro ao buscar serviços:", error);
        }
      }
      setloadResponse(true);
    }
    listarUsuarioById();
  }, []);

  const onSubmit: SubmitHandler<EmployeeRegister> = async (data, event) => {
    event && event.preventDefault();

    if (idEmployee == undefined && idEmployee == null) {
      try {
        const { confirmarSenha: _, ...newdata } = data;
        newdata.isProfissional = true;
        employeeRegisterContext(newdata).then((response) => {
          Swal.fire("Sucesso", "Usuário criado com sucesso.", "success");
          navigateToPage(navigate, -1);
          console.log(response);
        });
      } catch (error) {
        console.error("Erro ao criar o usuário:", error);
        Swal.fire("Erro", "Erro ao criar usuário.", "error");
      }
    } else {
      try {
        const { confirmarSenha: _, ...newdata } = data;
        newdata.isProfissional = true;

        await putEmployeeContext(newdata, idEmployee).then((response) => {
          Swal.fire("Sucess", "Sucesso ao atualizar funcionário.", "success");
          navigateToPage(navigate, -1);
          console.log(response);
        });
      } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        Swal.fire("Erro", "Erro ao atualizar o funcionário.", "error");
      }
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
                {!loadResponse ? (
                  <LoaderResponse />
                ) : (
                  <div className="flex w-full flex-col gap-12">
                    <InputMask
                      mask="999.999.999-99"
                      defaultValue=""
                      {...register("cpf", { required: "CPF é obrigatório" })}
                    >
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          id="outlined-basic"
                          label="CPF"
                          variant="outlined"
                          placeholder="Digite o CPF"
                          size="small"
                          error={Boolean(errors.cpf)}
                          helperText={errors.cpf?.message ?? ""}
                        />
                      )}
                    </InputMask>

                    <TextField
                      id="outlined-basic"
                      label="Nome"
                      variant="outlined"
                      placeholder="Digite o nome"
                      size="small"
                      {...register("nomeCompleto", {
                        required: "nome é obrigatório",
                      })}
                      error={Boolean(errors.nomeCompleto)}
                      helperText={errors.nomeCompleto?.message || ""}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      placeholder="Digite o email"
                      size="small"
                      {...register("email", {
                        required: "email é obrigatório",
                      })}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message || ""}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Senha"
                      variant="outlined"
                      placeholder="Digite sua senha"
                      size="small"
                      {...register("senha", {
                        required: "senha é obrigatória",
                      })}
                      error={Boolean(errors.senha)}
                      helperText={errors.senha?.message || ""}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Confirmação de senha"
                      variant="outlined"
                      placeholder="Digite sua senha"
                      size="small"
                      {...register("confirmarSenha", {
                        required: true,
                        validate: (val: string) => {
                          if (watch("senha") != val) {
                            return "senhas não são iguais";
                          }
                        },
                      })}
                      error={Boolean(errors.confirmarSenha)}
                      helperText={errors.confirmarSenha?.message || ""}
                    />

                    <InputMask
                      mask="(99) 99999-9999"
                      defaultValue=""
                      {...register("telefone", {
                        required: "Telefone é obrigatório",
                      })}
                    >
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          id="outlined-basic"
                          label="Telefone"
                          variant="outlined"
                          placeholder="Digite o número de telefone"
                          size="small"
                          error={Boolean(errors.telefone)}
                          helperText={errors.telefone?.message || ""}
                        />
                      )}
                    </InputMask>
                  </div>
                )}
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
