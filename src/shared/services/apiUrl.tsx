import axios, { AxiosError } from "axios";
import { enviromentsLocal } from "../enviroments/envLocal";
import { enviromentsProd } from "../enviroments/envProd";
import RequestResponse from "../entity/requestResponseEntity";
import { StatusRequestResponseEnum } from "../entity/enum/statusRequestResponse";
import {
  post,
  get,
  update,
  patch,
  deleteReq,
} from "../services/RequestResponseValidation";

let env: string = "";

const urlDoProjeto: string = window.location.href;

if (urlDoProjeto.includes(enviromentsLocal.url)) {
  env = enviromentsLocal.api.URLBASE_API;
} else {
  env = enviromentsProd.url;
}

console.log(env)

const httpClient = axios.create({
  baseURL: `${env}`,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("dataLocal");
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
      config.headers.ContentType = `application/json`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 500) {
        console.log(error.response.status);
        throw new Error("Erro de servidor.");
      }
      if (error.response?.status === 400) {
        console.log(error.response.status);
        throw new Error("Erro de requisição.");
      }
      if (error.response?.status === 401) {
        console.log(error.response.status);
        sessionStorage.clear();
        throw new Error("Usuário não Autorizado");
      }
      if (error.response?.status === 403) {
        console.log(error.response.status);
        throw new Error("Caso o erro persista, contate o administrador");
      }
    }
    return Promise.reject(error);
  }
);

export const send = async (
  type_requisition?: string,
  url?: string,
  data?: any,
  headers?: string
): Promise<any> => {
  const requisicaoHttp: RequestResponse = {
    url: url,
    data: data,
    headers: headers,
  };

  switch (type_requisition) {
    case StatusRequestResponseEnum.GET:
      return await get(requisicaoHttp);
    case StatusRequestResponseEnum.POST:
      return await post(requisicaoHttp);
    case StatusRequestResponseEnum.PUT:
      return await update(requisicaoHttp);
    case StatusRequestResponseEnum.PATCH:
      return await patch(requisicaoHttp);
    case StatusRequestResponseEnum.DELETE:
      return await deleteReq(requisicaoHttp);
    default:
      throw new Error("Request não autorizado.");
  }
};

export default httpClient;
