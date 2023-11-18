import httpClient from "./apiUrl";
import { UserLogin } from "../entity/Auth";

const userUrl = "/login";

const getUser = (data: UserLogin) => {
  return httpClient
    .post(userUrl, data)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export { getUser };
