import axios from 'axios';

const DEFAULT_TIMEOUT = 5000;
const REQUEST_DELAY_TIME = 600;
const API_URL = 'https://us-central1-cv-app-17131.cloudfunctions.net/cvApp';
const optimizeSearchRequestTime = config => {
  const { url } = config;
  const isSearchRequest = url.includes('name_like');
  if (isSearchRequest) {
    return new Promise(resolve => setTimeout(() => resolve(config), REQUEST_DELAY_TIME));
  }
  return config;
};

const axiosInstance = axios.create({
  baseURL: `${API_URL}/meetup/api/`,
  timeout: DEFAULT_TIMEOUT,
  responseType: 'json',
});

axiosInstance.interceptors.request.use(config => optimizeSearchRequestTime(config));

export default axiosInstance;
