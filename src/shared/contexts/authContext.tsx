import { UserLogin, userData, Empresa } from "@/shared/entity/authEntity";
import httpClient from "@/shared/services/apiUrl";
import { AuthService } from "@/shared/services/authService";

const authService = new AuthService();

export const userLoginContext = async (data: UserLogin) => {
  try {
    const user = await authService.postUserLogin(data);
    console.log(data);
    loginStorage(user);
  } catch (error) {
    console.error("Acesso negado.");
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
