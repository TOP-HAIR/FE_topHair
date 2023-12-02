import { UserLogin, userData, Empresa } from "../entity/authEntity";
import httpClient from "../services/apiUrl";
import { AuthService } from "../services/authService";
import { toast } from "react-toastify";
import { EmpresaService } from "../services/empresaService";

const authService = new AuthService();
const empresaService = new EmpresaService();

export const userLoginContext = async (data: UserLogin) => {
  try {
    const user = await authService.postUserLogin(data);
    loginStorage(user);
    return true;
  } catch (error) {
    toast.info("Dados Incorretos", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.error("Acesso negado.");
    return false;
  }
};

export const userRegisterContext = async (data: Empresa) => {
  try {
    const user = await authService.postUserLogin(data);
  } catch (error) {
    sessionStorage.clear();
    console.error("Acesso negado.");
  }
};

const loginStorage = async (data: userData) => {
  sessionStorage.setItem("dataLocal", JSON.stringify(data));
  httpClient.defaults.headers.Authorization = `Bearer ${data.token}`;
  authService.idUser = data.userId;

  if (data !== undefined && data !== null) {
    try {
      const empresaData = await empresaService.getEmpresaInfo();
      sessionStorage.setItem("dataEmpresa", JSON.stringify(empresaData.data));

      authService.idEmpresa = empresaData.data.idEmpresa;
      empresaService.idEmpresa = empresaData.data.idEmpresa;
    } catch (error) {
      sessionStorage.clear();
      console.error("Erro ao obter informações da empresa:", error);
    }
  }

  window.location.href = "/establishment/home";
};
