(function() {
  "use strict";

  // Declare app level module which depends on views, and core components
  angular
    .module("crudApp", [
      "ngRoute",
      "crudApp.home",
      "crudApp.contact",
      "ngAria",
      "ngAnimate",
      "ngMessages",
      "ngSanitize",
      "ngMaterial"
    ])
})();
