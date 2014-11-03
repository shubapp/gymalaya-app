'use strict';
var gymalaya = angular.module('gymalaya.directives',[]);
var directives = {};

directives.modifyhBar = function() {
	return {
		restrict: 'E',
		templateUrl:'views/modifyBar.html',
        replace: true
	};
};

directives.divider = function() {
	return {
		restrict: 'E',
		template:'<hr class="divider"></hr>',
        replace: true
	};
};

directives.mgroupsModal = function() {
	return {
		restrict: 'E',
		templateUrl:'views/mgroupsModal.html',
        replace: true
	};
};

directives.weightModal = function() {
	return {
		restrict: 'E',
		templateUrl:'views/weightModal.html',
        replace: true
	};
};

gymalaya.directive(directives);