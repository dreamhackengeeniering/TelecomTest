const express = require('express')
const router = express.Router()

const getLocation = new (require('../getLocation'))
const getCurrencyWeather = new (require('../getCurrencyCity'))
const getForecastWeather = new (require('../getForecastWeather'))


router.get('/v1/location', (req, res) =>{
 getLocation.getLocationCity(req, res)

})

router.get('/v1/current/:city?', (req, res) =>{
   getCurrencyWeather.getCurrencyCity(req, res)
  
  })

router.get('/v1/forecast/:city?', (req, res) =>{
   getForecastWeather.getForecastWeather(req, res)
  
  })
module.exports = router