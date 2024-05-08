import { CommentServices } from "../services/commentService";
const commentServices = new CommentServices();

const objetoString = sessionStorage.getItem("dataEmpresa");
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  commentServices.idEmpresa = idEmpresa;
}

export const getCommentContext = async () => {
  return await commentServices.getComments();
};
