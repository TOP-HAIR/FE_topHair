import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { viaCEP } from "../../../../shared/services/ExternalApis/viaCep";
import { TextField } from "@mui/material";
import { validateCepFormat } from "../../../../shared/hooks/utils/validateInput";
import { AddressData } from "../../../../shared/entity/authEntity";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormRegister2({
  register,
  setValue,
  getValues,
  errors,
}: any) {
  const [cep, setCep] = React.useState("");
  const [cepError, setCepError] = React.useState<string>("");

  const handleSetData = useCallback(
    (data: AddressData) => {
      setValue("bairro", data.bairro);
      setValue("localidade", data.localidade);
      setValue("uf", data.uf);
      setValue("logradouro", data.logradouro);
    },
    [register]
  );
  const fetchCepData = async () => {
    try {
      const dataCEP = await viaCEP(cep);
      handleSetData(dataCEP.data);
      console.log(dataCEP.data);
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
      setCepError("Erro ao buscar CEP:");
    }
  };

  useEffect(() => {
    if (cep) {
      setValue("cep", cep);
    }
  }, [cep]);

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-8 flex-col p-4">
          <ThemeProvider theme={darkTheme}>
            <TextField
              label="CEP"
              variant="standard"
              size="medium"
              type="text"
              placeholder="Digite o CEP"
              {...register("cep", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 9,
                },
                minLength: {
                  value: 8,
                  message: "CEP deve ter pelo menos 5 caracteres",
                },
              })}
              onChange={(e) => {
                const newCep = e.target.value;
                setCep(newCep);

                if (!validateCepFormat(newCep)) {
                  setCepError("Formato de CEP inválido");
                } else {
                  setCepError("");
                }
              }}
              onBlur={() => fetchCepData()}
              error={Boolean(errors.cep)}
              helperText={errors.cep?.message}
            />
            <TextField
              label="Logradouro"
              variant="standard"
              size="medium"
              type="text"
              {...register("logradouro", {
                required: "Este campo é obrigatório",
              })}
              error={Boolean(errors.logradouro)}
              helperText={errors.logradouro?.message}
              focused
            />
            <div className="flex gap-4">
              <TextField
                className="w-3/4"
                label="Bairro"
                variant="standard"
                size="medium"
                type="text"
                {...register("bairro", {
                  required: "Este campo é obrigatório",
                })}
                error={Boolean(errors.bairro)}
                helperText={errors.bairro?.message}
                focused
              />
              <TextField
                className="w-1/4"
                label="Nº:"
                variant="standard"
                size="medium"
                type="number"
                {...register("numero", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /\d/,
                    message: "Deve conter pelo menos um número",
                  },
                })}
                error={Boolean(errors.numero)}
                helperText={errors.numero?.message}
                placeholder="Número"
              />
            </div>
            <div className="flex gap-4">
              <TextField
                className="w-2/4"
                label="Estado"
                variant="standard"
                size="medium"
                type="text"
                {...register("uf", {
                  required: "Este campo é obrigatório",
                })}
                focused
                error={Boolean(errors.uf)}
                helperText={errors.uf?.message}
              />
              <TextField
                className="w-2/4"
                label="Cidade"
                variant="standard"
                size="medium"
                type="text"
                {...register("localidade", {
                  required: "Este campo é obrigatório",
                })}
                error={Boolean(errors.localidade)}
                helperText={errors.localidade?.message}
                focused
              />
            </div>
            <TextField
              label="Complemento (Opcional)"
              variant="standard"
              size="medium"
              type="text"
              {...register("complemento")}
              placeholder="Digite o complemento"
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
