var App = angular.module( 'UserModule', [ 'ngRoute', 'ngMaterial', 'angularMoment', 'dataGrid', 'pagination'] );

App.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/_index.html',
            controller: 'UserController'
        })
        .when('/users', {
            templateUrl: '/partials/_users.html',
            controller: 'UserController'
        })
        .otherwise({
            redirectTo: '/'
        })
})
