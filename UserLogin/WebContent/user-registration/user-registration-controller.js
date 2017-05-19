userApp.controller('user-registration-controller', function($scope,$http) {
	$scope.contactUs = {};
	
	$scope.send = function(){
		$scope.contactUs;
		$http({
			  method: 'POST',
			  url: '/UserLogin/backend/user/service/create',
			  data: $scope.contactUs
			}).then(function successCallback(response) {
				console.log(response)
			    // this callback will be called asynchronously
			    // when the response is available
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
	}
	
	$scope.cancel = function(){
		$scope.contactUs = {};
	}
})