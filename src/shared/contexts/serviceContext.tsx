import { ApiService } from "../services/serviceService";

const apiService = new ApiService();

export const getServiceContext = async () => {
  try {
    return await apiService.getListaService();
  } catch (error) {
    console.log(error);
  }
};

export const postServiceContext = async () => {
  try {
    return await apiService.getListaService();
  } catch (error) {
    console.log(error);
    console.error("Erro ao encontrar serviços.");
  }
};
