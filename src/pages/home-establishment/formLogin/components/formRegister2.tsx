import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { viaCEP } from "../../../../shared/services/ExternalApis/viaCep";
import { TextField } from "@mui/material";
import { validateCepFormat } from "../../../../shared/hooks/utils/validateInput";
import {
  AddressData,
  EnderecoData,
} from "../../../../shared/entity/authEntity";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormRegister2({
  data,
  updateFieldHandler,
}: EnderecoData) {
  const [cep, setCep] = React.useState("");
  const [cepError, setCepError] = React.useState<string>("");
  const [addressData, setAddressData] = React.useState<AddressData | null>(
    null
  );

  const fetchData = async () => {
    if (data.cep !== "" && data.cep !== null && data.cep !== undefined) {
      try {
        const dataCEP = await viaCEP(data.cep);

        setCepError("");
      } catch (err) {
        setCepError("CEP não encontrado");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              value={data.cep}
              required
              onChange={(e) => {
                const newCep = e.target.value;
                updateFieldHandler("cep", e.target.value);
                setCep(newCep);

                if (!validateCepFormat(newCep)) {
                  setCepError("Formato de CEP inválido");
                } else {
                  setCepError("");
                }
              }}
              onBlur={async () => {
                try {
                  const dataCEP = await viaCEP(cep);
                  setAddressData(data);
                  updateFieldHandler("logradouro", dataCEP.logradouro);
                  updateFieldHandler("bairro", dataCEP.bairro);
                  updateFieldHandler("localidade", dataCEP.localidade);
                  updateFieldHandler("uf", dataCEP.uf);
                  setCepError("");
                } catch (err) {
                  setCepError("CEP não encontrado");
                }
              }}
              error={Boolean(cepError)}
              helperText={cepError}
            />
            <TextField
              label="Logradouro"
              variant="standard"
              size="medium"
              type="text"
              placeholder="Digite o Logradouro"
              value={data.logradouro || ""}
              onChange={(e) => updateFieldHandler("logradouro", e.target.value)}
              disabled={!addressData?.logradouro}
            />
            <div className="flex gap-4">
              <TextField
                className="w-3/4"
                label="Bairro"
                variant="standard"
                size="medium"
                type="text"
                placeholder="Digite o Bairro"
                value={data.bairro || ""}
                onChange={(e) => updateFieldHandler("bairro", e.target.value)}
                disabled={!addressData?.bairro}
              />
              <TextField
                className="w-1/4"
                label="Nº:"
                variant="standard"
                size="medium"
                type="number"
                value={data.numero || ""}
                onChange={(e) => updateFieldHandler("numero", e.target.value)}
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
                placeholder="Digite o Estado"
                value={data.uf || ""}
                onChange={(e) => updateFieldHandler("uf", e.target.value)}
                disabled={!addressData?.uf}
              />
              <TextField
                className="w-2/4"
                label="Cidade"
                variant="standard"
                size="medium"
                type="text"
                placeholder="Digite a Cidade"
                value={data.localidade || ""}
                onChange={(e) =>
                  updateFieldHandler("localidade", e.target.value)
                }
                disabled={!addressData?.localidade}
              />
            </div>
            <TextField
              label="Complemento (Opcional)"
              variant="standard"
              size="medium"
              type="text"
              value={data.complemento || ""}
              onChange={(e) =>
                updateFieldHandler("complemento", e.target.value)
              }
              placeholder="Digite o complemento"
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
