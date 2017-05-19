// app.js
var userApp = angular.module('userApp', ['ui.router']);

userApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/user-registration');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('user-Registration', {
            url: '/userRegistration',
            templateUrl: 'user-registration/user-registration.html'
        })


});