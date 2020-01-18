'use strict';

angular.module('crudApp.version', [
  'crudApp.version.interpolate-filter',
  'crudApp.version.version-directive'
])

.value('version', '0.1');
