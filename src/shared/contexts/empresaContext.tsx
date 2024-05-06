import Swal from "sweetalert2";
import { EmpresaService } from "../services/empresaService";
import axios from "axios";
import { EmployeeCadastro } from "../entity/empresaEntity";

const empresaService = new EmpresaService();

const objetoString = sessionStorage.getItem("dataEmpresa");
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  empresaService.idEmpresa = idEmpresa;
  console.log(empresaService.idEmpresa);
}

export const getEmpresaEstadoContext = async () => {
  try {
    const estado = localStorage.getItem("estado");
    if (estado) {
      const res = await empresaService.getEmpresaEstado(estado);
      if (res == undefined || res.data.length == 0) {
        return;
      }
      console.log(res.data);
      return res.data;
    } else {
      window.location.href = "/client-page";
    }
  } catch (error) {
    console.log(error);
  }
};

export const getExportarEmployeeContext = async () => {
  try {
    const res = await empresaService.getExportarEmployees();
    const blob = new Blob([res.data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "funcionarios.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const postImportarEmployeesContext = async () => {
  try {
    const { value: file } = await Swal.fire({
      title: "Selecionar Arquivo",
      input: "file",
    });

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:8080/usuarios/importacao",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Resposta da API:", response.data);
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    }
  } catch (error) {
    console.error("Erro:", error);
  }
};

export const getTop5EmpresasContext = async () => {
  try {
    const estado = localStorage.getItem("estado");
    if (estado) {
      const res = await empresaService.getTop5Empresas(estado);
      if (res == undefined || res.data.length == 0) {
        return;
      }
      console.log(res.data);
      return res.data;
    } else {
      window.location.href = "/client-page";
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEmployeeByIdContext = async (id: string) => {
  try {
    const idNumber = parseInt(id);
    return await empresaService.getEmployeeById(idNumber);
  } catch (error) {
    console.log(error);
  }
};

export const employeeRegisterContext = async (data: EmployeeCadastro) => {
  try {
    const obj = {
      cpf: data.cpf,
      nomeCompleto: data.nomeCompleto,
      email: data.email,
      senha: data.senha,
      telefone: data.telefone,
      empresa: {
        idEmpresa: empresaService.idEmpresa,
      },
    };
    const response = await empresaService.postEmployee(obj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const putEmployeeContext = async (
  data: EmployeeCadastro,
  idEmployee: string
) => {
  try {
    const obj = {
      cpf: data.cpf,
      nomeCompleto: data.nomeCompleto,
      email: data.email,
      senha: data.senha,
      telefone: data.telefone,
      empresa: {
        idEmpresa: empresaService.idEmpresa,
      },
    };
    const response = await empresaService.putEmployee(obj, idEmployee);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const putEstablishmentContext = async (data: any) => {
  const formDataBanner = new FormData();
  formDataBanner.append("arquivo", data.img_banner[0]);
  const formDataPerfil = new FormData();
  formDataPerfil.append("arquivo", data.img_foto[0]);
  const img_banner = await empresaService.postArquivo(formDataBanner);
  const img_perfil = await empresaService.postArquivo(formDataPerfil);

  await empresaService.putVincularEmpresaArquivo(img_banner.id);
  const response = await empresaService.putVincularEmpresaArquivo(
    img_perfil.id
  );

  console.log(response);
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

export const getEmpresaByIdContext = async (id: string) => {
  try {
    const idNumber = parseInt(id);
    return await empresaService.getEmpresaById(idNumber);
  } catch (error) {
    console.log(error);
  }
};

export const getEmpresaContext = async (id: string = "") => {
  try {
    const idNumber = parseInt(id);
    return await empresaService.getEmpresa(idNumber);
  } catch (error) {
    console.log(error);
  }
};

export const getAvaliacoesEmpresaByIdContext = async (id: string) => {
  try {
    const idNumber = parseInt(id);
    return await empresaService.getAvaliacoesEmpresaById(idNumber);
  } catch (error) {
    console.log(error);
  }
};
