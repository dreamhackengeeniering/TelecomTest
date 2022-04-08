const { response } = require("express");

const weatherInfra = new (require("./services/getWeatherService"))();

class getCurrencyWheater {
  async getCurrencyCity(req, res) {
    let city = req.params.city;
    let response = {};
    if (city == undefined) {
      response = await weatherInfra.getLocation();
      city = response.city;
    }

    const dataWeather = await weatherInfra.getWeather(city);
    response = { dataWeather };

    res.json(response);
  }
}

module.exports = getCurrencyWheater;
