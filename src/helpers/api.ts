import axios from 'axios';
import Country from 'models/Country';

const baseUrl = 'https://restcountries.com/v2/all';

export const getCountries = async () => {
  const { data }: { data: Country[] } = await axios.get(baseUrl);
  return data;
};
