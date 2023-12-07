import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
const baseUrl = process.env.REACT_APP_API_URL || "";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useApi = <T,>() => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const sendRequest = async (
    method: HttpMethod,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const axiosConfig: AxiosRequestConfig = {
        method,
        url: `${baseUrl}${url}`,
        data,
        ...config,
      };

      const axiosResponse: AxiosResponse<T> = await axios(axiosConfig);

      setResponse({
        data: axiosResponse.data,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setResponse({ data: null, loading: false, error });
    }
  };

  return { ...response, sendRequest };
};

export default useApi;
