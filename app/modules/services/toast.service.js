(function() {
  "use strict";

  angular.module("crudApp").factory("toastService", toastService);

  function toastService($mdToast) {
    var service = {
      error: error,
      success: success
    };
    return service;

    function error(msg) {
      return $mdToast.show(
        $mdToast
          .simple()
          .textContent(msg)
          .position("top right")
          .hideDelay(3000)
          .theme("error-toast")
      );
    }

    function success(msg) {
      return $mdToast.show(
        $mdToast
          .simple()
          .textContent(msg)
          .position("top right")
          .hideDelay(3000)
          // .theme("success-toast")
      );
    }
  }
})();
