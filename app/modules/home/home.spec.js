'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeController');
      expect(homeCtrl).toBeDefined();
    }));

  });
});