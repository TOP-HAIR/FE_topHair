import { UserLogin } from "../entity/authEntity";
import { send } from "./apiUrl";

export class AuthService {
  private authUrl: string;
  private empresaUrl: string;

  constructor() {
    this.authUrl = "/usuarios";
    this.empresaUrl = "/empresas";
  }

  async postUserLogin(data: UserLogin) {
    const url = this.authUrl;
    return await send("POST", url + "/login", data);
  }

  async getEmpresaInfo(idUser: number) {
    const url = this.empresaUrl;
    return await send("GET", url + `/usuario/${idUser}`);
  }
}
