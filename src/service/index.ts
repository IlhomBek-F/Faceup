import { baseURL, http } from "../http/http-config";

async function getRandomImage() {
  try {
    const res = await http.get(`${baseURL}/photos`);
    return res
  } catch (error) {
    throw error
  }
}

async function getImageByQuery(query: string) {
  try {
    const res = await http.get(`${baseURL}search/photos/?per_page=50&query=${query}`);

    return res.results
  } catch (error) {
    throw error
  }
}

export {getRandomImage, getImageByQuery}