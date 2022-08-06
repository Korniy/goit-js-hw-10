const BASE_URL = 'https://restcountries.com/v2';
const FIELDS = '?fields=name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}${FIELDS}`).then((response) => response.json());
};
    
export {fetchCountries}