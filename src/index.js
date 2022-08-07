import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
    const countryName = event.currentTarget.value.trim();

    ulEl.innerHTML = '';
    divEl.innerHTML = '';

    if (countryName) {
        fetchCountries(countryName).then(countryInfo).catch(onError);
    };

};

function countryInfo(event) {
    if (event.length > 10) {
        return Notiflix.info("Too many matches found. Please enter a more specific name.")
    };
};





    
    


