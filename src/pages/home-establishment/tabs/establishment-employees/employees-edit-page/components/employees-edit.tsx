import React from "react";
import { Card, Link, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { navigateToPage } from "@/shared/hooks/utils/navigatePage";

export default function EditEmployees() {
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
            <Card className="h-full m-5">

                <div className="flex flex-col">

                    <form className="max-w-screen-lg text-center flex flex-col gap-12">
                        <h2 className="text-2xl font-bold">Adicionar Profissional</h2>
                        <div className="w-full flex flex-col gap-12">
                            <div className="flex wrap gap-6 justify-between">
                                <div className="flex flex-col w-1/2 gap-12">

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
                        <div className="flex justify-between">
                            <Button
                                className="w-48"
                                variant="outlined"
                            >
                                Cancelar
                            </Button>
                            <Button className="w-48" variant="contained" type="submit">
                                Adicionar profissional
                            </Button>
                        </div>
                    </form>
                </div>

            </Card>

        </>
    );
}
