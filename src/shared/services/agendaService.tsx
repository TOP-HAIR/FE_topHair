import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class AgendaServices extends AuthService {
  private agendaUrl: string;

  constructor() {
    super();
    this.agendaUrl = "/agendas";
  }

  async getMesesAgendados() {
    const url = this.agendaUrl;
    return await send("GET", url + `/agendas/empresa/${this.idEmpresa}`);
  }
}
