import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AgendaRelatorio } from "../../../../../shared/entity/agenda";
import { getAgendaRelatoriosContext } from "../../../../../shared/contexts/agendaContext";
import AddchartIcon from "@mui/icons-material/Addchart";
import { converterData } from "../../../../../shared/hooks/utils/validateInput";
import { Link } from "react-router-dom";
import LoaderResponse from "../../../../../components/loaderResponse";
import NoContentComponent from "../../../../../components/noContent";

export default function ReportList() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [ultimosRelatorios, setUltimosRelatorios] = useState<AgendaRelatorio[]>(
    []
  );

  useEffect(() => {
    async function listarAgendaRelatorios() {
      setloadResponse(false);
      try {
        const res = await getAgendaRelatoriosContext();
        setUltimosRelatorios(res.data as AgendaRelatorio[]);
        console.log(res);
        if (res.data == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar relatórios:", error);
      }
    }

    listarAgendaRelatorios();
  }, []);
  return (
    <>
      <Card className="m-5">
        <h2 className="m-6 text-2xl font-bold">Relatório do Estabelecimento</h2>
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
                    <TableCell align="center">Data Inicio</TableCell>
                    <TableCell align="center">Data Final</TableCell>
                    <TableCell align="center">Faturamento</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ultimosRelatorios
                    ?.filter((relatorio) => relatorio != null)
                    .map((relatorio) => (
                      <TableRow
                        key={relatorio?.dataInicio}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          marginBottom: 100,
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {converterData(relatorio?.dataInicio.toString())}
                        </TableCell>
                        <TableCell align="center">
                          {converterData(relatorio?.dataFinal.toString())}
                        </TableCell>
                        <TableCell align="center">
                          R$ {relatorio?.precoTotal}
                        </TableCell>
                        <TableCell align="center">
                          <Link
                            to={`/establishment/reports/dashboard?dataInicio=${converterData(
                              relatorio?.dataInicio.toString()
                            )}&dataFim=${converterData(
                              relatorio?.dataFinal.toString()
                            )}`}
                            underline="hover"
                            className="cursor-pointer"
                          >
                            <AddchartIcon />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Card>
    </>
  );
}
