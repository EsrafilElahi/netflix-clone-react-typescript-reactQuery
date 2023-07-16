import axios from "./axios";
import { AxiosResponse } from "axios";


export async function fetchData(url: string): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get(url, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log('err in get fetchTrendings :', error)
  }
}

export function fetchHomePage(urls: string[]): Promise<any[]> {
  const promises = urls.map((url) => fetchData(url));
  return Promise.allSettled(promises);
}
