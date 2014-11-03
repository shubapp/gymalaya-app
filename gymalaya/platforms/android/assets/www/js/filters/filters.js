'use strict';
var gymalaya = angular.module('gymalaya.filters',[]);
var filters = {};

filters.modifierText = function(){
	return function(input) {
		if (input)
			return "Modify";
		else
			return "Save";			
	};
};

gymalaya.filter(filters);