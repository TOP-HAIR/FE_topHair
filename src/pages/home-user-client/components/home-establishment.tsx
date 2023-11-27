import React from "react";
import { Breadcrumbs, Link, Rating, Typography } from "@mui/material";
import CardEstablishment from "./card-establishment";

export default function ClientHomeEstablishment() {
  return (
    <>
      <div className="w-full">
        <div className="px-8 w-full flex justify-center">
          <div className="grid-home-width w-full">
            <Breadcrumbs className="pt-24 pb-4" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <section className="flex justify-center">
          <div className="mb-4 px-6 grid-home-width w-full flex flex-col gap-4">
            <div className="bg-gray-800 h-24 w-full rounded linear-gradient-client flex items-center justify-center">
              <h1 className="text-4xl text-white font-medium">Barbearias</h1>
            </div>
            <div>
              <CardEstablishment />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
