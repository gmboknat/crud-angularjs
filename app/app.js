(function() {
  "use strict";

  // Declare app level module which depends on views, and core components
  angular
    .module("crudApp", ["ngRoute", "crudApp.home", "crudApp.contact", "crudApp.version"])
    .config(routeConfig);
  routeConfig.$inject = ["$locationProvider", "$routeProvider"];
  function routeConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider.otherwise({ redirectTo: "/home" });
  }
})();
