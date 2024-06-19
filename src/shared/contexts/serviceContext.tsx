import { ApiService } from "../services/serviceService";

const apiService = new ApiService();

const objetoString = sessionStorage.getItem("dataEmpresa");
console.log(objetoString);
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  apiService.idEmpresa = idEmpresa;
}

export const getServiceContext = async () => {
  return await apiService.getListaService();
};

export const postServiceEstablishmentContext = async (obj: any) => {
  console.log(obj);
  const res = await apiService.postService(obj);
  console.log(res);
  await apiService.getVincularService(res.idServico);
  return await apiService.getListaService();
};

export const putServiceEstablishmentContext = async (obj: any, id: string) => {
  const res = await apiService.putService(obj, id);
  await apiService.getVincularService(res.data.idServico);
  return await apiService.getListaService();
};

export const getListaClientContext = async (id: string = "") => {
  const idNumber = parseInt(id);
  return await apiService.getListaClientService(idNumber);
};

export const getExportarServicoContext = async () => {
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
};

export const getEmpresaEstadoFiltroContext = async (filtro: string) => {
  if (filtro) {
    const estado = localStorage.getItem("estado");

    if (estado) {
      const res = await apiService.getEmpresaEstadoFiltro(estado, filtro);
      if (res == undefined || res.data.length == 0) {
        return;
      }
      console.log(res.data);
      return res.data;
    }
  }
};

export const postServiceContext = async () => {
  return await apiService.getListaService();
};

export const getServiceByIdContext = async (id: string) => {
  const idNumber = parseInt(id);
  return await apiService.getListaServiceById(idNumber);
};
