import axios from "axios";

const services = axios.create({
  baseURL: "https://65120a8bb8c6ce52b39544b4.mockapi.io/service",
});

export default services;
