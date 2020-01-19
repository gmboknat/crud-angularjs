(function() {
    "use strict";
  
    angular.module("crudApp").factory("ContactService", ContactService);

    ContactService.$inject = ['$http'];
  
    function ContactService($http) {
      return {
        getAll: getAll,
      };
  
      function getAll() {
        return $http.get('https://crud-sails.herokuapp.com/contact')
            .then(function(result) {
                return result.data;
            })
            .catch(function(err) {
                console.log('errrror', err)
            });
      }
  
    }
  })();
  