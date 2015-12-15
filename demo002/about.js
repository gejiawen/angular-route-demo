angular.module('Module.About', ['ngRoute'])

.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        });
    }
])

.controller('AboutController', [
    '$scope',
    function ($scope) {
        $scope.msg = 'This is about page';
    }
]);
