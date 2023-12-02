import { send } from "./apiUrl";
import { AuthService } from "./authService";

export class CommentServices extends AuthService {
  private commentUrl: string;

  constructor() {
    super();
    this.commentUrl = "/avaliacoes";
  }

  async getUltimosAgendamentos() {
    const url = this.commentUrl;
    return await send("GET", url + "/empresa/");
  }

  async getComments() {
    const url = this.commentUrl;
    return await send("GET", url + `/empresa/${this.idEmpresa}`);
  }
}
