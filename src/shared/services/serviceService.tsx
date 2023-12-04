import { Service, DataService } from "../entity/serviceEntity";
import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class ApiService extends AuthService {
  private serviceUrl: string;

  constructor() {
    super();
    this.serviceUrl = "/servicos";
  }

  async getListaService() {
    return await send("GET", this.serviceUrl + `/empresa/${this.idEmpresa}`);
  }

  async getListaClientService(idEmpresa: number) {
    return await send("GET", this.serviceUrl + `/empresa/${idEmpresa}`);
  }

  async getExportarServicoService() {
    return await send("GET", this.serviceUrl + `/exportar-csv`);
  }

  async postImportService(obj: any) {
    return await send("POST", this.authUrl + `/importacao`, obj);
  }

  async getListaServiceById(id: number) {
    return await send("GET", this.serviceUrl + `/${id}`);
  }

  async deleteService(id: number) {
    const url = this.serviceUrl + `/${id}`;
    return await send("DELETE", url);
  }

  async postService(data: any) {
    const url = this.serviceUrl;
    return await send("POST", url, data);
  }

  async putService(data: Service) {
    const url = this.serviceUrl;
    return await send("PUT", url, data);
  }
}
