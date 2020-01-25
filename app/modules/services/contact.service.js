(function() {
    "use strict";
  
    angular.module("crudApp").factory("ContactService", ContactService);

    ContactService.$inject = ['$http'];
  
    function ContactService($http) {
      return {
        getAll: getAll,
      };
  
      function getAll(query) {
        console.log('getAll', query)
        const skip = (query.page - 1) * query.limit;
        let stringQuery = `?skip=${skip}&limit=${query.limit}` 
        console.log('stringQuery', stringQuery)
        return $http.get('https://crud-sails.herokuapp.com/contact' + stringQuery)
            .then(function(result) {
                return result.data;
            })
            .catch(function(err) {
                console.warn('errrror', err)
            });
      }
  
    }
  })();
  