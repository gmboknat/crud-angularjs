(function() {
  "use strict";

  angular
    .module("crudApp.table")
    .controller("TableController", TableController);

  TableController.$inject = ["$mdEditDialog", "$q", "$scope", "$timeout", "$http", "ContactService"];

  function TableController($mdEditDialog, $q, $scope, $timeout, $http, ContactService) {
    let vm = this;

    vm.contacts = {}
    vm.selected = [];
    vm.limitOptions = [5, 10, 15];
    vm.query = {
      order: "name",
      limit: 5,
      page: 1
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
    vm.loadStuff = loadStuff;
    vm.logItem = logItem;
    vm.logPagination = logPagination;
    vm.toggleFilter = toggleFilter;

    // Init
    vm.loadStuff();


    function loadStuff() {
       vm.promise = ContactService.getAll(vm.query).then(result => {
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
      console.log('vm.query', vm.query, $scope.options.pageSelect)
      vm.loadStuff();
    };

    function toggleFilter() {
      vm.isFilterEnabled = !vm.isFilterEnabled;
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

      if ($scope.options.largeEditDialog) {
        promise = $mdEditDialog.large(editDialog);
      } else {
        promise = $mdEditDialog.small(editDialog);
      }

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
