import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export const http = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Client-ID ${apiKey}`
    }
})

http.interceptors.request.use(
    (config) => config,
    error => {
        Promise.reject(error.response || error.message);
    }
);