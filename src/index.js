//console.log("hello testing....");
function updateCityTemperature(response) {
  // console.log(response);
  //console.log(response.data.temperature.current);
  let currentTemperatureElement = document.querySelector("#current-weather-temperature-value");
  let temperature = response.data.temperature.current;
  currentTemperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#current-weather-city");
  cityElement.innerHTML = response.data.city;


}
function searchCity(city) {

  //make api call and update the UI 
  let api_key = "4c3a38t82d64bfo4330f17ff02bfbd97";
  let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}`;
  //console.log(api_url);

  //request axios to get update information from api
  axios.get(api_url).then(updateCityTemperature);

}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  //console.log(searchInputElement);



  //calling searchCity() function
  searchCity(searchInputElement.value);
}
//added submit event
let searchForm = document.querySelector("#search-form");
// console.log(searchForm);
searchForm.addEventListener("submit", handleSearchSubmit);