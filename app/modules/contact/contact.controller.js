(function() {
  "use strict";

  // Declare app level module which depends on views, and core components
  angular
    .module("crudApp.contact")
    .controller("ContactController", ContactController);

  ContactController.$inject = ["ContactService"];

  function ContactController(ContactService) {
    var vm = this;

    vm.selected = [];

    vm.query = {
      order: "name",
      limit: 5,
      page: 1
    };

    getContacts()

    function getContacts() {
      ContactService.getAll().then(result => {
        console.log('vm.contacts', result)
        vm.contacts = result;
      });
    };

    
  }
})();
