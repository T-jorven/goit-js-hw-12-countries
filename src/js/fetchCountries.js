import { baseCountryUrl } from './index.js'
/* 
const filterRequest = '?fields=name;capital;population;languages;flag'

const fetchCountries = searchQuery => {
  return fetch(`${baseCountryUrl}${searchQuery}${filterRequest}`)
    .then(responce => {
      if (!responce.ok) {
        throw Error(responce.status);
      }

      return responce.json()
    })
}

export default fetchCountries */


const inputField = document.querySelector(".js-input-search");


//getting input value

inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    
  let countryName = event.currentTarget.value;
  
  //passing the input value to the fetch function
   fetchCountry(countryName);
    
}




//fetching country API
function fetchCountry (country) {
  
   fetch(`https://restcountries.com/v2/name/${country}`).then(response => {

  return response.json();
}).then(country => {
  console.log(country)
})
  .catch(error => {
    console.log(error);
  });

}
