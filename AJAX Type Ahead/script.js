const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

fetch(endpoint) // returns a promise
 .then(blob => blob.json()) //convert the raw data into json file
 .then(data => cities.push(...data)); //change the entire data into array by spreading the function

function findMatches(wordToMatch, cities) {
return cities.filter(place =>{
    //find any related match if found
    const regex = new RegExp(wordToMatch,'gi'); // look  for g=global(looks in the entire string for any matches) i = case-insensitive match of input city/ state
    return place.city.match(regex) || place.state.match(regex);
});
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map( place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //higlight the part of city name matching the regex
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); //higlight the part of state name matching the regex

        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
</li>`;
    }).join(''); // turns huge array to single string
    suggestions.innerHTML= html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
