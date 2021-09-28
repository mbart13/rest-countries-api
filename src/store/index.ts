import Country from 'models/Country';
import { atom, selector } from 'recoil';
import Regions from 'enums/Regions';
import { getCountries } from 'helpers/api';

export const countriesState = atom<Country[]>({
  key: 'countriesState',
  default: [],
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const countries = getCountries();
      setSelf(countries);
    },
  ],
});

export const regionFilterState = atom({
  key: 'regionFilterState',
  default: Regions.All,
});

export const searchQueryState = atom({
  key: 'searchQueryState',
  default: '',
});

export const currentPageState = atom({
  key: 'currentPageState',
  default: 0,
});

export const filteredByRegionCountriesState = selector({
  key: 'filteredByRegionCountriesState',
  get: ({ get }) => {
    const countries = get(countriesState);
    const filter = get(regionFilterState);
    if (filter === Regions.All) {
      return countries;
    }
    return countries.filter(country => country.region === filter);
  },
});

export const filteredCountriesState = selector({
  key: 'filteredCountriesState',
  get: ({ get }) => {
    const countries = get(filteredByRegionCountriesState);
    const searchQuery = get(searchQueryState);
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
});
