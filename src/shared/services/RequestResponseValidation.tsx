import RequestResponse from "../entity/RequestResponse";
import httpClient from "../services/apiUrl";

const post = (requisicaoHttp: RequestResponse) => {
  if (requisicaoHttp.url === undefined) {
    throw new Error("A URL da requisição HTTP é indefinida.");
  }

  if (requisicaoHttp.data === undefined) {
    throw new Error("Dados indefinidos ou nulos.");
  }

  return httpClient
    .post(requisicaoHttp.url, requisicaoHttp.data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const get = (requisicaoHttp: RequestResponse) => {
  if (requisicaoHttp.url === undefined) {
    throw new Error("A URL da requisição HTTP é indefinida.");
  }
  // console.log(requisicaoHttp);

  return httpClient
    .get(requisicaoHttp.url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const update = async (requisicaoHttp: RequestResponse) => {
  if (requisicaoHttp.url === undefined) {
    throw new Error("A URL da requisição HTTP é indefinida.");
  }

  if (requisicaoHttp.data === undefined) {
    throw new Error("Dados indefinidos ou nulos.");
  }

  return await httpClient
    .put(requisicaoHttp.url, requisicaoHttp.data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const patch = async (requisicaoHttp: RequestResponse) => {
  if (requisicaoHttp.url === undefined) {
    throw new Error("A URL da requisição HTTP é indefinida.");
  }

  if (requisicaoHttp.data === undefined) {
    throw new Error("Dados indefinidos ou nulos.");
  }

  return await httpClient
    .put(requisicaoHttp.url, requisicaoHttp.data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const deleteReq = async (requisicaoHttp: RequestResponse) => {
  if (requisicaoHttp.url === undefined) {
    throw new Error("A URL da requisição HTTP é indefinida.");
  }
  return await httpClient
    .delete(requisicaoHttp.url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export { post, get, update, patch, deleteReq };
