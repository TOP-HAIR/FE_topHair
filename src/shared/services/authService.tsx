import { UserLogin } from "../entity/authEntity";
import { send } from "./apiUrl";

export class AuthService {
  private authUrl: string;

  private _idEmpresa: number;
  private _idUser: number;

  constructor() {
    this.authUrl = "/usuarios";
    this._idEmpresa = 0;
    this._idUser = 0;
  }

  get idEmpresa(): number {
    return this._idEmpresa;
  }

  set idEmpresa(value: number) {
    this._idEmpresa = value;
  }

  get idUser(): number {
    return this._idUser;
  }

  set idUser(value: number) {
    this._idUser = value;
  }

  async postUserLogin(data: UserLogin) {
    const url = this.authUrl;
    return await send("POST", url + "/login", data);
  }
}
