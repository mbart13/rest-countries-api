import axios from 'axios';
import Country from 'models/Country';

const baseUrl = 'https://restcountries.eu/rest/v2/all';

const getCountries = async (): Promise<Country[]> => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export default getCountries;
