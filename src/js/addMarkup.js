import { REFS } from './refs.js';
import debounce from 'lodash.debounce';
import FetchCountry from './fetchCountries'
import countryCard from '../partials/country-card.hbs'
import countryList from '../partials/country-list.hbs'
import { notify } from './notification'

const countryApi = new FetchCountry(); 

REFS.INPUT_SEARCH.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(event) {
   if (!event.target.value) {
    return
   }
  
  countryApi.country = event.target.value;
  
  
  //passing the input value to the fetch function
  countryApi.fetchCountry().then(createMarkup)
   
}


//create markup

function createMarkup(country) {
 
 
  if (country.length > 10) {
    notify.ERROR('Too many matches found. Please enter a more specific query!');
     REFS.COUNTRY_WRAPPER.innerHTML = '';
    return
  }
  if (country.length === 1) {
    REFS.COUNTRY_WRAPPER.innerHTML = countryCard(country);
  return
  }
  if (country.length < 10) {
       REFS.COUNTRY_WRAPPER.innerHTML = countryList(country);
    return
  }
  
}

