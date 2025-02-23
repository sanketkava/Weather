// Service to handle API calls to OpenWeatherMap
angular.module('weatherApp')
  .service('weatherService', ['$http', function($http) {
    // IMPORTANT: Replace the string below with your valid API key.
    const API_KEY = '9e6f33248b12e0c86358310bd6b2391f';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    this.fetchWeather = function(city) {
      const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      return $http.get(url);
    };
  }]);
