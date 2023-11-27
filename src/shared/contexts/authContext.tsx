import { UserLogin, userData, Empresa } from "@/shared/entity/authEntity";
import httpClient from "@/shared/services/apiUrl";
import { AuthService } from "@/shared/services/authService";
import { toast } from "react-toastify";

const authService = new AuthService();

export const userLoginContext = async (data: UserLogin) => {
  try {
    const user = await authService.postUserLogin(data);
    if (user != undefined && user != null) {
      const data = await authService.getEmpresaInfo(user?.userId);
      sessionStorage.setItem("dataEmpresa", JSON.stringify(data));
    }
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
    console.error("Acesso negado.");
  }
};

const loginStorage = (data: userData) => {
  sessionStorage.setItem("dataLocal", JSON.stringify(data));
  httpClient.defaults.headers.Authorization = `Bearer ${data.token}`;
  window.location.href = "/establishment/home";
};