import { HomeService } from "../services/homeService";

const homeService = new HomeService();

export const homeTableContext = async () => {
  try {
    return await homeService.getUltimosAgendamentos();
  } catch (error) {
    return error;
  }
};
