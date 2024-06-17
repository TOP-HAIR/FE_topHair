import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card } from "@mui/material";
import LoaderResponse from "../../../../../../components/loaderResponse";
import { homeTableContext } from "../../../../../../shared/contexts/homeContext";
import { AgendamentosData } from "../../../../../../shared/entity/homeEntity";
import NoContentComponent from "../../../../../../components/noContent";
import moment from "moment";

export default function HomeList() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [ultimosServicos, setUltimosServicos] = useState<AgendamentosData[]>(
    []
  );

  useEffect(() => {
    async function listarUltimosAgendamentos() {
      setloadResponse(false);
      try {
        const res = await homeTableContext();
        setUltimosServicos(res.data as AgendamentosData[]);
        console.log(res);
        if (res.data == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarUltimosAgendamentos();
  }, []);

  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">Últimos Agendamentos</h2>
          <div className="m-6">
            {!loadResponse ? (
              <LoaderResponse />
            ) : resLenghtValid ? (
              <NoContentComponent />
            ) : (
              <TableContainer className="shadow-table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="font-bold">
                      <TableCell align="center">idAgenda</TableCell>
                      <TableCell align="center">Nome</TableCell>
                      <TableCell align="center">Data Marcada</TableCell>
                      <TableCell align="center">Horário</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ultimosServicos
                      ?.filter((servico) => servico != null)
                      .map((servico) => (
                        <TableRow
                          key={servico?.idAgenda}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            marginBottom: 100,
                          }}
                        >
                          <TableCell align="center" component="th" scope="row">
                            {servico?.idUsuario}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {servico?.nomeUsuario}
                          </TableCell>
                          <TableCell align="center">
                            {moment(servico?.start).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell align="center">
                            {moment(servico?.end).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell align="center">{servico?.title}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}
