import React from "react";
import { Card } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function HomeReports() {
  return (
    <>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </>
  );
}
