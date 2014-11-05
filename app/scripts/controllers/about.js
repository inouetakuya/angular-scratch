'use strict';

/**
 * @ngdoc function
 * @name angularScratchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularScratchApp
 */
angular.module('angularScratchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
