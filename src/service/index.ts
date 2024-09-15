import { baseURL, http } from "../http/http-config";

export async function getRandomImage() {
  try {
    const res = await http.get(baseURL);
    return res.data
  } catch (error) {
    throw error
  }
}