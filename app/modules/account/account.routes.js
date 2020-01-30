(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp.account")
      .config(routeConfig);
  
    routeConfig.$inject = ["$routeProvider"];
    
    function routeConfig($routeProvider) {
      $routeProvider.when('/account', {
        templateUrl: 'modules/account/account.html',
        controller: 'AccountController',
        controllerAs: 'vm'
      });
    }
  
  })();
  
