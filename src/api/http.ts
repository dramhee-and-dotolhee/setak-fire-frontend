import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST_URL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json',
  },
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
});

export default http;
