import axios from './axios.instance';

export const getCityById = async (cityId, cityHandler) => {
  const urlToFetch = `cities/${cityId}`;
  const city = await axios.get(urlToFetch);

  cityHandler(city.data);
};
