(function() {
  "use strict";

  angular
    .module("crudApp.account")
    .controller("AccountListController", AccountListController)
    .controller("AccountNewEditController", AccountNewEditController);

  AccountListController.$inject = ["$mdEditDialog", "$q", "$scope", "AccountService", "$mdDialog"];

  function AccountListController($mdEditDialog, $q, $scope, AccountService, $mdDialog) {
    let vm = this;

    vm.contacts = {}
    vm.selected = [];
    vm.limitOptions = [5, 10, 15];
    vm.query = {
      order: "",
      limit: 5,
      page: 1,
      search: ''
    };

    vm.options = {
      rowSelection: true,
      multiSelect: true,
      autoSelect: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true
    };

    // functions
    vm.getAccounts = getAccounts;
    vm.logItem = logItem;
    vm.logPagination = logPagination;
    vm.toggleFilter = toggleFilter;
    vm.filterAccounts = filterAccounts;
    vm.refreshAccounts = refreshAccounts;
    vm.addEditAccount = addEditAccount;
    vm.editAccount = editAccount;

    // Init
    vm.getAccounts();


    function getAccounts() {
       vm.promise = AccountService.getAll(vm.query).then(result => {
        vm.contacts = result;
        console.log('vm.contacts', vm.contacts)
      });
    };

    function logItem(item) {
      console.log(item, "was selected");
    };

    function logPagination(page, limit) {
      console.log("page: ", page);
      console.log("limit: ", limit);
      console.log('vm.query', vm.query, vm.options.pageSelect)
      vm.getAccounts();
    };

    function toggleFilter() {
      vm.isFilterEnabled = !vm.isFilterEnabled;
    }

    function filterAccounts(isValid) {
      if (isValid) {
        console.log('filtering')
        vm.getAccounts()
      }
    }

    function refreshAccounts() {
      vm.query = {
        order: "firstname",
        limit: 5,
        page: 1,
        search: ''
      };
      vm.getAccounts();
    }

    function addEditAccount(ev, account) {
      $mdDialog.show({
        controller: AccountNewEditController,
        controllerAs: 'vm',
        templateUrl: './modules/account/account-new-edit/account-new-edit.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false, // Only for -xs, -sm breakpoints.
        locals: {
          account: account
        },
      })
      .then(function(result) {
        if (result) vm.getAccounts();
      }).catch(function(err) {
        console.log('error', err)
      });
    }

    function editAccount(account) {
      console.log('editttt', account)

    }
    // /////

    

    


    $scope.editComment = function(event, dessert) {
      event.stopPropagation(); // in case autoselect is enabled

      var editDialog = {
        modelValue: dessert.comment,
        placeholder: "Add a comment",
        save: function(input) {
          if (input.$modelValue === "Donald Trump") {
            input.$invalid = true;
            return $q.reject();
          }
          if (input.$modelValue === "Bernie Sanders") {
            return (dessert.comment = "FEEL THE BERN!");
          }
          dessert.comment = input.$modelValue;
        },
        targetEvent: event,
        title: "Add a comment",
        validators: {
          "md-maxlength": 30
        }
      };

      var promise;

      
      promise = $mdEditDialog.small(editDialog);

      promise.then(function(ctrl) {
        var input = ctrl.getInput();

        input.$viewChangeListeners.push(function() {
          input.$setValidity("test", input.$modelValue !== "test");
        });
      });
    };

    $scope.getTypes = function() {
      return ["Candy", "Ice cream", "Other", "Pastry"];
    };

    

    $scope.logOrder = function(order) {
      console.log("order: ", order, vm.query.order);
      
      vm.getAccounts();

    };
  }

  // function AccountNewController($scope, $mdDialog) {
  // }

  AccountNewEditController.$inject = ["AccountService", "$mdDialog", "account"];

  function AccountNewEditController(AccountService, $mdDialog, account) {
    let vm = this;
    if (account) {
      vm.isEdit = true;
      vm.account = angular.copy(account);
    }
    // vm.account = account;

    // $scope.account = account;
    console.log('account', account)
    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.save = function() {
      let request;
      if (!vm.isEdit) {
        request = AccountService.create(vm.account)
      } else {
        request = AccountService.update(vm.account)
      }

      request.then(function(result) {
        if (result) $mdDialog.hide(result);
      })
      
    };
  }
})();
