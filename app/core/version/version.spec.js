'use strict';

describe('crudApp.version module', function() {
  beforeEach(module('crudApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
