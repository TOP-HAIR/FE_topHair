import React from "react";
import { Card } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function HomeService() {
  return (
    <>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </>
  );
}
