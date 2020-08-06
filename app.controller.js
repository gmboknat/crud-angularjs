(function() {
    "use strict";
    
    // Declare app level module which depends on views, and core components
    angular
      .module("crudApp")
      .controller("AppController", AppController);
  
    AppController.$inject = [];
    
    function AppController() {
      var vm = this;

      vm.name = 'Gerald Miral'
    }
  
  })();
  