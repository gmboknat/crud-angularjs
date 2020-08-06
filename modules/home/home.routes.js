(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp.home")
      .config(routeConfig);
  
    routeConfig.$inject = ["$routeProvider"];
    
    function routeConfig($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "modules/home/home.html",
            controller: "HomeController"
          });
    }
  
  })();
  
