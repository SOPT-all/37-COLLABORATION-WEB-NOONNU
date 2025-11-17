import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const get = async <T>(...args: Parameters<typeof apiClient.get>) => {
  try {
    const response = await apiClient.get<T>(...args);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: Parameters<typeof apiClient.post>[2]
) => {
  try {
    const response = await apiClient.post<T>(url, body, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
