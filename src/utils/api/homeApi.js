import axios from "axios";
import { BaseUrl } from "../../resources/config/Config";
import { handleImageUpload } from "../../controllers/firebase_storage";

export const getHome = () => {
  return axios({
    url: `${BaseUrl}/homes`,
    method: "GET",
  });
};

export const postHome = async (title, file1, file2) => {
  const iconUrl = await handleImageUpload(file1, "homes");
  const imageUrl = await handleImageUpload(file2, "homes");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("icon", iconUrl);
  formData.append("image", imageUrl);
  return axios.post(`${BaseUrl}/homes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editHome = async (id, title, file1, file2) => {
  const iconUrl = await handleImageUpload(file1, "homes");
  const imageUrl = await handleImageUpload(file2, "homes");
  const formData = new FormData();
  formData.append("title", title);
  if (iconUrl !== null) {
    formData.append("icon", iconUrl);
  }
  if (imageUrl !== null) {
    formData.append("image", imageUrl);
  }
  return axios.patch(`${BaseUrl}/homes/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteHome = (id) => {
  return axios({
    url: `${BaseUrl}/homes/${id}`,
    method: "DELETE",
  });
};
