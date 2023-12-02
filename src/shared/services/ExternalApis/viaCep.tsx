import axios from "axios";
import { AddressData } from "../../entity/authEntity";
import { enviromentsExternalApi } from "../../enviroments/envExternal";

export const viaCEP = (cep: string) => {
  const response = axios.get(
    `${enviromentsExternalApi.api.viaCepApi}/${cep}/json`
  );
  return response;
};
