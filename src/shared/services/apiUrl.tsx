import axios from "axios";
import { enviromentsLocal } from "../enviroments/envLocal";
import { enviromentsProd } from "../enviroments/envProd";

let env: string = "";

const urlDoProjeto: string = window.location.href;

if (urlDoProjeto.includes(enviromentsLocal.url)) {
  env = enviromentsLocal.api.URLBASE_API;
} else {
  env = enviromentsProd.api.URLBASE_API;
}

const httpClient = axios.create({
  baseURL: `${env}`,
});

export default httpClient;
