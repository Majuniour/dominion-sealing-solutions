var mainApp = angular.module('mainApp', ['ui.router']);
mainApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // route for the home page
        .state('home', {
            url: '/home',
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .state('products', {
            url: '/products',
            templateUrl : 'partials/products.html',
            controller  : 'productsController'
        })
        .state('category', {
            url: '/products/:category',
            templateUrl : 'partials/products.category.html',
            controllerAs: 'avm',
            controller  : 'categoriesController'
        })

        // route for the contact page
        .state('about', {
            url:'/about',
            templateUrl : 'partials/aboutUs.html',
            controller  : 'aboutUsController'
        });
});

// create the controller and inject Angular's $scope
mainApp.controller('mainController', ["$scope", "$http", function($scope, $http) {
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
                
                console.log("categories", $scope.categories);

       
          
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
}]);
mainApp.controller('productsController', ["$scope", "$http", function($scope, $http) {
    $scope.message = 'Look! I am an about page.';
    
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
                
        console.log("Cat", $scope.category);
          
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
}]);

mainApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
})
