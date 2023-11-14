import axios from "axios";
import { AddressData } from "../../entity/formUser";
import { enviromentsExternalApi } from "../../enviroments/envExternal";

export const viaCEP = async (cep: string): Promise<AddressData> => {
  const response = await axios.get(
    `${enviromentsExternalApi.api.viaCepApi}/${cep}/json`
  );
  return response.data;
};
