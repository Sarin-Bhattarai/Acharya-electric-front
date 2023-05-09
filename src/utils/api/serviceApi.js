import axios from "axios";
import { BaseUrl } from "../../resources/config/Config";

export const getServices = () => {
  return axios({
    url: `${BaseUrl}/services`,
    method: "GET",
  });
};
