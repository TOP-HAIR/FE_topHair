import React from "react";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function HomeEmployees() {
  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <div className="flex justify-between flex-wrap items-center mr-4">
            <h2 className="m-6 text-2xl font-bold">
              Profissionais do estabelecimento
            </h2>
            <Link to="/establishment/employees/add">
              <Button className="bg-terciary-light-green" variant="contained">
                + Adicionar Profissional
              </Button>
            </Link>
          </div>
          <div className="m-6"></div>
        </Card>

      </section>
    </>
  );
}
