import { instance } from './instance';

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
  try {
    const response = await instance.get<T>(...args);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: Parameters<typeof instance.post>[2],
) => {
  try {
    const response = await instance.post<T>(url, body, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
