import { Card } from "@mui/material";
import React from "react";
import CalendarList from "./calendar-list/calendar-list";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function HomeCalendar() {
  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">
            Selecione o card para visualizar
          </h2>
          <div className="m-6">

            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">junho</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">julho</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">Agosto</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">Setembro</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>


            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">Outubro</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="w-64 h-48 rounded-md bg-black shadow-xl shadow-slate-300 border-2 mb-6 mr-6 float-left">
              <div className="w-full h-12 bg-white flex justify-center items-center">
                <p className="text-xl font-bold">Novembro</p></div>
              <div className="w-full h-4/5 bg-[#0f3d3a] flex justify-center items-center">
                <CalendarMonthIcon className="w-24 h-24 text-white" />
              </div>
            </div>

          </div>
        </Card>
      </section>
    </>
  );
}
