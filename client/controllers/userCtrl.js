App.controller('UserController', function($scope, UserFactory, $routeParams, $location) {
    $scope.gridOptions = {
        data: [],
        urlSync: false
    };
    $scope.users = [];
    fetchUsers();

    function fetchUsers() {
        UserFactory.getData()
            .then(function(responseData) {
                $scope.gridOptions.data = responseData.data;
            });
    }

    $scope.createUser = function() {
        UserFactory.createUser($scope.newUser)
            .then(function() {
                $scope.newUser = {};
            })
            .then(fetchUsers);
    }

    $scope.deleteUser = function(id) {
        UserFactory.deleteUser(id)
            .then(fetchUsers);
    }
});
