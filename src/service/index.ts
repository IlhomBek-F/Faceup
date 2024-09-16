import { baseURL, http } from "../http/http-config";

async function getRandomImage() {
  try {
    const res = await http.get(baseURL);
    return res.data
  } catch (error) {
    throw error
  }
}

async function getImageByQuery(query: string) {
  try {
    const res = await http.get(`${baseURL}?query=${query}`);

    return res
  } catch (error) {
    throw error
  }
}

export {getRandomImage, getImageByQuery}