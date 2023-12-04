import React from "react";
import { Box, Button, Link } from "@mui/material";
import FormRegister1 from "./components/formRegister1";
import FormRegister2 from "./components/formRegister2";
import { useFormStep } from "../../../shared/hooks/useForm";
import { Empresa } from "../../../shared/entity/authEntity";
import { useForm } from "react-hook-form";
import ReCAPTCHAComponent from "../../../components/reCAPTCHA";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import TophairIcon from "../../../assets/configs/img/logo/white-logo.png";
import { userRegisterContext } from "../../../shared/contexts/authContext";

const form: Empresa = {
  empresa: "",
  email: "",
  cnpj: "",
  senha: "",
  senhaConfirmacao: "",
  cep: "",
  logradouro: "",
  bairro: "",
  numero: 0,
  uf: "",
  localidade: "",
  complemento: "",
};

export default function FormPage() {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<Empresa>();

  const updateValidRecaptcha = (value: boolean) => {
    if (value) {
      trigger().then(() => {
        handleSubmit(onSubmit)();
      });
    }
  };

  const formComponents = [
    <FormRegister1 register={register} getValues={getValues} errors={errors} />,
    <FormRegister2
      register={register}
      setValue={setValue}
      getValues={getValues}
      errors={errors}
    />,
    <ReCAPTCHAComponent updateValidRecaptcha={updateValidRecaptcha} />,
  ];

  const onSubmit = (data: any) => {
    userRegisterContext(data).then((resultado) => {
      console.log(resultado);
    });
    console.log("Form data submitted:", data);
  };

  const { currentComponent, changeStep, currentStep } =
    useFormStep(formComponents);
  const navigate = useNavigate();

  const handleNextStep = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      changeStep(currentStep + 1, e);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center ">
        <Box className="my-5 px-4 py-3 form-modal bg-primary-dark-cyan rounded-lg flex justify-between items-center flex-col gap-4">
          <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
            <Link
              onClick={() => navigateToPage(navigate, "/")}
              underline="hover"
              className="cursor-pointer"
            >
              Voltar para o site
            </Link>
            <div className="w-full flex justify-center">
              <img
                className="min-h-40 min-w-40 max-h-48 max-w-48"
                src={TophairIcon}
                alt="tophair-icon"
              />
            </div>
            {currentComponent}
            <div className="px-4 w-full flex flex-col gap-8">
              <div className="w-full gap-6 flex columns-2">
                <div className="w-1/2">
                  {currentStep === 1 && (
                    <Button
                      variant="contained"
                      className="w-full button-login bg-primary-aqua rounded-sm"
                      onClick={(e: any) => changeStep(currentStep - 1, e)}
                    >
                      Voltar
                    </Button>
                  )}
                </div>
                {currentStep === 0 && (
                  <Button
                    variant="contained"
                    className="w-1/2 button-login bg-primary-aqua rounded-sm"
                    onClick={handleNextStep}
                  >
                    Próximo
                  </Button>
                )}
                {currentStep === 1 && (
                  <Button
                    variant="contained"
                    className="w-1/2 button-login bg-primary-aqua rounded-sm"
                    onClick={handleNextStep}
                  >
                    Cadastrar
                  </Button>
                )}
              </div>
              <p className="text-center text-white text-xs">
                Copyright © made by Top Hair
              </p>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
