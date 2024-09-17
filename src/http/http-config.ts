import axios from "axios";
import { normalizeResponseData } from "../helper";

export const baseURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export const http = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Client-ID ${apiKey}`,
        ['Accept-Version']: 'v1'
    }
})

http.interceptors.request.use(
    (config) => config,
    error => {
        Promise.reject(error.response || error.message);
    }
);

http.interceptors.response.use(({data}) => {
    const totalImage = data.results.length || data.length;
    const images = data.results || data;
   

    return normalizeResponseData(totalImage, images)
})