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

export {getRandomImage, getImageByQuery}