import axios from "axios";
import { BaseUrl } from "../../resources/config/Config";
import { handleImageUpload } from "../../controllers/firebase_storage";

export const getServices = () => {
  return axios({
    url: `${BaseUrl}/services`,
    method: "GET",
  });
};

export const postService = async (title, description, file) => {
  const imageUrl = await handleImageUpload(file, "homes");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", imageUrl);
  return axios.post(`${BaseUrl}/services`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editService = async (id, title, description, file) => {
  const imageUrl = await handleImageUpload(file, "homes");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (imageUrl !== null) {
    formData.append("image", imageUrl);
  }
  return axios.patch(`${BaseUrl}/services/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteService = (id) => {
  return axios({
    url: `${BaseUrl}/services/${id}`,
    method: "DELETE",
  });
};
