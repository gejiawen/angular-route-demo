angular.module('Module.Post', ['ngRoute'])

.config([
    '$routeProvider',
    function ($routerProvider) {
        $routerProvider
            .when('/post', {
                templateUrl: 'post.html',
                controller: 'PostController'
            })
            .when('/post/:postId', {
                templateUrl: 'post-id.html',
                controller: 'PostIdController'
            })
    }
])

.controller('PostController', [
    '$scope',
    function ($scope) {
        $scope.posts = [
            {
                name: 'post1',
                id: 'post-001'
            }, {
                name: 'post2',
                id: 'post-002'
            }
        ]
    }
])

.controller('PostIdController', [
    '$scope',
    '$routeParams',
    function ($scope, $routeParams) {
        $scope.msg = 'post id: ' + $routeParams.postId;
    }
]);
