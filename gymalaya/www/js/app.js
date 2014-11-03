'use strict';
var gymalaya = angular.module('gymalaya',['gymalaya.controllers','gymalaya.directives','ngRoute','gymalaya.services','gymalaya.filters']);

// Routes section
gymalaya.config(function ($routeProvider, $locationProvider, $compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

	$routeProvider
	.when('/login',{
		controller:'loginCtrl',
		templateUrl: 'views/login.html'
	})
	.when('/workouts',{
		controller:'workoutCtrl',
		templateUrl: 'views/workouts.html',
		resolve:{
			login:loggedin
		}
	})
	.when('/exercise/:workoutId',{
		controller:'exerciseCtrl',
		templateUrl: 'views/exercise.html',
		resolve:{
			login:loggedin
		}
	})
	.otherwise({redirectTo:'/workouts'});

	// $locationProvider.html5Mode(true);
});

// Resolve's section
var loggedin = function($http, $rootScope, $location, General) {
	var username;

	if (!$rootScope.user){
		username = localStorage.getItem("username");
	}else {
		username = $rootScope.user._id
	}

	if (!username){
		$location.path("/login");
	}else{
		General.loggedIn(username,function(verified){
			if (!verified){
				$location.path("/login");
			}
		});
	}
};