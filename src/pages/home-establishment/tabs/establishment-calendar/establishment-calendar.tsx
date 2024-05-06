import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAgendamentos } from "../../../../shared/contexts/agendaContext";
import LoaderResponse from "../../../../components/loaderResponse";
import multiMonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Agendamento } from "../../../../shared/entity/agenda";
import FullCalendar from "@fullcalendar/react";

export default function HomeCalendar() {
  const [agenda, setAgenda] = useState<Agendamento[]>([]);
  const [loadResponse, setloadResponse] = useState(false);

  useEffect(() => {
    async function listarAgenda() {
      setloadResponse(false);
      try {
        const res = await getAgendamentos();
        console.log(res);

        if (res != undefined) {
          setAgenda(res.data);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    }
    console.log(new Date("2024-07-08"));
    listarAgenda();
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
            ) : (
              <FullCalendar
                plugins={[multiMonthPlugin, dayGridPlugin, timeGridPlugin]}
                initialView="multiMonthYear"
                initialEvents={agenda}
                locale="pt-BR"
                eventTextColor="#FF00000"
                slotDuration="01:00:00"
                slotLabelFormat={{
                  hour: "2-digit",
                  minute: "2-digit",
                  omitZeroMinute: false,
                  meridiem: "short",
                }}
                eventTimeFormat={{
                  hour: "2-digit",
                  minute: "2-digit",
                  meridiem: false,
                  hour12: false,
                }}
                views={{
                  dayGridWeek: {
                    eventTimeFormat: {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  },
                }}
                selectable={true}
                // selectMirror={true}
                // dayMaxEvents={true}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay",
                }}
              />
            )}
          </div>
        </Card>
      </section>
    </>
  );
}
