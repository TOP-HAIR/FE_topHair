import React, { useState } from "react";
import { FormProps } from "@/shared/entity/formUser";

export function useForm(steps: React.ComponentType[]): FormProps {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e: React.MouseEvent) {
    e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }
  const currentComponent: any = steps[currentStep];

  return {
    currentStep,
    currentComponent,
    changeStep,
  };
}
