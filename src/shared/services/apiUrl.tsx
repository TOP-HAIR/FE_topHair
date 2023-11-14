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

const requisicaoHttp: RequestResponse = {
  url: "",
  data: [],
  headers: "",
};
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

export const send = (
  type_requisition?: String,
  url?: string,
  data?: [],
  headers?: string
) => {
  switch (type_requisition) {
    case StatusRequestResponseEnum.GET:
      get(requisicaoHttp);
      break;
    case StatusRequestResponseEnum.POST:
      post(requisicaoHttp);
      break;
    case StatusRequestResponseEnum.PUT:
      update(requisicaoHttp);
      break;
    case StatusRequestResponseEnum.PATCH:
      patch(requisicaoHttp);
      break;
    case StatusRequestResponseEnum.DELETE:
      deleteReq(requisicaoHttp);
      break;
    default:
      throw new Error("Request não autorizado.");
  }
};

export default httpClient;
