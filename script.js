var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.calculate = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
