import axios from 'axios';

const baseUrl = `https://restcountries.eu/rest/v2/all`;

const getCountries = async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data;
};

export default getCountries;
