import axios from "axios";

const viaCepBaseUrl = "https://viacep.com.br/ws";

export const fetchViaCEP = async (cep: string) => {
  const response = await axios.get(`${viaCepBaseUrl}/${cep}/json`);
  return response.data;
};
