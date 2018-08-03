(function () {
    angular.module('mainApp')
        .controller('categoriesController', categoriesController);
    categoriesController.$inject = ["$scope", "$http", "$stateParams", "$state"];

    function categoriesController($scope, $http, $stateParams, $state) {
        var avm = this;
        $http.get('/get_products/'+$stateParams.category).success(function (data) {
            console.log("State",$stateParams)
                $scope.category = data;

                console.log("categories", $scope.category);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }
})();