'use strict';

/**
 * @ngdoc service
 * @name clientApp.sampleService
 * @description
 * # sampleService
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('sampleService', ['$http','$log', function ($http, $log) {
      var url = '/users';
      $log.log('Logging from the service');

      this.getGreeting = function(name){
        $log.log('returning \'Hello ' + name + '\' from sampleService.getGreeting() method') ;
        return 'Hello ' + name;
      }

      this.getGreetingFromServer = function(name){
        $log.log('getgreetingfromserver() in service, name=' + name);
        return $http.get(url + "/" + name);
      }
  }]);
