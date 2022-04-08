const weatherInfra = new (require("./services/getWeatherService"))();

class GetForecastWeather {
  async getForecastWeather(req, res) {
    let city = req.params.city;
    let response = {};
    if (city == undefined) {
      response = await weatherInfra.getLocation();
      city = response.city;
    }

    const dataWeather = await weatherInfra.forecastWeather(5, city);
    response = { dataWeather };

    res.json(response);
  }
}

module.exports = GetForecastWeather;
