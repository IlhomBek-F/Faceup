import axios, { AxiosResponse } from "axios";
import { normalizeResponseData } from "../helper";

export const baseURL = import.meta.env.VITE_API_URL
export const apiKey = import.meta.env.VITE_API_KEY

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
        Promise.reject(error.toJSON() || error.message);
    }
);

http.interceptors.response.use(({data}) => {
    if(data.url) return data.url;

    const resImagesLength = data.results?.length || data.length;
    const images = data.results || data;
    
    return normalizeResponseData(resImagesLength, images, data.total)as unknown as AxiosResponse<any, any>
}, error => {
    return Promise.reject(error.toJSON())
})

