import { baseCountryUrl } from './index.js'

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

export default fetchCountries