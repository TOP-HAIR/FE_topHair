import { Card } from "@mui/material";
import React from "react";
import CalendarList from "./calendar-list/calendar-list";

export default function HomeCalendar() {
  return (
    <>
      <div className="w-full">
        <Card className="m-4">
          <h2 className="m-6 text-2xl font-bold">
            Selecione o card para visualizar
          </h2>
          <div className="m-6">
            <CalendarList />
          </div>
        </Card>
      </div>
    </>
  );
}
