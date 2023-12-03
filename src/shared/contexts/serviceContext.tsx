import { ApiService } from "../services/serviceService";

const apiService = new ApiService();

const objetoString = sessionStorage.getItem("dataEmpresa");
console.log(objetoString);
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  apiService.idEmpresa = idEmpresa;
  console.log(apiService.idEmpresa);
}

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
