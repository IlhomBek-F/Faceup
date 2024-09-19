import axios from "axios";
import { TOTAL_IMAGE_PER_PAGE } from "../helper";
import { baseURL, http } from "../http/http-config";

async function getRandomImage() {
  try {
    const res = await http.get(`${baseURL}/photos?per_page=${TOTAL_IMAGE_PER_PAGE}`);
    return res
  } catch (error) {
    throw error
  }
}

async function getImageByQuery(query: any) {
  const {q = '', page = 1} = query;

  try {
    const res = await http.get(`${baseURL}search/photos/?query=${q}&page=${page}&per_page=${TOTAL_IMAGE_PER_PAGE}`);

    return res
  } catch (error) {
    throw error
  }
}

async function getDownloadImageUrl(imageId: string) {
  try {
    const resUrl = await http.get(imageId) as string;
    const resBlob = await axios.get(resUrl, {responseType: 'blob'});
    const downloadUrl = URL.createObjectURL(resBlob.data);
    
    return downloadUrl;
  } catch (error) {
    throw error
  }
}

export {getRandomImage, getImageByQuery, getDownloadImageUrl}