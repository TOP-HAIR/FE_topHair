import LoaderResponse from "../../../../../components/loaderResponse";
import { getListarEmpresaRelatorioContext } from "../../../../../shared/contexts/empresaContext";
import {
  DadoChart,
  MetricaEmpresa,
} from "../../../../../shared/entity/empresaEntity";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoContentComponent from "../../../../../components/noContent";
import { BarChart } from "@mui/x-charts";

export default function ReportDashboard({ dataInicio, dataFim }) {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [dadosRelatorio, setDadosRelatorio] = useState<MetricaEmpresa>();
  const [dadosChart, setDadosChart] = useState<DadoChart[]>([]);
  let dataset;
  let valoresTotais;
  let valorMinimo;
  let valorMaximo;

  const transformarDadosRelatorio = (
    dados: MetricaEmpresa
  ): { semana: string; total: number; rendimento: number }[] => {
    const semanaArray = [
      {
        semana: "Domingo",
        total: dados?.qtdAgendaDomingo,
        rendimento: dados?.rendimentoDomingo,
      },
      {
        semana: "Segunda",
        total: dados?.qtdAgendaSegunda,
        rendimento: dados?.rendimentoSegunda,
      },
      {
        semana: "Terça",
        total: dados?.qtdAgendaTerca,
        rendimento: dados?.rendimentoTerca,
      },
      {
        semana: "Quarta",
        total: dados?.qtdAgendaQuarta,
        rendimento: dados?.rendimentoQuarta,
      },
      {
        semana: "Quinta",
        total: dados?.qtdAgendaQuinta,
        rendimento: dados?.rendimentoQuinta,
      },
      {
        semana: "Sexta",
        total: dados?.qtdAgendaSexta,
        rendimento: dados?.rendimentoSexta,
      },
      {
        semana: "Sábado",
        total: dados?.qtdAgendaSabado,
        rendimento: dados?.rendimentoSabado,
      },
    ];
    console.log(semanaArray);

    return semanaArray;
  };

  useEffect(() => {
    async function listarEmpresaRelatorio() {
      setloadResponse(false);
      const res = await getListarEmpresaRelatorioContext(dataInicio, dataFim);

      if (res == undefined || res == null) {
        setResLenghtValid(true);
      } else {
        const dadosChart = transformarDadosRelatorio(res as MetricaEmpresa);

        setDadosChart(dadosChart);
        dataset = dadosChart.map((item) => ({
          semana: item.semana,
          total: item.total,
          rendimento: item.rendimento,
        }));
        setDadosRelatorio(res as MetricaEmpresa);

        valoresTotais = dadosChart.map((item) => item.total);

        valorMinimo = Math.min(...valoresTotais);
        valorMaximo = Math.max(...valoresTotais);
        setDadosChart(dadosChart);
      }
      setloadResponse(true);
    }

    listarEmpresaRelatorio();
  }, []);

  return (
    <>
      <section className="w-full">
        {!loadResponse ? (
          <LoaderResponse />
        ) : resLenghtValid ? (
          <NoContentComponent />
        ) : (
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 m-5">
              <Card>
                <h2 className="m-6 text-2xl font-bold">
                  Resumo do Faturamento
                </h2>
                <div className="m-6 d-flex grid flex-col gap-4">
                  <p className="text-base">
                    Total: R${" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.totalSemanal}
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
                  <p className="text-base">
                    Faturamento Máx:{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.faturamentoMaximo}
                    </span>
                  </p>

                  <p className="text-base">
                    Faturamento Mín:{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.faturamentoMinimo}
                    </span>
                  </p>
                </div>
              </Card>
              <Card>
                <h2 className="m-6 text-2xl font-bold">Top 5 Servicos</h2>
                <div className="m-6 d-flex grid flex-col gap-4">
                  <p className="text-base">
                    1.{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.topServicoPrimeiro}
                    </span>
                  </p>
                  <p className="text-base">
                    2.{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.topServicoSegundo}
                    </span>
                  </p>
                  <p className="text-base">
                    3.{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.topServicoTerceiro}
                    </span>
                  </p>
                  <p className="text-base">
                    4.{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.topServicoQuarto}
                    </span>
                  </p>
                  <p className="text-base">
                    5.{" "}
                    <span className="text-base font-bold">
                      {dadosRelatorio?.topServicoQuinto}
                    </span>
                  </p>
                </div>
                <div className="m-6 d-flex grid flex-col gap-4"></div>
              </Card>
            </div>
            <Card className="m-5">
              <h2 className="m-6 text-2xl font-bold">Faturamento Semanal</h2>
              <div className="m-6 h-full">
                {dadosChart != null ? (
                  <BarChart
                    dataset={dataset}
                    xAxis={[
                      {
                        data: [
                          "Domingo",
                          "Segunda",
                          "Terça",
                          "Quarta",
                          "Quinta",
                          "Sexta",
                          "Sábado",
                        ],
                        scaleType: "band",
                      },
                    ]}
                    yAxis={[{ min: valorMinimo, max: valorMaximo }]}
                    series={[
                      {
                        label: "Quantidade",
                        stack: "A",
                        data: dadosChart.map((item) => item.total),
                      },
                      {
                        label: "Rendimento",
                        stack: "A",
                        data: dadosChart.map((item) => item.rendimento),
                      },
                    ]}
                    height={450}
                  />
                ) : (
                  <p>Nenhum dado disponível para exibir o gráfico.</p>
                )}
              </div>
            </Card>
          </div>
        )}
      </section>
    </>
  );
}
