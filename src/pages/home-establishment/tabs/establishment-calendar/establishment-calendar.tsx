import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAgendamentos } from "../../../../shared/contexts/agendaContext";
import LoaderResponse from "../../../../components/loaderResponse";
import NoContentComponent from "../../../../components/noContent";
import multiMonthPlugin from "@fullcalendar/multimonth";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Agenda } from "../../../../shared/entity/agenda";
import FullCalendar from "@fullcalendar/react";

export default function HomeCalendar() {
  const [agenda, setAgenda] = useState<Agenda[]>([]);

  useEffect(() => {
    async function listarAvaliacoes() {
      setloadResponse(false);
      try {
        const res = await getAgendamentos();
        console.log(res);
        if (res == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setAgenda(res);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    }
    console.log(new Date("2024-07-08"));
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
            <FullCalendar
              plugins={[multiMonthPlugin, dayGridPlugin, timeGridPlugin]} // Alterando os plugins para multiMonthPlugin e timeGridPlugin
              initialView="multiMonthYear"
              initialEvents={[
                {
                  start: "2024-07-08T10:30:00",
                  end: "2024-07-08T11:30:00",
                  title: "{serviço} - {Cliente}",
                  backgroundColor: "#FF0000",
                },
                {
                  date: new Date("2024-07-08 12:01:00.230"),
                  title: "new day",
                  backgroundColor: "#0000FF",
                },
              ]}
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
          </div>
        </Card>
      </section>
    </>
  );
}
