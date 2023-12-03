export interface FormProps {
  currentStep: number;
  currentComponent: React.ComponentType<FormProps>;
  changeStep: (i: number, e: React.MouseEvent) => void;
}

export interface UserLogin {
  email: string;
  senha: string;
}

export interface dadosEmployee {
  cpf: string;
  email: string;
  idUsuario: number;
  isProfissional: boolean | null;
  nomeCompleto: string;
  telefone: string;
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
  complemento: string | "";
}

export interface AddressDataResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  numero: number;
  estado: string;
  cidade: string;
  complemento: string | "";
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

export type ValidRecaptchaType = {
  updateValidRecaptcha: (value: boolean) => void;
};

export interface dataUser {
  nomeCompleto: string;
  email: string;
  senha: string;
  isProfissional: boolean;
}
