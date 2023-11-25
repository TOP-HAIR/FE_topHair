import { send } from "./apiUrl";

export class HomeService {
  private authUrl: string;

  constructor() {
    this.authUrl = "/agendas";
  }

  async getUltimosAgendamentos() {
    const url = this.authUrl;
    return await send("GET", url + "/ultimos-agendamentos");
  }
}
