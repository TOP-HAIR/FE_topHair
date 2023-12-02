import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class EmpresaService extends AuthService {
  private empresaUrl: string;

  constructor() {
    super();
    this.empresaUrl = "/empresas";
  }

  async getTop5Empresas() {
    const url = this.empresaUrl;
    return await send("GET", url + "/top5-avaliadas-por-estado?estado=SP");
  }

  async getEmpresaInfo() {
    const url = this.empresaUrl;
    return await send("GET", url + `/usuario/${this.idUser}`);
  }
}
