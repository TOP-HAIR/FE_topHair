import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class HomeService extends AuthService {
  private agendasUrl: string;

  constructor() {
    super();
    this.agendasUrl = "/agendas";
  }

  async getUltimosAgendamentos() {
    const url = this.agendasUrl;
    return await send("GET", url + `/ultimos-agendamentos/${this.idEmpresa}`);
  }
}
