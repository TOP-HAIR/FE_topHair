import React, { useState } from "react";
import { Box, Button, Link } from "@mui/material";
import FormRegister1 from "./components/formRegister1";
import FormRegister2 from "./components/formRegister2";
import { useFormStep } from "../../../shared/hooks/useForm";
import { Empresa } from "@/shared/entity/Auth";
import { SubmitHandler } from "react-hook-form";
import ReCAPTCHAComponent from "@/components/reCAPTCHA";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import TophairIcon from "../../../assets/configs/img/logo/white-logo.png";

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
  const [data, setData] = useState(form);
  const [validRecaptcha, setValidRecaptcha] = useState(false);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const updateValidRecaptcha = (value: boolean) => {
    setValidRecaptcha(true);
  };

  const formComponents = [
    <FormRegister1 data={data} updateFieldHandler={updateFieldHandler} />,
    <FormRegister2 data={data} updateFieldHandler={updateFieldHandler} />,
    <ReCAPTCHAComponent
      validRecaptcha={validRecaptcha}
      updateValidRecaptcha={updateValidRecaptcha}
    />,
  ];
  const { currentComponent, changeStep, currentStep } =
    useFormStep(formComponents);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Empresa> = async (dataObj: Empresa) => {
    try {
      let obj = {
        empresa: dataObj.empresa,
        email: dataObj.email,
        cnpj: dataObj.cnpj,
        senha: dataObj.senha,
        senhaConfirmacao: dataObj.senhaConfirmacao,
        endereco: {
          cep: dataObj.cep,
          logradouro: dataObj.logradouro,
          bairro: dataObj.bairro,
          numero: dataObj.numero,
          uf: dataObj.uf,
          localidade: dataObj.localidade,
          complemento: dataObj.complemento,
        },
      };
      console.log(obj);
    } catch (error) {
      console.error("Erro ao chamar o endpoint:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center ">
        <Box className="my-5 px-4 py-3 form-modal bg-primary-dark-cyan rounded-lg flex justify-between items-center flex-col gap-4">
          <form className="w-full h-full">
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
                  {/* {currentStep === 1 && ( */}
                  <Button
                    variant="contained"
                    className="w-full button-login bg-primary-aqua rounded-sm"
                    onClick={(e) => changeStep(currentStep - 1, e)}
                  >
                    Voltar
                  </Button>
                  {/* // )} */}
                </div>
                {/* {currentStep === 0 && ( */}
                <Button
                  variant="contained"
                  className="w-1/2 button-login bg-primary-aqua rounded-sm"
                  onClick={(e) => changeStep(currentStep + 1, e)}
                >
                  Próximo
                </Button>
                {/* // )} */}
                {/* {currentStep === 1 && !isDadosObjEmpty && (
                  <Button
                    variant="contained"
                    className="w-1/2 button-login bg-primary-aqua rounded-sm"
                  >
                    Cadastrar
                  </Button>
                )} */}
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
