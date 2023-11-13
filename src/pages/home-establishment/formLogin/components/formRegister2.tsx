import React from "react";
import TophairIcon from "../../../../assets/configs/img/logo/white-logo.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { viaCEP } from "../../../../shared/services/ExternalApis/viaCep";
import { TextField, Link } from "@mui/material";
import { validateCepFormat } from "../../../../shared/hooks/utils/validateInput";
import { AddressData } from "../../../../shared/entity/form";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../../shared/hooks/utils/navigatePage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormRegister2() {
  const [cep, setCep] = React.useState("");
  const [cepError, setCepError] = React.useState<string>("");
  const [addressData, setAddressData] = React.useState<AddressData | null>(
    null
  );
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <Link
          onClick={() => navigateToPage(navigate, "/")}
          underline="hover"
          className="cursor-pointer"
        >
          Voltar para o site
        </Link>
        <div className="w-full flex justify-center">
          <img className="h-28 w-28" src={TophairIcon} alt="tophair-icon" />
        </div>

        <div className="w-full flex gap-8 flex-col p-4">
          <ThemeProvider theme={darkTheme}>
            <TextField
              label="CEP"
              variant="standard"
              size="medium"
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              required
              onChange={(e) => {
                const newCep = e.target.value;
                setCep(newCep);

                if (!validateCepFormat(newCep)) {
                  setCepError("Formato de CEP inválido");
                } else {
                  setCepError("");
                }
              }}
              onBlur={async () => {
                try {
                  const data = await viaCEP(cep);
                  setAddressData(data);
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
              value={addressData?.logradouro || ""}
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
                value={addressData?.bairro || ""}
                disabled={!addressData?.bairro}
              />
              <TextField
                className="w-1/4"
                label="Nº:"
                variant="standard"
                size="medium"
                type="number"
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
                value={addressData?.uf || ""}
                disabled={!addressData?.uf}
              />
              <TextField
                className="w-2/4"
                label="Cidade"
                variant="standard"
                size="medium"
                type="text"
                placeholder="Digite a Cidade"
                value={addressData?.localidade || ""}
                disabled={!addressData?.localidade}
              />
            </div>
            <TextField
              label="Complemento (Opcional)"
              variant="standard"
              size="medium"
              type="text"
              placeholder="Digite o complemento"
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
