import { UserLogin } from "../entity/authEntity";
import { send } from "./apiUrl";

export class AuthService {
  private authUrl: string;

  constructor() {
    this.authUrl = "/usuarios";
  }

  async postUserLogin(data: UserLogin) {
    const url = this.authUrl;
    return await send("POST", url + "/login", data);
  }
}
