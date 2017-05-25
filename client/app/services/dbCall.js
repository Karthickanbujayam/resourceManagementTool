define(['./module'], function (services) {
    'use strict';
 
	services.service('myService', function($q, $timeout, $http) {
	console.log("service.js is loading");
   
   //***Read local JSON data....

  var deffered = $q.defer();
  var data = [];  
  var myService = {};

  myService.async = function() {
    $http.get('https://api.mlab.com/api/1/databases/click_shoppingcart_db/collections/userDetails?f={"username": 1, "password": 1}&apiKey=m6MDDZnQhLJW_-l6t04kB0bN8yM2Jtof')
    .then(function (d) {
      data = d;
      console.log(d);
      deffered.resolve();
    });
    return deffered.promise;
  };
  myService.data = function() { return data; };

  return myService;
 


	});     
});




