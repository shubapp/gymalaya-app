var gymalaya = angular.module('gymalaya.services', []);

gymalaya.factory("General", function($http, $rootScope, $location) {
	return {
		filterArr: function(someArray, el, prop){
			$.each(someArray, function(i){
			    if(someArray[i][prop] === el[prop]) {
			        someArray.splice(i,1);
			        return false;
			    }
			});
		},
		loggedIn: function(username, cb){
			if(!username){
				if (cb){
					cb(false);
					return false;
				}
			}

			$http.post(this.baseUrl + '/auth/userlogin',{user:username,password:"1"})
			.success(function(data) {
				if (data && !data.error){
					$rootScope.user = data;
					localStorage.setItem("username", username);
		
					if (cb){
						cb(true);
					}
				}else{
					if (cb){
						cb(false);
					}
				}

			}).error(function(data, status, headers, config) {
				if (cb){
					cb(false);
				}
			});
		},
		//baseUrl:""
		baseUrl:"http://gymalaya.shubapp.com"
		//baseUrl:"http://192.168.42.72:8002"
	};
});