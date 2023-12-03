import Swal from "sweetalert2";
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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getListEmployees = async () => {
  try {
    const res = await empresaService.getEployeesEmpresa();
    if (res == undefined || res.data.length == 0) {
      return;
    }
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (idUser: number) => {
  try {
    await empresaService.deleteEployeeEmpresa(idUser);

    Swal.fire("Sucesso", "Usuário excluído com sucesso.", "success");
  } catch (error) {
    console.error("Erro ao excluir o funcionário:", error);
    Swal.fire("Erro", "Erro ao excluir o funcionário.", "error");
  }
};
