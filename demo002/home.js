angular.module('Module.Home', ['ngRoute'])

.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        });
    }
])

.controller('HomeController', [
    '$scope',
    function ($scope) {
        $scope.msg = 'This is home page';
    }
]);
