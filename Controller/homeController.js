define([], function () {
    function homeController($scope, service) {
        $scope.employees = service;
    }

    homeController.$inject = ['$scope','service'];

    return homeController;
});
