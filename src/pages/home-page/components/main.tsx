import React from "react";
import AboutUs from "./main/about-us";
import OurProject from "./main/our-project";
import Comments from "./main/commets";
import ProjectTeam from "./main/teams";
import Button from "@mui/material/Button";

export default function HomeMain() {
  return (
    <>
      <div className="relative">
        <div className="page-layout-1x relative">
          <div className="grid-home-width mx-auto">
            <div className="page-layout-1x flex items-center mx-8 ">
              <div className="flex flex-col gap-14 h-80 top-0">
                <div className="grid gap-4">
                  <h1 className="text-4xl uppercase font-bold max-w-lg">
                    Anime seu dia
                    <span className="color-terciary-light-green">
                      {" "}
                      admirando{" "}
                    </span>
                    sua beleza
                  </h1>
                  <p className="font-family-dm-sans text-xl">
                    Com Tophair, agende seus compromissos de beleza com
                    facilidade e estilo!
                  </p>
                </div>
                <div className="flex gap-5">
                  <Button
                    className="uppercase bg-primary-cyan w-64 text-lg h-10 font-semibold"
                    variant="contained"
                  >
                    Entrar como cliente
                  </Button>
                  <Button
                    className="uppercase bg-primary-aqua w-64 text-lg font-semibold"
                    variant="contained" 
                  >
                    Entrar como empresa
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full page-layout-background absolute bottom-0 h-32"></div>
        </div>
        <AboutUs />
        <OurProject />
        <Comments />
        <ProjectTeam />
      </div>
    </>
  );
}
