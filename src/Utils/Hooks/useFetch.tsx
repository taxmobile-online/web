import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
const baseUrl = process.env.REACT_APP_API_URL || "";

const useFetch = <T,>(
  url: string,
  method: HttpMethod = "GET",
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.request({
          url: `${baseUrl}${url}`,
          method,
          ...config,
        });

        const res: any = response.data;
        if (res.data) {
          setData(res.data);
        } else {
          setData(res);
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, config]);

  return { data, loading, error };
};

export default useFetch;
