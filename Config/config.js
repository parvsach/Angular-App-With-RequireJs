define([], function () {
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/index');

            $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'homeController'
            })
             .state('value', {
                 url: '/value',
                 templateUrl: 'value.html',
                 controller: 'valueController'
             })
            .state('directives', {
                url: '/direcive',
                templateUrl: 'directive.html'
            }); 
    }
    config.$inject = ['$locationProvider','$stateProvider','$urlRouterProvider'];

    return config;
});
