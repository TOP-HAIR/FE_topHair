import { HomeService } from "../services/homeService";

const homeService = new HomeService();
const objetoString = sessionStorage.getItem("dataEmpresa");
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  homeService.idEmpresa = idEmpresa;
}

export const homeTableContext = async () => {
  try {
    return await homeService.getUltimosAgendamentos();
  } catch (error) {
    return error;
  }
};
