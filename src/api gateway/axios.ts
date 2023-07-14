import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";
import Cookies from 'js-cookie';


const at = Cookies.get('accessToken');
console.log("at :", at);

const axiosInstance: AxiosInstance = axios.create({
  // baseURL:
  headers: {
    Authorization: `Bearer ${at}`,
  },
});

// request config
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get('accessToken');

  if (accessToken as string) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

// response config
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },

  async (error: AxiosError) => {
    if (error.response!.status === 401 || error.response!.status === 403) {

      const response = await axiosInstance.post(`https://api.themoviedb.org/3/authentication/token/new?api_key=${import.meta.env.VITE_API_KEY}`);

      const { request_token } = response.data;

      // error.config.headers.Authorization = `Bearer ${request_token}`;

      Cookies.set('accessToken', request_token, {
        expires: 30,
        secure: import.meta.env.NODE_ENV === 'production', // Ensure secure in production
        sameSite: 'lax',
      });
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${request_token}`;
      return axiosInstance(error.config!);
    } else {
      console.log('no refresh')
    }
  }
);

export default axiosInstance;
