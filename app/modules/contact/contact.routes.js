(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp.contact")
      .config(routeConfig);
  
    routeConfig.$inject = ["$routeProvider"];
    
    function routeConfig($routeProvider) {
      $routeProvider.when('/contact', {
        templateUrl: 'modules/contact/contact.html',
        controller: 'ContactController'
      });
    }
  
  })();
  
