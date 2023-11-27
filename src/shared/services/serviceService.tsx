import Service, { DataService } from "../entity/serviceEntity";
import { send } from "./apiUrl";

export class ApiService {
  private serviceUrl: string;

  constructor() {
    this.serviceUrl = "/servicos";
  }

  async getListaService() {
    return await send("GET", this.serviceUrl + `/empresa/${1}`);
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
