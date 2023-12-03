import { Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoaderResponse from "../../../../../components/loaderResponse";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";
import NoContentComponent from "../../../../../components/noContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  deleteEmployee,
  getListEmployees,
} from "../../../../../shared/contexts/empresaContext";
import { dadosEmployee } from "../../../../../shared/entity/authEntity";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

function createData(
  Name: string,
  ScheduledDate: Date,
  Schedule: String,
  Status: string
) {
  return { Name, ScheduledDate, Schedule, Status };
}

export default function EmployeesList() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [employee, setEmployee] = useState<dadosEmployee[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function listarFuncionarios() {
      setloadResponse(false);
      try {
        const res = await getListEmployees();
        setEmployee(res);
        console.log(res);
        if (res == undefined || res.length == 0) {
          setResLenghtValid(true);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar funcionários", error);
      }
    }

    listarFuncionarios();
  }, []);

  const deletarEmployee = async (idUser: number) => {
    Swal.fire({
      title: "Tem certeza que deseja deletar esse funcionário?",
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
          await deleteEmployee(idUser);

          const updatedEmployees = employee.filter(
            (func) => func.idUsuario !== idUser
          );
          setloadResponse(false);
          setEmployee(updatedEmployees);
          setloadResponse(true);
        } catch (error) {
          console.error("Erro ao buscar funcionários", error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Seu funcionário está seguro :)", "error");
      }
    });
  };

  const linkNavigate = async (idUser: number) => {
    navigateToPage(navigate, `/establishment/employees/add/${idUser}`);
  };
  return (
    <>
      <Card className="h-full m-5">
        <div className="flex justify-between flex-wrap items-center mr-4">
          <h2 className="m-6 text-2xl font-bold">
            Profissionais do estabelecimento
          </h2>
          <Link to="/establishment/employees/add">
            <Button className="bg-terciary-light-green" variant="contained">
              + Adicionar Profissional
            </Button>
          </Link>
        </div>
        <div className="m-6">
          {!loadResponse ? (
            <LoaderResponse />
          ) : resLenghtValid ? (
            <NoContentComponent />
          ) : (
            <TableContainer className="shadow-table" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Telefone</TableCell>
                    <TableCell align="center">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employee.map((func) => (
                    <TableRow
                      key={func.idUsuario}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {func.idUsuario}
                      </TableCell>
                      <TableCell align="center">{func.nomeCompleto}</TableCell>
                      <TableCell align="center">{func.telefone}</TableCell>
                      <TableCell align="center">
                        <BorderColorIcon
                          className="cursor-pointer"
                          onClick={() => {
                            linkNavigate(func.idUsuario);
                          }}
                        />
                        <DeleteIcon
                          className="cursor-pointer"
                          onClick={() => {
                            deletarEmployee(func.idUsuario);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Card>
      ;
    </>
  );
}
