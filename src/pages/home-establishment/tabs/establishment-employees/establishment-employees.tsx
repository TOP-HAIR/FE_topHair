import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeEmployees() {
  return (
    <>
      <section className="w-full h-full">
        <Outlet />
      </section>
    </>
  );
}
