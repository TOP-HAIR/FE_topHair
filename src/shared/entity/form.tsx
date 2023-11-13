export interface FormProps {
  currentStep: number;
  currentComponent: React.ComponentType<FormProps>;
  changeStep: (i: number, e: React.MouseEvent) => void;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AddressData {
  logradouro: string;
  bairro: string;
  numero: string;
  uf: string;
  localidade: string;
  complemento: string;
}
