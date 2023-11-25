import { AddressData } from "@/shared/entity/authEntity";
import { viaCEP } from "@/shared/services/ExternalApis/viaCep";

export const checkCEP = (e: string) => {
  const cep = e.replace(/\D/g, "");
  let endereco: AddressData;

  return viaCEP(cep)
    .then((res) => {
      endereco = res;
    })
    .catch((erro) => {
      throw erro;
    });
};
