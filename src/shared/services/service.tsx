import { send } from "./apiUrl";

export class ApiService {
  private serviceUrl: string;

  constructor() {
    this.serviceUrl = "/service";
  }

  async getListaService() {
    return await send("GET", this.serviceUrl);
  }

  async deleteService(id: number) {
    const url = this.serviceUrl + `/${id}`;
    return await send("DELETE", url);
  }
}
