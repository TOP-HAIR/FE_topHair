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
  FormHelperText,
} from "@mui/material";
import InputMask from "react-input-mask";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormRegister1({ register, errors, getValues }: any) {
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
              {...register("empresa", {
                required: "Este campo é obrigatório",
              })}
              placeholder="Digite o nome da empresa"
              error={Boolean(errors.empresa)}
              helperText={errors.empresa?.message}
            />
            <TextField
              label="Email"
              variant="standard"
              size="medium"
              type="text"
              {...register("email", {
                required: "Este campo é obrigatório",
              })}
              placeholder="Digite seu Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <InputMask
              mask="99.999.999/9999-99"
              maskPlaceholder=""
              defaultValue=""
              {...register("cnpj", {
                required: "Este campo é obrigatório",
                pattern: {
                  value: /\d/,
                  message: "Deve conter pelo menos um número",
                },
              })}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="CNPJ"
                  variant="standard"
                  size="medium"
                  type="text"
                  placeholder="Digite seu CNPJ"
                  error={Boolean(errors.cnpj)}
                  helperText={errors.cnpj?.message}
                />
              )}
            </InputMask>

            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
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
                {...register("senha", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]*$/,
                    message:
                      "Deve conter pelo menos uma letra, um número e um caractere especial",
                  },
                })}
                error={Boolean(errors.senha)}
              />
              {errors.senha && (
                <FormHelperText className="text-red-500">
                  {errors.senha?.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirme sua Senha:
              </InputLabel>
              <Input
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
                {...register("senhaConfirmacao", {
                  required: "Este campo é obrigatório",
                  validate: (value: string) =>
                    value === getValues("senha") || "As senhas não coincidem",
                })}
                error={Boolean(errors.senhaConfirmacao)}
                helperText={errors.senhaConfirmacao?.message}
              />
              {errors.senhaConfirmacao && (
                <FormHelperText className="text-red-500">
                  {errors.senhaConfirmacao?.message}
                </FormHelperText>
              )}
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
