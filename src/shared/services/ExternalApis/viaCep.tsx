import axios from "axios";
import { AddressData } from "../../entity/form";

const viaCepBaseUrl = "https://viacep.com.br/ws";

export const viaCEP = async (cep: string): Promise<AddressData> => {
  const response = await axios.get(`${viaCepBaseUrl}/${cep}/json`);
  console.log(response);
  return response.data;
};
