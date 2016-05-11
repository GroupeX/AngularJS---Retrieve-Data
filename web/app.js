

var app = angular.module("q11", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                    when('/home', {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
            }).
                    when('/about', {
                        templateUrl: 'templates/about.html',
                        controller: 'AboutController'
            }).
                    when('/rep', {
                        templateUrl: 'templates/repo.html',
                        controller: 'RepoController'
            }).
                    otherwise({
                        redirectTo: '/home'
            });
}]);


app.controller("HomeController", function($scope, $routeParams) {
        $scope.param = $routeParams.param;
});


app.controller('RepoController', ['$scope', '$http', function($scope, $http) {
        $http.get("https://api.github.com/users/Lars-m/repos").then(function(res) {
            $scope.repos = res.data;
        });
}]);







