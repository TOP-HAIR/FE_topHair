import React, { useRef, useState } from "react";
import TophairIcon from "../../../assets/configs/img/logo/white-logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserLogin } from "@/shared/entity/form";
import {
  TextField,
  Link,
  Button,
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
    if (passwordInputRef.current) {
      const length = passwordInputRef.current.value.length;
      setTimeout(() => {
        if (passwordInputRef.current) {
          passwordInputRef.current.selectionStart = length;
          passwordInputRef.current.selectionEnd = length;
        }
      }, 0);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    event.target.value = trimmedValue.trim();
  };

  const onSubmit: SubmitHandler<UserLogin> = (data) =>
    alert(JSON.stringify(data));

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center ">
        <Box className="px-4 py-3 form-modal bg-primary-dark-cyan rounded-lg flex justify-between items-center flex-col">
          <form
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  label="Email"
                  variant="standard"
                  size="medium"
                  type="email"
                  placeholder="Digite seu Email"
                  {...register("email", {
                    required: "Campo é Obrigatório",
                  })}
                  onChange={handleEmailChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
                <FormControl
                  error={Boolean(errors.password)}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    inputRef={passwordInputRef}
                    placeholder="Digite sua Senha"
                    {...register("password", {
                      required: "Campo é obrigatório",
                    })}
                    aria-describedby="component-error-text"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText id="component-error-text">
                    {errors.password && errors.password.message}
                  </FormHelperText>
                </FormControl>
              </ThemeProvider>
            </div>

            <div className="w-full flex flex-col items-center gap-12">
              <p className="text-white text-sm">
                Ainda não tem uma conta ?{" "}
                <Link href="/form" underline="hover">
                  cadastre-se aqui
                </Link>
              </p>
              <Button
                variant="contained"
                className="button-login bg-primary-aqua w-48 rounded-sm"
                type="submit"
                value="submit"
              >
                Entrar
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
