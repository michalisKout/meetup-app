import axios from 'axios';

const DEFAULT_TIMEOUT = 5000;
const REQUEST_DELAY_TIME = 600;
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
const optimizeSearchRequestTime = config => {
  const { url } = config;
  const isSearchRequest = url.includes('name_like');
  if (isSearchRequest) {
    return new Promise(resolve => setTimeout(() => resolve(config), REQUEST_DELAY_TIME));
  }
  return config;
};

const axiosInstance = axios.create({
  baseURL: `${CORS_PROXY}/https://cv-app-17131.firebaseapp.com/api/v1/meetup/api/`,
  timeout: DEFAULT_TIMEOUT,
  responseType: 'json',
});

axiosInstance.interceptors.request.use(config => optimizeSearchRequestTime(config));

export default axiosInstance;
