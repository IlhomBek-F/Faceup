import axios from "axios";
import { QueryType } from "@/hooks/useFetchImageByQuery";
import { http } from "@/http/http-config";
import { TOTAL_IMAGE_PER_PAGE } from "../utils/helper";
import { BASE_API_URL } from "@/utils/constant";

export let downloadSignal = new AbortController()

async function getRandomImage() {
  try {
    const res = await http.get(`${BASE_API_URL}/photos?per_page=${TOTAL_IMAGE_PER_PAGE}`);
    return res
  } catch (error) {
    throw error
  }
}

async function getImageByQuery(query: QueryType) {
  const { q = '', page = 1 } = query;

  try {
    const res = await http.get(`${BASE_API_URL}search/photos/?query=${q}&page=${page}&per_page=${TOTAL_IMAGE_PER_PAGE}`);

    return res
  } catch (error) {
    throw error
  }
}

async function getDownloadImageUrl(imageId: string) {
  try {
    const resUrl = await http.get(imageId, { signal: downloadSignal.signal }) as string;
    const resBlob = await axios.get(resUrl, { responseType: 'blob', signal: downloadSignal.signal });
    const downloadUrl = URL.createObjectURL(resBlob.data);

    return downloadUrl;
  } catch (error) {
    throw error
  }
}

export function cancelRequest() {
  downloadSignal.abort();
  downloadSignal = new AbortController()
}

export { getRandomImage, getImageByQuery, getDownloadImageUrl }