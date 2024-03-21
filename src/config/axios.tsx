import axios, { AxiosInstance } from "axios";

// Set config defaults when creating the instance
const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com'
});

export default instance;