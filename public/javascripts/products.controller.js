var mainApp = angular.module('mainApp', ['ui.router'])
    .controller('mainController',["$scope", "$http", "$stateParams","$state", "$window", function($scope, $http, $stateParams, $state, $window) {

        

        $http.get('/get_products')
        .success(function(data) {
            $scope.products = data;
            //console.log("$scope.formData.todos",  $scope.formData.todos);
            console.log(data);

            $scope.categories = {};

          //To Get Category Object - for reference
                  $scope.categories = data.reduce((i, val) => {
                        i[val.category] = val;
                        return i;

                    }, {})
                    
                    console.log("", $scope.category);
              
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}]);
