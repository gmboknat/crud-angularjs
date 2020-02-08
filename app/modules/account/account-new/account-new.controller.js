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

      vm.save = function(answer) {
        console.log('vm.save', vm.account, answer)
        $mdDialog.hide(answer);
      };
  }
})();
