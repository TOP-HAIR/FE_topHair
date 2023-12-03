import { AddressDataResponse, UserLogin, dataUser } from "../entity/authEntity";
import { send } from "./apiUrl";

export class AuthService {
  private _authUrl: string;
  private _enderecoUrl: string;

  private _idEmpresa: number;
  private _idUser: number;

  constructor() {
    this._authUrl = "/usuarios";
    this._enderecoUrl = "/enderecos";
    this._idEmpresa = 0;
    this._idUser = 0;
  }

  get authUrl(): string {
    return this._authUrl;
  }

  get enderecoUrl(): string {
    return this._enderecoUrl;
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
    const url = this._authUrl;
    return await send("POST", url + "/login", data);
  }

  async postUserCadastro(data: dataUser) {
    const url = this._authUrl;
    return await send("POST", url + "/cadastrar", data);
  }

  async postEndereco(data: AddressDataResponse) {
    const url = this._enderecoUrl;
    return await send("POST", url + "/cadastrar", data);
  }

  async putVincularUsuarioEmpresa(idUsuario: number, idEmpresa: number) {
    const url = this._authUrl;
    return await send(
      "PUT",
      url + `/vincular-empresa/${idUsuario}/${idEmpresa}`
    );
  }
}
