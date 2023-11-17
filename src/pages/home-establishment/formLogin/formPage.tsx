import React from "react";
import { Box, Button } from "@mui/material";
import FormRegister1 from "./components/formRegister1";
import FormRegister2 from "./components/formRegister2";
import { useForm } from "../../../shared/hooks/useForm";

export default function FormPage() {
  const formComponents: React.ComponentType[] = [FormRegister1, FormRegister2];
  const { currentComponent, changeStep, currentStep } = useForm(formComponents);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center ">
        <Box className="my-5 px-4 py-3 form-modal bg-primary-dark-cyan rounded-lg flex justify-between items-center flex-col gap-4">
          {React.createElement(currentComponent)}
          <div className="px-4 w-full flex flex-col gap-8">
            <div className="w-full gap-6 flex columns-2">
              <div className="w-1/2">
                {currentStep > 0 && (
                  <Button
                    variant="contained"
                    className="w-full button-login bg-primary-aqua rounded-sm"
                    onClick={(e) => changeStep(currentStep - 1, e)}
                  >
                    Voltar
                  </Button>
                )}
              </div>
              <Button
                variant="contained"
                className="w-1/2 button-login bg-primary-aqua rounded-sm"
                onClick={(e) => changeStep(currentStep + 1, e)}
              >
                Próximo
              </Button>
            </div>
            <p className="text-center text-white text-xs">
              Copyright © made by Top Hair
            </p>
          </div>
        </Box>
      </div>
    </>
  );
}
