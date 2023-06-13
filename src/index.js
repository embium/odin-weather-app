const apiKey = "19784bba1e964c2d9bb233359231206";

const dataCondition = document.querySelector("[data-condition]");
const dataLocation = document.querySelector("[data-location]");
const dataDegrees = document.querySelector("[data-degrees]");
const dataFeelsLike = document.querySelector("[data-feels-like]");
const dataWindMph = document.querySelector("[data-wind-mph]");
const dataHumidity = document.querySelector("[data-humidity]");
const dataErrorMsg = document.querySelector("[data-error-msg]");
const dataSubmit = document.querySelector("[data-submit]");
const dataInput = document.querySelector("[data-submit] input");

dataSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  dataErrorMsg.style.display = "none";
  getLocationData(dataInput.value);
});

function getLocationData(location) {
  let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        manipulateDom(data);
      } else {
        dataErrorMsg.style.display = "block";
      }
    })
    .catch((error) => console.error(error));
}

function parseLocationData(data) {
  let city = data.name;
  let state = data.region;
  return { city, state };
}

function parseWeatherData(data) {
  let currentTime = data.last_updated;
  let currentTemp = data.temp_f;
  let currentWeather = data.condition.text;
  let currentHumidity = data.humidity;
  let currentWind = data.wind_mph;
  let currentFeelsLike = data.feelslike_f;
  return {
    currentTime,
    currentTemp,
    currentWeather,
    currentHumidity,
    currentWind,
    currentFeelsLike,
  };
}

function manipulateDom(data) {
  let locationData = parseLocationData(data.location);
  let weatherData = parseWeatherData(data.current);
  dataLocation.innerText = `${locationData.city}, ${locationData.state}`;
  dataCondition.innerText = weatherData.currentWeather;
  dataDegrees.innerText = parseInt(weatherData.currentTemp);
  dataFeelsLike.innerText = `FEELS LIKE: ${parseInt(
    weatherData.currentFeelsLike
  )}`;
  dataWindMph.innerText = `WIND: ${weatherData.currentWind} MPH`;
  dataHumidity.innerText = `HUMIDITY: ${weatherData.currentHumidity}`;
}

let location = "London, UK";
getLocationData(location);
