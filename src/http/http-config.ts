import axios from "axios";

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

http.interceptors.response.use((value) => {
    return value.data;
})