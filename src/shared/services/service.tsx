import { send } from "./apiUrl";
import httpClient from "../services/apiUrl";
import ServiceEntity from "../entity/service";

const serviceUrl = "/service";

const postService = (data: ServiceEntity) => {
  return httpClient
    .post(serviceUrl, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const postTeste = (data: ServiceEntity) => {
  return send("POST", serviceUrl, data);
};

const getService = () => {
  return httpClient
    .get(serviceUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getServiceById = (serviceId: ServiceEntity) => {
  return httpClient
    .get(`${serviceUrl}/${serviceId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const updateService = (serviceId: number, data: ServiceEntity) => {
  return httpClient
    .put(`${serviceUrl}/${serviceId}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

// Função para excluir um item por ID
const deleteService = (serviceId: number) => {
  return httpClient
    .delete(`${serviceUrl}/${serviceId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export {
  postService,
  getService,
  getServiceById,
  updateService,
  deleteService,
};
