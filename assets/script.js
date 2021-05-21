// a couple of consts that I can think of at the momement
function initPage() {
  const inputEl = document.getElementById("city-input");
  const searchEl = document.getElementById("search-button");
  const clearEl = document.getElementById("clear-history");
  const nameEl = document.getElementById("city-name");
  const currentPicEl = document.getElementById("current-pic");
  const currentTempEl = document.getElementById("temperature");
  const currentHumidityEl = document.getElementById("humidity");
  const currentWindEl = document.getElementById("wind-speed");
  const currentUVEl = document.getElementById("UV-index");
  const historyEl = document.getElementById("history");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log(searchHistory);

  const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
  //  When search button is clicked, read the city name typed by the user

  
}
initPage();
