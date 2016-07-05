
angular.module('mainApp')
	.controller('mainTroller', ['$scope', '$http', '$interval', '$timeout', function ($scope, $http, $interval, $timeout, nameFactory){


	// FOR EMAIL SUBMISSION //

	$scope.sendEmail = function(){
		console.log($scope.email)
		$http.post('api/send', $scope.email)
			.then(function(returnData){
				console.log(returnData)
				if(returnData.status !== 200) {
					alert("Sorry, there was an error. Please try again.")
				} else {
					console.log("Your message has been sent!")
				}
			})
		$scope.email = {}
	};

	}])