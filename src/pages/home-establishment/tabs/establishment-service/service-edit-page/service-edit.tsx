import React from "react";
import { Card, Link, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { navigateToPage } from "../../../../../shared/hooks/utils/navigatePage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function EditPageService() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full">
        <Card className="h-full m-5 p-6">
          <div className="flex flex-col">
            <Link
              onClick={() => navigateToPage(navigate, -1)}
              underline="hover"
              className="cursor-pointer"
            >
              Voltar
            </Link>
            <div className="max-w-screen-lg    text-center flex flex-col">
              <h2 className="text-2xl font-bold">Serviço</h2>
              <div className="w-full flex flex-col my-10 gap-12">
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  className=""
                  placeholder="Digite o nome do Serviço"
                  size="small"
                />
                <div className="flex wrap gap-6 justify-between">
                  <div className="flex flex-col w-1/2 gap-12">
                    <TextField
                      id="outlined-basic"
                      label="Valor"
                      variant="outlined"
                      placeholder="Digite o valor do Serviço"
                      size="small"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Tipo"
                      variant="outlined"
                      placeholder="Digite o tipo do Serviço"
                      size="small"
                    />
                  </div>
                  <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input type="file" accept="image/*" required />
                  </label>
                </div>

                <TextField
                  id="outlined-basic"
                  label="Descrição"
                  variant="outlined"
                  multiline
                  size="small"
                  rows={8}
                  placeholder="Descreva o Serviço"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
