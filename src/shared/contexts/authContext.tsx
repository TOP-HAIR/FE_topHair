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
    sessionStorage.clear();
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
    cadastroEstabelecimento(data);
  } catch (error) {
    sessionStorage.clear();
    console.error("Acesso negado.");
  }
};

export const cadastroEstabelecimento = async (data: Empresa) => {
  if (data !== undefined && data !== null) {
    try {
      let objEmpresa = {
        razaoSocial: data.empresa,
        cnpj: data.cnpj,
      };
      const dataEmpresa = await empresaService.postEmpresaCadastro(objEmpresa);

      let objEndereco = {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        numero: data.numero,
        estado: data.uf,
        cidade: data.localidade,
        complemento: data.complemento,
      };

      const dataEndereco = await authService.postEndereco(objEndereco);

      await empresaService.putVincularEmpresaEndereco(
        dataEmpresa.idEmpresa,
        dataEndereco.idEndereco
      );

      let objUsuario = {
        nomeCompleto: data.empresa,
        email: data.email,
        senha: data.senha,
        isProfissional: true,
      };

      const idUser = await authService.postUserCadastro(objUsuario);

      const dataUser = await authService.putVincularUsuarioEmpresa(
        idUser,
        dataEmpresa.idEmpresa
      );

      if (dataUser != undefined) {
        toast.success("Por favor, preencha os dados corretamente.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        window.location.href = "/login";
      }
    } catch (error) {
      toast.warn("Por favor, preencha os dados corretamente.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      sessionStorage.clear();
      console.error("Erro ao cadastrar a empresa", error);
    }
  }
};

const loginStorage = async (data: userData) => {
  sessionStorage.setItem("dataLocal", JSON.stringify(data));
  httpClient.defaults.headers.Authorization = `Bearer ${data.token}`;
  authService.idUser = data.userId;
  empresaService.idUser = data.userId;

  if (data !== undefined && data !== null) {
    try {
      const empresaData = await empresaService.getEmpresaInfo();
      sessionStorage.setItem("dataEmpresa", JSON.stringify(empresaData.data));

      authService.idEmpresa = empresaData.data.idEmpresa;
      empresaService.idEmpresa = empresaData.data.idEmpresa;
    } catch (error) {
      console.error("Erro ao obter informações da empresa:", error);
    }
  }
  window.location.href = "/establishment/home";
};
