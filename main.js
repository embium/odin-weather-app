/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = \"19784bba1e964c2d9bb233359231206\";\n\nconst dataCondition = document.querySelector(\"[data-condition]\");\nconst dataLocation = document.querySelector(\"[data-location]\");\nconst dataDegrees = document.querySelector(\"[data-degrees]\");\nconst dataFeelsLike = document.querySelector(\"[data-feels-like]\");\nconst dataWindMph = document.querySelector(\"[data-wind-mph]\");\nconst dataHumidity = document.querySelector(\"[data-humidity]\");\nconst dataErrorMsg = document.querySelector(\"[data-error-msg]\");\nconst dataSubmit = document.querySelector(\"[data-submit]\");\nconst dataInput = document.querySelector(\"[data-submit] input\");\n\ndataSubmit.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  dataErrorMsg.style.display = \"none\";\n  getLocationData(dataInput.value);\n});\n\nfunction getLocationData(location) {\n  let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;\n  fetch(url)\n    .then((response) => response.json())\n    .then((data) => {\n      if (!data.error) {\n        manipulateDom(data);\n      } else {\n        dataErrorMsg.style.display = \"block\";\n      }\n    })\n    .catch((error) => console.error(error));\n}\n\nfunction parseLocationData(data) {\n  let city = data.name;\n  let state = data.region;\n  return { city, state };\n}\n\nfunction parseWeatherData(data) {\n  let currentTime = data.last_updated;\n  let currentTemp = data.temp_f;\n  let currentWeather = data.condition.text;\n  let currentHumidity = data.humidity;\n  let currentWind = data.wind_mph;\n  let currentFeelsLike = data.feelslike_f;\n  return {\n    currentTime,\n    currentTemp,\n    currentWeather,\n    currentHumidity,\n    currentWind,\n    currentFeelsLike,\n  };\n}\n\nfunction manipulateDom(data) {\n  let locationData = parseLocationData(data.location);\n  let weatherData = parseWeatherData(data.current);\n  dataLocation.innerText = `${locationData.city}, ${locationData.state}`;\n  dataCondition.innerText = weatherData.currentWeather;\n  dataDegrees.innerText = parseInt(weatherData.currentTemp);\n  dataFeelsLike.innerText = `FEELS LIKE: ${parseInt(\n    weatherData.currentFeelsLike\n  )}`;\n  dataWindMph.innerText = `WIND: ${weatherData.currentWind} MPH`;\n  dataHumidity.innerText = `HUMIDITY: ${weatherData.currentHumidity}`;\n}\n\nlet location = \"London, UK\";\ngetLocationData(location);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;