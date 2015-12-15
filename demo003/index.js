angular.module('demo003', ['ngRoute'])

.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            })
            .when('/trip', {
                templateUrl: 'trip.html',
                controller: 'TripController'
            })
            .otherwise('/home');
    }
])

.controller('Demo', [
    '$scope',
    function ($scope) {

    }
])

.controller('HomeController', [
    '$scope',
    function ($scope) {

    }
])

.controller('TripController', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
        $timeout(function () {
            $scope.ticket = '上海 -> 澳大利亚'
        }, 4000);
    }
])
