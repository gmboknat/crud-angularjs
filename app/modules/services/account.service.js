(function () {
  "use strict";

  angular.module("crudApp").factory("AccountService", AccountService);

  AccountService.$inject = ['$http', 'toastService'];



  function AccountService($http, toastService) {
    // const backendUrl = 'https://crud-sails.herokuapp.com/account';
    const backendUrl = 'http://localhost:1337/account'
    return {
      getAll: getAll,
      create: create,
      update: update,
    };

    function getAll(query) {
      console.log('getAll', query)
      let order = query.order;
      if (order) {
        if (order.search('-') > -1) {
          order = order.slice(1, order.length) + ' ASC';
        } else {
          order += ' DESC'
        }
      }
      let stringQuery = `?page=${query.page}&limit=${query.limit}&sort=${order}`
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
        toastService.success('Created Account Successfully!')
        return result.data;
      }).catch(function(err) {
        toastService.error('Creating Account Failed!')
        console.warn(' service errror', err)
      })
    }

    function update(account) {
      return $http.put(backendUrl + `/${account.id}`, account).then(function(result) {
        toastService.success('Updated Account Successfully!')
        return result.data;
      }).catch(function(err) {
        toastService.error('Updating Account Failed!')
        console.warn(' service errror', err)
      })
    }
  }
})();
