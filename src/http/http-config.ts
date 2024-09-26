import axios, { AxiosResponse } from "axios";
import { normalizeResponseData } from "../utils/helper";
import { API_KEY, BASE_API_URL } from "@/utils/constant";

export const http = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`,
        'Accept-Version': 'v1',
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

    return normalizeResponseData(resImagesLength, images, data.total) as unknown as AxiosResponse<any, any>
}, error => {
    const backendErrorMessage = error.response?.data.errors?.join(' ') || 'An unknown error occurred';
    // Optionally, reject with a more specific error message
    return Promise.reject(new Error(backendErrorMessage));
})

