import React, { useRef } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
} from "@mui/material";

import { EmpresaData } from "@/shared/entity/authEntity";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormRegister1({
  data,
  updateFieldHandler,
}: EmpresaData) {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const passwordInputRef1 = useRef<HTMLInputElement>(null);
  const passwordInputRef2 = useRef<HTMLInputElement>(null);

  const handleClickShowPassword = (passwordRedNumber: number) => {
    if (passwordRedNumber == 1) {
      setShowPassword1((show) => !show);
      if (passwordInputRef1.current) {
        const length = passwordInputRef1.current.value.length;
        setTimeout(() => {
          if (passwordInputRef1.current) {
            passwordInputRef1.current.selectionStart = length;
            passwordInputRef1.current.selectionEnd = length;
          }
        }, 0);
      }
    }
    if (passwordRedNumber == 2) {
      setShowPassword2((show) => !show);
      if (passwordInputRef2.current) {
        const length = passwordInputRef2.current.value.length;
        setTimeout(() => {
          if (passwordInputRef2.current) {
            passwordInputRef2.current.selectionStart = length;
            passwordInputRef2.current.selectionEnd = length;
          }
        }, 0);
      }
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-8 flex-col p-4">
          <ThemeProvider theme={darkTheme}>
            <TextField
              label="Empresa"
              variant="standard"
              size="medium"
              type="text"
              value={data.empresa || ""}
              onChange={(e) => updateFieldHandler("empresa", e.target.value)}
              placeholder="Digite o nome da empresa"
            />
            <TextField
              label="Email"
              variant="standard"
              size="medium"
              type="text"
              value={data.email || ""}
              onChange={(e) => updateFieldHandler("email", e.target.value)}
              placeholder="Digite seu Email"
            />
            <TextField
              label="CPNJ"
              variant="standard"
              size="medium"
              type="text"
              value={data.cnpj || ""}
              onChange={(e) => updateFieldHandler("cnpj", e.target.value)}
              placeholder="Digite seu CNPJ"
            />
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword1 ? "text" : "password"}
                inputRef={passwordInputRef1}
                placeholder="Digite sua Senha"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword(1)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={data.senha || ""}
                onChange={(e) => updateFieldHandler("senha", e.target.value)}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirme sua Senha:
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword2 ? "text" : "password"}
                inputRef={passwordInputRef2}
                placeholder="Repita sua Senha"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword(2)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={data.senhaConfirmacao || ""}
                onChange={(e) =>
                  updateFieldHandler("senhaConfirmacao", e.target.value)
                }
              />
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
