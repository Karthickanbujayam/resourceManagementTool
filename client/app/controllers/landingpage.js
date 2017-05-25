define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('landingpage', ['$scope','$state','$http','$interval','$rootScope','myService',
        function($scope, $state, $http, $interval, $rootScope, myService) {

			console.log("landingpage.js File is loading....");


			  $scope.test = "landingpage.js File is loading....";
			  $scope.check = "";
			  $scope.editmn = true;
			  $scope.showfrm = false;
			  $scope.edit = function() {
			    $scope.editmode = true;
			    $scope.rowUnderEdit = angular.copy($scope.currentrow);

			  }
			  $scope.cancel = function() {
			    $scope.editmode = false;
			    $scope.rowUnderEdit = {};
			  }
			  $scope.save = function() {
			    $scope.currentrow.name = $scope.rowUnderEdit.username;
			    $scope.currentrow.points = $scope.rowUnderEdit.password;
			    $scope.editmode = false;
			    $scope.resetAll({});
			  }
			  
		 		
/*
			    $http.get('http://localhost:3000/api/tasks').then(function (data) {
 					alert(data);
               	 $scope.MyRecCollection = data;
        		});
 	 
*/  

        		myService.async().then(function() {
				    $scope.MyRecCollection = myService.data().data;
				  });

        		  $scope.$watch('MyRecCollection', function(MyRecCollection) {
				    if(angular.isDefined(MyRecCollection)) {
				      // Do something with the returned data, angular handle promises fine, you don't have to reassign the value to the scope if you just want to use it with angular directives
				    }
					});

			  $scope.resetAll = function(currentRow) {
			    angular.forEach($scope.MyRecCollection, function(val) {


			      if (val._id !== currentRow._id) {
			        val.checked = false;

			      } else {
			        $scope.currentrow = val;
			      }
			      $scope.editmn = false;
			    });
			  }

		}

		]);
	
});