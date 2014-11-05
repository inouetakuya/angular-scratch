'use strict';

/**
 * @ngdoc function
 * @name angularScratchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularScratchApp
 */
angular.module('angularScratchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
