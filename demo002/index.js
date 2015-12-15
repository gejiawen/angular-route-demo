
angular.module('demo002', [
    'ngRoute',
    'Module.Home',
    'Module.Post',
    'Module.About'
])

.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise('/home');
        // $locationProvider.html5Mode(true);
    }
])

.controller('Demo', [
    '$scope',
    function ($scope) {

    }
])

