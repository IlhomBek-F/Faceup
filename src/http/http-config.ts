import axios, { AxiosResponse } from "axios";
import { normalizeResponseData } from "../helper";

export const baseURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export const http = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Client-ID ${apiKey}`,
        'Accept-Version': 'v1',
    }
})

http.interceptors.request.use(
    (config) => config,
    error => {
        Promise.reject(error.response || error.message);
    }
);

http.interceptors.response.use((res: AxiosResponse<any, any>) => {
    const totalImage = res.data.results?.length || res.data.length;
    const images = res.data.results || res.data;
   console.log(res.data)

    return normalizeResponseData(totalImage, images)as unknown as AxiosResponse<any, any>
})