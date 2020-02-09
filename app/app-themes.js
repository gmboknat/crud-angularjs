(function() {
  "use strict";
  angular
    .module("crudApp")
    .config(config);

    function config($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme("default").primaryPalette('indigo', {
          "default": "500",
          "hue-1": "600",
          "hue-2": "700",
          "hue-3": "800"
        }).accentPalette('teal', {
          "default": "500",
          "hue-1": "300",
          "hue-2": "700",
          "hue-3": "800"
        }).warnPalette('red', {
          "default": "500",
          "hue-1": "100",
          "hue-2": "200",
          "hue-3": "800"
        }).backgroundPalette('grey', {
          "default": "50",
          "hue-1": "200",
          "hue-2": "400",
          "hue-3": "800"
        });
        return $mdIconProvider.defaultIconSet('font/mdi.svg');
      };
})();


