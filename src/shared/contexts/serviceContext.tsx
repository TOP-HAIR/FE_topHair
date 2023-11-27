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

export const getServiceByIdContext = async (id: string) => {
  try {
    const idNumber = parseInt(id);
    return await apiService.getListaServiceById(idNumber);
  } catch (error) {
    console.log(error);
  }
};
