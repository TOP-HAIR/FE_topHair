import { EmployeeCadastro, EmpresaCadastro } from "../entity/empresaEntity";
import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class EmpresaService extends AuthService {
  private empresaUrl: string;

  private usuarioUrl: string;

  constructor() {
    super();
    this.empresaUrl = "/empresas";
    this.usuarioUrl = "/usuarios";
  }



  async getTop5Empresas() {
    const url = this.empresaUrl;
    return await send("GET", url + "/top5-avaliadas-por-estado?estado=SP");
  }

  async getEployeesEmpresa() {
    const url = this.authUrl;
    return await send("GET", url + `/empresa/${this.idEmpresa}`);
  }

  async createEmployee(data: EmployeeCadastro) {
    const url = this.usuarioUrl;
    data.idEmpresa = this.idEmpresa;
    return await send("POST", url + "/cadastrar", data)
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
