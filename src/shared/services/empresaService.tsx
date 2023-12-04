import { EmpresaCadastro } from "../entity/empresaEntity";
import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class EmpresaService extends AuthService {
  private empresaUrl: string;
  private avaliacaoUrl: string;

  constructor() {
    super();
    this.empresaUrl = "/empresas";
    this.avaliacaoUrl = "/avaliacoes";
  }

  async getTop5Empresas(estado: string) {
    const url = this.empresaUrl;
    return await send(
      "GET",
      url + `/top5-avaliadas-por-estado?estado=${estado}`
    );
  }

  async getAvaliacoesEmpresaById(idEmpresa: number) {
    const url = this.avaliacaoUrl;
    return await send("GET", url + `/empresa/${idEmpresa}`);
  }

  async getEmpresaEstado(estado: string = "") {
    const url = this.empresaUrl;
    return await send("GET", url + `/estado?estado=${estado}`);
  }

  async getExportarEmployees() {
    const url = this.authUrl;
    return await send("GET", url + `/exportar-txt/${this.idEmpresa}`);
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

  async getEmpresaById(idEmpresa: number) {
    const url = this.empresaUrl;
    return await send("GET", url + `/buscar-por-id/${idEmpresa}`);
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
