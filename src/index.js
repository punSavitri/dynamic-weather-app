//console.log("hello testing....");
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  //console.log(searchInputElement);
  let cityElement = document.querySelector("#current-weather-city");
  cityElement.innerHTML = searchInputElement.value;
}
//added submit event
let searchForm = document.querySelector("#search-form");
// console.log(searchForm);
searchForm.addEventListener("submit", handleSearchSubmit);