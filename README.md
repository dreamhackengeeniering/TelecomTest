# api Weather
Esta api nos provee en formato JSON el estado del tiempo de la ciudad actual o cualquier otra ciudad.

## To start

- Primero instalamos las dependencias de nuestro proyecto con ``npm install``
- Para correr nuestro proyecto enviamos el comando ``npm start``
- Para correr los tests enviamos el comando ``npm test``

## Endpoints

- ``v1/location`` => Devuelve los datos de ubicación city según ip-api.
- ``v1/current[/city]`` => City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.

- ``v1/forecast[/city]`` => City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días

## Frameworks and libs

- Express.js       - Se utilizo como framework de node
- chai and mocha   - Se utilizo para construit los test
- node-fetch       - Se utilizo para realizar peticiones


## Apis externas
- ip-api.com 
- api.openweathermap.org

