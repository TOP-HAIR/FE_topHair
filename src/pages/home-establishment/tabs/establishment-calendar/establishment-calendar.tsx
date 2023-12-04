import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { getAgendaMesesAgendadosContext } from "@/shared/contexts/agendaContext";
import LoaderResponse from "../../../../components/loaderResponse";
import NoContentComponent from "../../../../components/noContent";

export default function HomeCalendar() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [meses, setMeses] = useState<string[]>([]);

  useEffect(() => {
    async function listarAvaliacoes() {
      setloadResponse(false);
      try {
        const res = await getAgendaMesesAgendadosContext();
        console.log(res);
        if (res == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setMeses(res.data);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarAvaliacoes();
  }, []);
  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">
            Selecione o card para visualizar
          </h2>
          <div className="m-6">
            {!loadResponse ? (
              <LoaderResponse />
            ) : resLenghtValid ? (
              <NoContentComponent />
            ) : (
              <div className="w-full flex flex-wrap gap-10 ">
                {meses.map((mes) => (
                  <div
                    key={mes}
                    className="min-w-96 w-80 rounded-md bg-black card-service border-2 grow cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="w-full h-12 bg-white flex justify-center items-center">
                      <p className="text-xl font-bold">{mes}</p>
                    </div>
                    <div className="w-full h-48 bg-[#0f3d3a] flex justify-center items-center">
                      <CalendarMonthIcon className="w-24 h-24 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}
