(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp.contact")
      .controller("ContactController", ContactController);
  
    ContactController.$inject = ["$scope", "ContactService"];
    
    function ContactController($scope, ContactService) {
      $scope.desserts = [{name: 'SAmpe'}]

      ContactService.getAll().then(result => {
        console.log('Contact getAll', result)
      })
    }
  
  })();
  