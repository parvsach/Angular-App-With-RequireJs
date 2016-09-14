define(['Config/config', 'Factories/service', 'Directives/currency', 'Directives/phoneNumber', 'Filters/tel',
  'Controller/homeController', 'Controller/valueController'],

  function (config, service, currency, phoneNumber,tel, homeController, valueController) {
      var app = angular.module('myApp', ['ui.router', 'ngAnimate']);
      app.config(config);
      app.factory('service', service);
      app.directive('capitalize', currency);
      app.directive('phoneInput', phoneNumber);
      app.filter('tel', tel);
      app.controller('homeController', homeController);
      app.controller('valueController', valueController);
      return app;
}); 
