import axios from 'axios';
import Country from 'models/Country';

const { REACT_APP_ACCESS_KEY } = process.env;

const baseUrl = `http://api.countrylayer.com/v2/all?access_key=${REACT_APP_ACCESS_KEY}`;

export const getCountries = async () => {
  const { data }: { data: Country[] } = await axios.get(baseUrl);
  return data;
};
