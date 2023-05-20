import axios from "axios";
import { BaseUrl } from "../../resources/config/Config";

export const getHome = () => {
  return axios({
    url: `${BaseUrl}/homes`,
    method: "GET",
  });
};

export const postHome = (title, file1, file2) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("icon", file1);
  formData.append("image", file2);
  return axios.post(`${BaseUrl}/homes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
