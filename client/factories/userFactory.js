App.factory('UserFactory', function($http){
    var factory = {};

    factory.getData = function() {
        return $http.get('/users')
            .then(function(res){
                return res.data;
            });
    };

    factory.createUser = function(newUser){
        return $http.post('/users', newUser);
    };

    factory.deleteUser = function(id){
        return $http.delete('/users/${id}');
    };

    factory.getRecentUsers = function(){
        return $http.get('/users/recent')
        .then(function(res){ return res.data;});
    };

    return factory;
});
