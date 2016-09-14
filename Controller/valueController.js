define([], function () {
    function valueController($scope, service) {
        
        $scope.msg = false;

        $scope.saveDetails = function () {
            var details = { 'name': $scope.name, 'age': $scope.age, 'email': $scope.email, 'title': $scope.title };
            service.push(details);
            $scope.msg = true;
        }
    }

    valueController.$inject = ['$scope', 'service'];

    return valueController;
});

