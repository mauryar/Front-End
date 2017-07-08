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
      var size = 0;
      var regex = /^\s*$/ ;
      for(var i = 0; i<numberOfItem.length; i++){
        //console.log("item is: "+numberOfItem[i]);
        if(numberOfItem[i].match(regex)){
          
          //console.log("size in if: "+size);
        }else 
        {size += 1;
          //console.log("size in else: "+size);
        }
      }
      //console.log("size is: "+size);
    	if(size <= 3){
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