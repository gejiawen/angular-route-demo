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
                controller: 'TripController',
                resolve: {
                    ticket: ['$q', '$timeout', function ($q, $timeout) {
                        var deferred = $q.defer();
                        $timeout(function () {
                            deferred.resolve('上海 -> 澳大利亚');
                        }, 4000);
                        return deferred.promise;
                    }]
                }
            })
            .otherwise('/home');
    }
])

.controller('Demo', [
    '$scope',
    '$rootScope',
    function ($scope, $rootScope) {
        $rootScope.$on('$routeChangeStart', function (ev, next, cur) {
            if (next && next.$$route.originalPath === '/trip'
                && cur && cur.$$route.originalPath === '/home') {
                cur.scope.loading = true;
            }
        });

        $rootScope.$on('$routeChangeSuccess', function (ev, cur, pre) {
            console.log('success: ', cur, pre);
        });
    }
])

.controller('HomeController', [
    '$scope',
    function ($scope) {

    }
])

.controller('TripController', [
    '$scope',
    'ticket',
    function ($scope, ticket) {
        $scope.ticket = ticket;
    }
])
