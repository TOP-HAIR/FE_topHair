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
  async postEmployee(data: any) {
    const url = super.authUrl;
    return await send("POST", url + "/cadastrar", data);
  }

  async putEmployee(data: any, idEmployee: string) {
    console.log(data);
    const url = super.authUrl;
    return await send("PUT", url + `/${idEmployee}`, data);
  }

  async getAvaliacoesEmpresaById(idEmpresa: number) {
    const url = this.avaliacaoUrl;
    return await send("GET", url + `/empresa/${idEmpresa}`);
  }

  async getEmpresaEstado(estado: string = "") {
    const url = this.empresaUrl;
    return await send("GET", url + `/estado?estado=${estado}`);
  }

  async getEmployeeById(id: number) {
    const url = this.authUrl;
    return await send("GET", url + `/${id}`);
  }

  async getListarEmpresaRelatorio(dataInicio: string, dataFim: string) {
    const url = this.empresaUrl;
    console.log(this.idEmpresa);
    return await send(
      "GET",
      url +
        `/metricas/${this.idEmpresa}?dataInicio=${dataInicio}&dataFim=${dataFim}`
    );
  }

  async getExportarEmployees() {
    const url = this.authUrl;
    return await send("GET", url + `/exportar-txt/${this.idEmpresa}`);
  }

  async getEployeesEmpresa() {
    const url = this.authUrl;
    console.log(this.idEmpresa);
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

  async getEmpresa(idEmpresa: number) {
    const url = this.empresaUrl;
    return await send("GET", url + `/${idEmpresa}`);
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

  async postArquivo(data: FormData) {
    return await send("POST", `/arquivos/upload`, data);
  }

  async putVincularEmpresaArquivo(idArquivo: number) {
    return await send(
      "PUT",
      `/arquivos/vincular-empresa/${idArquivo}/${this.idEmpresa}`
    );
  }
}
