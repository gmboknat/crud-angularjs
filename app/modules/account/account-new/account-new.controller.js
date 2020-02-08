(function () {
  "use strict";

  angular
    .module("crudApp.account")
    .controller("AccountNewController", AccountNewController);

  AccountNewController.$inject = ["$mdEditDialog", "$q", "$scope", "AccountService", "$mdDialog"];

  function AccountNewController($mdEditDialog, $q, $scope, AccountService, $mdDialog) {
    let vm = this;
    console.log('this is the AccountNewController')
      vm.cancel = function() {
        $mdDialog.cancel();
      };

      vm.save = function() {
        AccountService.create(vm.account).then(function(result) {
          if (result) $mdDialog.hide(result);
        })
      };
  }
})();
