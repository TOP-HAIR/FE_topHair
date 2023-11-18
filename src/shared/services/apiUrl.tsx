import axios from "axios";
import { enviromentsLocal } from "../enviroments/envLocal";
import { enviromentsProd } from "../enviroments/envProd";
import RequestResponse from "../entity/RequestResponse";
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

const httpClient = axios.create({
  baseURL: `${env}`,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
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
