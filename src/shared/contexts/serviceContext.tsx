import { ApiService } from "../services/serviceService";

const apiService = new ApiService();

const objetoString = sessionStorage.getItem("dataEmpresa");
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

export const getListaClientContext = async (id: string = "") => {
  try {
    const idNumber = parseInt(id);
    return await apiService.getListaClientService(idNumber);
  } catch (error) {
    console.log(error);
  }
};

export const getExportarServicoContext = async () => {
  try {
    const res = await apiService.getExportarServicoService();
    console.log(res);
    if (res.data) {
      const blob = new Blob([res.data], { type: res.headers["content-type"] });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Servicos.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      console.log(res);
    } else {
      console.error("A resposta não contém dados");
    }
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
