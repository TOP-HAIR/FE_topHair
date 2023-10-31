import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://65120a8bb8c6ce52b39544b4.mockapi.io",
});

export default httpClient;
