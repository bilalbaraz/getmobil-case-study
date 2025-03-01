import axios from "axios";
import { API_CONFIG } from "@config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    baseURL: API_CONFIG.base_url,
    headers: {
      "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default axiosInstance;