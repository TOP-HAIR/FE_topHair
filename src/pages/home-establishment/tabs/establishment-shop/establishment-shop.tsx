import React from "react";
import { Card, TextField, Button } from "@mui/material";

export default function HomeShop() {
  return (
    <>
      <section className="w-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">Perfil do Estabelecimento</h2>
          <div className="m-6">
            <form className="max-w-screen-lg text-center flex flex-col gap-12">
              <div>
                <h2 className="m-0 flex self-start font-bold mb-2">Foto do Banner</h2>
                <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                  <span className="drop-title">Drop files here</span>
                  or
                  <input type="file" accept="image/*" />
                </label>
              </div>
              <div className="w-full flex flex-col gap-12">

                <div className="flex wrap gap-6 justify-between">
                  <div className="flex flex-col w-1/2 gap-12">

                    <TextField
                      id="outlined-basic"
                      label="Nome estabelecimento"
                      variant="outlined"
                      placeholder="Digite o nome do seu estabelecimento"
                      size="small"
                    />

                    <div>
                      <h2 className="m-0 flex self-start font-bold mb-2">Foto do perfil</h2>
                      <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                        <span className="drop-title">Drop files here</span>
                        or
                        <input type="file" accept="image/*" />
                      </label>
                    </div>

                  </div>

                </div>

                <TextField
                  id="outlined-basic"
                  label="Descrição perfil"
                  variant="outlined"
                  multiline
                  size="small"
                  rows={8}
                  placeholder="Descreva o perfil do seu estabelecimento"
                />
              </div>
              <div className="flex justify-between">
                <Button
                  className="w-48"
                  variant="outlined"
                >
                  Visualizar
                </Button>
                <Button className="w-48" variant="contained" type="submit">
                  Atualizar perfil
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
}
