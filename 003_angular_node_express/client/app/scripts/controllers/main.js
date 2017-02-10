'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['sampleService','$scope', function (sampleService,$scope) {
    var scope = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.getGreeting = function(){
      console.log('Hello from controller getGreeting method. ' + this.entity.name);
      //this.entity.name = sampleService.getGreeting(this.entity.name);
      this.getGreetingFromServer(this.entity.name);

    }

    this.getGreetingFromServer = function(name){
      console.log('getGreetingFromServer');
      var promise = sampleService.getGreetingFromServer(name);
      promise.then(function(payload){
        console.log('inside promise success(), payload='+ payload);
        scope.entity.name = payload.data;
      });
    }
    
  }]);
