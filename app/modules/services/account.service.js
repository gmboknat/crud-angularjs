(function() {
    "use strict";
  
    angular.module("crudApp").factory("AccountService", AccountService);

    AccountService.$inject = ['$http'];
  
    function AccountService($http) {
      return {
        getAll: getAll,
      };
  
      function getAll(query) {
        console.log('getAll', query)
        let stringQuery = `?page=${query.page}&limit=${query.limit}` 
        if (query.search) stringQuery += `&search=${query.search}`;
        console.log('stringQuery', stringQuery)
        return $http.get('https://crud-sails.herokuapp.com/account' + stringQuery)
            .then(function(result) {
                return result.data;
            })
            .catch(function(err) {
                console.warn('errrror', err)
            });
      }
  
    }
  })();
  