import React from "react";
import "../../../assets/configs/css/home-establishment.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StoreIcon from "@mui/icons-material/Store";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import TopHair from "../../../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import HomeList from "./establishment-home/home-list/components/home-list";

export default function HomeEstablishment() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-80 h-screen rounded-none home-establishment-background-menu overflow-auto">
          <div className="p-2 space-y-4">
            <div className="flex justify-center">
              <img className="h-40" src={TopHair} alt="Logo da TopHair" />
            </div>
            <a
              aria-label="dashboard"
              className="px-4 py-3 text-gray-100 flex items-center space-x-4 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 cursor-pointer"
            >
              <HomeIcon />
              <span className="-mr-1 font-medium">Inicio</span>
            </a>

            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <CalendarMonthIcon />
              <span>Calendário</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <AssignmentIcon />
              <span>Relatórios</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <StoreIcon />
              <span>Estabelecimento</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <BuildCircleIcon />
              <span>Serviços</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <InsertCommentIcon />
              <span>Comentários</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <PeopleIcon />
              <span>Funcionários</span>
            </a>
            <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer">
              <LogoutIcon />
              <span>Logout</span>
            </a>
          </div>
        </div>

        <div className="w-full overflow-auto">
          <nav className="h-16 bg-white border-b border-gray-300 ">
            <div className="h-full flex justify-between items-center px-5">
              <button id="menuBtn">
                <MenuIcon />
              </button>
              <div className="space-x-4"></div>
            </div>
          </nav>
          <HomeList />
        </div>
      </div>
    </>
  );
}
