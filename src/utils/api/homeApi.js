import axios from "axios";
import { BaseUrl } from "../../resources/config/Config";

export const getHome = () => {
  return axios({
    url: `${BaseUrl}/homes`,
    method: "GET",
  });
};
