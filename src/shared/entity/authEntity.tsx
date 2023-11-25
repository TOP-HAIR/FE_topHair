export interface FormProps {
  currentStep: number;
  currentComponent: React.ComponentType<FormProps>;
  changeStep: (i: number, e: React.MouseEvent) => void;
}

export interface UserLogin {
  email: string;
  senha: string;
}

export interface UserInformation {
  cod_usuario: number;
  email: string;
  token: string;
}

export interface AddressData {
  cep: string;
  logradouro: string;
  bairro: string;
  numero: number;
  uf: string;
  localidade: string;
  complemento: string;
}

export interface Empresa {
  empresa: string;
  email: string;
  cnpj: string;
  senha: string;
  senhaConfirmacao: string;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: number;
  uf: string;
  localidade: string;
  complemento: string;
}

export interface userData {
  userId: number;
  nomeCompleto: string;
  email: string;
  token: string;
}

export interface FormRegister1Props {
  register: any;
  setValue: any;
  errors: any;
}

export type EmpresaData = {
  data: {
    empresa: string;
    email: string;
    cnpj: string;
    senha: string;
    senhaConfirmacao: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export type EnderecoData = {
  data: {
    cep: string;
    logradouro: string;
    bairro: string;
    numero: number;
    uf: string;
    localidade: string;
    complemento: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export type ValidRecaptchaType = {
  updateValidRecaptcha: (value: boolean) => void;
};
