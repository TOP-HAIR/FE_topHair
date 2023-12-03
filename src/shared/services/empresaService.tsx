import { EmpresaCadastro } from "../entity/empresaEntity";
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

  async getEployeesEmpresa() {
    const url = this.authUrl;
    return await send("GET", url + `/empresa/${this.idEmpresa}`);
  }

  async deleteEployeeEmpresa(idUser: number) {
    const url = this.authUrl;
    return await send("DELETE", url + `/${idUser}`);
  }

  async getEmpresaInfo() {
    const url = this.empresaUrl;
    return await send("GET", url + `/usuario/${this.idUser}`);
  }

  async postEmpresaCadastro(data: EmpresaCadastro) {
    const url = this.empresaUrl;
    return await send("POST", url + "/cadastrar", data);
  }

  async putVincularEmpresaEndereco(idEmpresa: number, idEndereco: number) {
    const url = this.empresaUrl;
    return await send(
      "PUT",
      url + `/vincular-endereco/${idEmpresa}/${idEndereco}`
    );
  }
}
