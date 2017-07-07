(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope) {
  $scope.lunchItem = "";
  $scope.message = "";
    $scope.splitItem = function () {
    
    if($scope.lunchItem){
    	var numberOfItem = $scope.lunchItem.split(",");
    	if(numberOfItem.length <= 3){
    		$scope.message = "Enjoy!";
    	}else{
    		$scope.message = "Too much!";
    	}
    }else{
    	$scope.message = "Please enter data first";
    }
  };

}

})();