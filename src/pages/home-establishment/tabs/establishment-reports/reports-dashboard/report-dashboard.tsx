import LoaderResponse from "../../../../../components/loaderResponse";
import { getListarEmpresaRelatorioContext } from "../../../../../shared/contexts/empresaContext";
import {
  DadoChart,
  MetricaEmpresa,
} from "../../../../../shared/entity/empresaEntity";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NoContentComponent from "../../../../../components/noContent";
import { BarChart } from "@mui/x-charts";

export default function ReportDashboard() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [dadosRelatorio, setDadosRelatorio] = useState<MetricaEmpresa>();
  const [dadosChart, setDadosChart] = useState<DadoChart[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataInicio = queryParams.get("dataInicio");
  const dataFim = queryParams.get("dataFim");
  let dataset;
  let valoresTotais;
  let valorMinimo;
  let valorMaximo;

  const transformarDadosRelatorio = (
    dados: MetricaEmpresa
  ): { semana: string; total: number }[] => {
    const semanaArray = [
      { semana: "Domingo", total: dados?.qtdAgendaDomingo },
      { semana: "Segunda", total: dados?.qtdAgendaSegunda },
      { semana: "Terça", total: dados?.qtdAgendaTerca },
      { semana: "Quarta", total: dados?.qtdAgendaQuarta },
      { semana: "Quinta", total: dados?.qtdAgendaQuinta },
      { semana: "Sexta", total: dados?.qtdAgendaSexta },
      { semana: "Sábado", total: dados?.qtdAgendaSabado },
    ];
    console.log(semanaArray);

    return semanaArray;
  };
  const xAxis = {
    label: "Distance between home and office (km)",
    scaleType: "band" as const,
    data: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
  };
  // useEffect(() => {
  //   async function listarEmpresaRelatorio() {
  //     const dadosrChart = transformarDadosRelatorio(dadosRelatorio);
  //     setDadosChart(dadosrChart);
  //     dataset = dadosrChart.map((item) => ({
  //       semana: item.semana,
  //       total: item.total,
  //     }));

  //     valoresTotais = dadosChart.map((item) => item.total);
  //     valorMinimo = Math.min(...valoresTotais);
  //     valorMaximo = Math.max(...valoresTotais);
  //   }
  //   listarEmpresaRelatorio();
  // }, []);

  useEffect(() => {
    async function listarEmpresaRelatorio() {
      // setloadResponse(false);
      // try {
      const res = await getListarEmpresaRelatorioContext(dataInicio, dataFim);
      const dadosChart = transformarDadosRelatorio(res as MetricaEmpresa);
      setDadosChart(dadosChart);
      dataset = dadosChart.map((item) => ({
        semana: item.semana,
        total: item.total,
      }));
      setDadosRelatorio(res as MetricaEmpresa);

      valoresTotais = dadosChart.map((item) => item.total);
      console.log(dadosChart);
      valorMinimo = Math.min(...valoresTotais);
      valorMaximo = Math.max(...valoresTotais);
      setDadosChart(dadosChart);
      console.log(res);
      if (res.data == undefined || res.data.length == 0) {
        // setResLenghtValid(true);
      }
      // setloadResponse(true);
      // } catch (error) {
      //   console.error("Erro ao buscar relatórios:", error);
      // }
    }

    listarEmpresaRelatorio();
  }, []);

  return (
    <>
      <section className="w-full">
        {/* {!loadResponse ? (
          <LoaderResponse />
        ) : resLenghtValid ? (
          <NoContentComponent />
        ) : ( */}
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 m-5">
            <Card>
              <h2 className="m-6 text-2xl font-bold">Resumo do Faturamento</h2>
              <div className="m-6 d-flex grid flex-col gap-4">
                <p className="text-base">
                  Total Semanal: R${" "}
                  <span className="text-base font-bold">
                    {dadosRelatorio?.totalSemanalW}
                  </span>
                </p>
                <p className="text-base">
                  Quantidade de Agendamentos:{" "}
                  <span className="text-base font-bold">
                    {dadosRelatorio?.qtdAgendas}
                  </span>{" "}
                  agendamentos
                </p>
                <p className="text-base">
                  Serviços Mais Pedidos:{" "}
                  <span className="text-base font-bold">
                    {dadosRelatorio?.servicoMaisPedidos}
                  </span>
                </p>
                <p className="text-base">
                  Serviços Menos Pedidos:{" "}
                  <span className="text-base font-bold">
                    {dadosRelatorio?.servicoMenosPedidos}
                  </span>
                </p>
              </div>
            </Card>
            <Card>
              <h2 className="m-6 text-2xl font-bold">Resumo Semanal</h2>
              <div className="m-6 d-flex grid flex-col gap-4">
                <p className="text-base">Faturamento Máx:</p>
                <span className="text-base font-bold">
                  {dadosRelatorio?.faturamentoMaximo}
                </span>
                <p className="text-base">Faturamento Mín: </p>
                <span className="text-base font-bold">
                  {dadosRelatorio?.faturamentoMinimo}
                </span>
              </div>
            </Card>
          </div>
          <Card className="m-5">
            <h2 className="m-6 text-2xl font-bold">Faturamento Semanal</h2>
            <div className="m-6">
              {console.log(dadosChart)}
              {dadosChart && dadosChart.length > 0 ? (
                <BarChart
                  xAxis={[
                    {
                      ...xAxis,
                      tickLabelStyle: {
                        angle: 45,
                        dominantBaseline: "hanging",
                        textAnchor: "start",
                      },
                      labelStyle: {
                        transform: "translateY(15px)",
                      },
                    },
                  ]}
                  yAxis={[{ min: valorMinimo, max: valorMaximo }]}
                  series={[
                    {
                      data: dadosChart.map((item) => item.total),
                    },
                  ]}
                  height={350}
                />
              ) : (
                <p>Nenhum dado disponível para exibir o gráfico.</p>
              )}
            </div>
          </Card>
        </div>
        {/* )} */}
      </section>
    </>
  );
}
