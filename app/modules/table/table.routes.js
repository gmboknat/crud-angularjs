(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp.table")
      .config(routeConfig);
  
    routeConfig.$inject = ["$routeProvider"];
    
    function routeConfig($routeProvider) {
        $routeProvider.when("/table", {
            templateUrl: "modules/table/table.html",
            controller: "TableController",
            controllerAs: 'vm'
          });
    }
  
  })();
  
