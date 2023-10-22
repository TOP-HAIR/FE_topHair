import React from "react";
import { Card } from "@mui/material";
import './employees.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Name: string,
  Schedule: String,
  Status: string
) {
  return { Name, Schedule, Status };
}

const rows = [
  createData("1", "Lucas", "+"),
  createData("2", "Lucas", "+"),
  createData("3", "Vinicius", "+"),
  createData("4", "Gabriel", "+"),
  createData("5", "Lucas", "+"),
  createData("6", "Vinicius", "+"),
  createData("7", "Gabriel", "+"),
  createData("8", "Lucas", "+"),
  createData("9", "Vinicius", "+"),
  createData("10", "Gabriel", "+"),
];


export default function HomeEmployees() {
  return (
    <>
      <div className="w-full">
        <Card className="m-4">
          <div className="w-full flex justify-between items-center">
          <h2 className="m-6 text-2xl font-bold">
            Profissionais do estabelecimento
          </h2>
          <button className=" btn-adiciona-profissional
          mr-5
          font-bold
          text-sm
          border-none
          outline-none
          text-white
          w-48
          h-7
          rounded-xl">+ Adicionar Profissional</button>
          </div>
          <div className="m-6">
          <TableContainer className="shadow-table" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.Name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0} }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.Name}
                      </TableCell>
                      <TableCell align="center">{row.Schedule}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Card>
      </div>
    </>
  );
}
