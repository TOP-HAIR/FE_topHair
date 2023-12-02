import { HomeService } from "../services/homeService";

const homeService = new HomeService();

export const homeTableContext = async () => {
  try {
    const dataEmpresa = JSON.stringify(sessionStorage.getItem("dataEmpresa"));
    return await homeService.getUltimosAgendamentos();
  } catch (error) {
    return error;
  }
};
