import React, { useState } from "react";
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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TopHair from "../../../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import { Link, Outlet } from "react-router-dom";

export default function HomeEstablishment() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="w-80 h-screen rounded-none home-establishment-background-menu overflow-auto">
          <div className="flex justify-center">
            <img className="h-40" src={TopHair} alt="Logo da TopHair" />
          </div>
          <div className="p-2 space-y-4 flex justify-between flex-col h-full">
            <div className="p-2 space-y-4">
              <Link
                aria-label="dashboard"
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "home"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/home"
                onClick={() => handleLinkClick("home")}
              >
                <HomeIcon />
                <span className="-mr-1 font-medium">Inicio</span>
              </Link>

              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "calendar"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/calendar"
                onClick={() => handleLinkClick("calendar")}
              >
                <CalendarMonthIcon />
                <span>Calendário</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "reports"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/reports"
                onClick={() => handleLinkClick("reports")}
              >
                <AssignmentIcon />
                <span>Relatórios</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "shop"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/shop"
                onClick={() => handleLinkClick("shop")}
              >
                <StoreIcon />
                <span>Estabelecimento</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "service"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/service"
                onClick={() => handleLinkClick("service")}
              >
                <BuildCircleIcon />
                <span>Serviços</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "comments"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/comments"
                onClick={() => handleLinkClick("comments")}
              >
                <InsertCommentIcon />
                <span>Comentários</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "employees"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/employees"
                onClick={() => handleLinkClick("employees")}
              >
                <PeopleIcon />
                <span>Funcionários</span>
              </Link>
              <Link
                className={`px-4 py-3 text-gray-100 flex items-center space-x-4 group cursor-pointer ${
                  activeLink === "hireEmployees"
                    ? "button-link-establishment text-white rounded-lg"
                    : "hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white hover:rounded-lg"
                }`}
                to="/establishment/hireEmployees"
                onClick={() => handleLinkClick("hireEmployees")}
              >
                <GroupAddIcon />
                <span>Contratar</span>
              </Link>
            </div>
            <Link
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 hover:rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 group cursor-pointer"
              to="/"
            >
              <LogoutIcon />
              <span>Logout</span>
            </Link>
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
          <Outlet />
        </div>
      </div>
    </>
  );
}
