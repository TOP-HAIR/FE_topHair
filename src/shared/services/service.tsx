import httpClient from "./apiUrl";
import ServiceEntity from "../entity/service";

const serviceUrl = "/service";

const createService = (data: ServiceEntity) => {
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
  createService,
  getService,
  getServiceById,
  updateService,
  deleteService,
};
