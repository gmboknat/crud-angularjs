(function() {
  "use strict";

  angular
    .module("crudApp.account")
    .controller("AccountController", AccountController);

  AccountController.$inject = ["$mdEditDialog", "$q", "$scope", "AccountService"];

  function AccountController($mdEditDialog, $q, $scope, AccountService) {
    let vm = this;

    vm.contacts = {}
    vm.selected = [];
    vm.limitOptions = [5, 10, 15];
    vm.query = {
      order: "firstname",
      limit: 5,
      page: 1,
      search: ''
    };

    vm.options = {
      rowSelection: true,
      multiSelect: true,
      autoSelect: true,
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
      console.log("order: ", order);
    };

    
  }
})();
