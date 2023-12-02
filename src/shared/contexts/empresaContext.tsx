import { EmpresaService } from "../services/empresaService";

const empresaService = new EmpresaService();

const objetoString = sessionStorage.getItem("dataEmpresa");
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  empresaService.idEmpresa = idEmpresa;
}

export const getTop5EmpresasContext = async () => {
  try {
    const res = await empresaService.getTop5Empresas();
    if (res == undefined || res.data.length == 0) {
      return;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
