// Define the AngularJS application with ngAnimate dependency for animations
angular.module('weatherApp', ['ngAnimate'])
  .controller('WeatherController', ['$scope', 'weatherService', function($scope, weatherService) {
    $scope.city = '';
    $scope.weather = null;
    $scope.errorMessage = '';

    $scope.getWeather = function() {
      console.log("Fetching weather for:", $scope.city);
      $scope.errorMessage = '';
      weatherService.fetchWeather($scope.city)
        .then(function(response) {
          console.log("API Response:", response.data);
          $scope.weather = response.data;
        })
        .catch(function(error) {
          console.error("API Error:", error);
          if (error.data && error.data.message) {
            $scope.errorMessage = error.data.message;
          } else {
            $scope.errorMessage = "Error fetching weather data. Please check the city name and try again.";
          }
          $scope.weather = null;
        });
    };
  }]);
