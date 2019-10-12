import axios from 'axios';

const DEFAULT_TIMEOUT = 5000;
const REQUEST_DELAY_TIME = 2000;

const optimizeSearchRequestTime = config => {
  const { url } = config;
  if (url === 'events?name_like=G&_sort=startDate&_order=asc') {
    return new Promise(resolve => setTimeout(() => resolve(config), REQUEST_DELAY_TIME));
  }
  return config;
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: DEFAULT_TIMEOUT,
  responseType: 'json',
});

axiosInstance.interceptors.request.use(config => optimizeSearchRequestTime(config));

export default axiosInstance;
