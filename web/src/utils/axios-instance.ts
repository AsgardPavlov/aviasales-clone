import axios from 'axios';
import { SERVER_API_URL } from './variables';

export const axiosInstanceWithoutCredentials = axios.create({
  baseURL: SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosInstance = axios.create({
  baseURL: SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
