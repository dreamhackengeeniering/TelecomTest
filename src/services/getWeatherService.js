const { response } = require("express");
const fetch = require("node-fetch");
class CityWeather {
  getLocation() {
    const response = fetch("http://ip-api.com/json/").then((response) => {
      return response.json();
    });
    return response;
  }
  getWeather(city) {
    const response = fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=d0319fc21177d521c3e5e10b23fce47c"
    ).then((response) => {
      return response.json();
    });
    return response;
  }
  forecastWeather(cnt, city) {
    const response = fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&cnt=" +
        cnt +
        "&id=524901&appid=d0319fc21177d521c3e5e10b23fce47c"
    ).then((response) => {
      return response.json();
    });
    return response;
  }
}

module.exports = CityWeather;
