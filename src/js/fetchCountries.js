export default class ApiServer{
    constructor() {
        this.searchCountry = '';
    }

    fetchCountry() {
        let url = `https://restcountries.com/v2/name/${this.searchCountry}`
        
   return fetch(url).then(response => {
    
  return response.json();
})

}
    get country() {
        return this.searchCountry;
    }

    set country(newCountry) {
        this.searchCountry = newCountry;
    }
}
