import { send } from "./apiUrl";

export class CommentServices {
  private commentUrl: string;

  constructor() {
    this.commentUrl = "/avaliacoes";
  }

  async getUltimosAgendamentos() {
    const url = this.commentUrl;
    return await send("GET", url + "/empresa/");
  }
}
