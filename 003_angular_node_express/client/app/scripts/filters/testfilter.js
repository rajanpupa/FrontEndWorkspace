'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:testFilter
 * @function
 * @description
 * # testFilter
 * Filter in the clientApp.
 */
angular.module('clientApp')
  .filter('testFilter', function () {
    return function (input) {
      return input + '( text added by testFilter filter: )' ;
    };
  });
