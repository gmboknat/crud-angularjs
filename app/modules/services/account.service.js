(function () {
  "use strict";

  angular.module("crudApp").factory("AccountService", AccountService);

  AccountService.$inject = ['$http'];



  function AccountService($http) {
    const backendUrl = 'https://crud-sails.herokuapp.com/account';
    return {
      getAll: getAll,
      create: create,
    };

    function getAll(query) {
      console.log('getAll', query)
      let stringQuery = `?page=${query.page}&limit=${query.limit}`
      if (query.search) stringQuery += `&search=${query.search}`;
      console.log('stringQuery', stringQuery)
      return $http.get(backendUrl + stringQuery)
        .then(function (result) {
          return result.data;
        })
        .catch(function (err) {
          console.warn('errrror', err)
        });
    }

    function create(newAccount) {
      return $http.post(backendUrl, newAccount).then(function(result) {
        return result.data;
      }).catch(function(err) {
        console.warn(' service errror', err)
      })
    }

  }
})();
