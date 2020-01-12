'use strict';

angular.module('crudApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'modules/contact/contact.html',
    controller: 'ContactController'
  });
}])

.controller('ContactController', [function() {

}]);