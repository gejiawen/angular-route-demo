
angular.module('demo001', ['ngRoute'])

.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            })
            .when('/post', {
                templateUrl: 'post.html',
                controller: 'PostController'
            })
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'AboutController'
            })
            .otherwise('/home')
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
        $scope.msg = 'This is home page';
    }
])

.controller('PostController', [
    '$scope',
    function ($scope) {
        $scope.msg = 'This is post page';
    }
])

.controller('AboutController', [
    '$scope',
    function ($scope) {
        $scope.msg = 'This is about page';
    }
]);
