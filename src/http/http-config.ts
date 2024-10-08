import axios, { AxiosError } from "axios";
import { normalizeResponseData } from "../utils/helper";
import { API_KEY, BASE_API_URL } from "@/utils/constant";

export enum STATUS_CODE {
    NOT_FOUND = '404'
}

export const http = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`,
    }
})

http.interceptors.request.use(
    (config) => config,
    error => {
        Promise.reject(error || error.message);
    }
);

http.interceptors.response.use(({ data }) => {
    if (data.url) return data.url;

    const resImagesLength = data.results?.length || data.length;
    const images = data.results || data;

    if (data.results && !data.total) {
        throw new AxiosError('Image not found', STATUS_CODE.NOT_FOUND);;
    }

    return normalizeResponseData(resImagesLength, images, data.total, data.total_pages)
}, error => {
    const backendErrorMessage = error.response?.data.errors?.join(' ') || 'An unknown error occurred';
    // Optionally, reject with a more specific error message
    return Promise.reject(new Error(backendErrorMessage));
})

