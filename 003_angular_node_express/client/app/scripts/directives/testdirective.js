'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('clientApp')
  .directive('testDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
        var v = true;
        setInterval(function() {
          if(v) {
            element[0].style.visibility = 'hidden';
          } else {
            element[0].style.visibility = 'visible';
          }
          v = !v;
        },1000);
      }
    };
  });
