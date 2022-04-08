const weatherInfra = new (require("./services/getWeatherService"))();

class GetLocation {
  async getLocationCity(req, res) {
    const response = await weatherInfra.getLocation();
    res.json(response);
  }
}

module.exports = GetLocation;
