var app = angular.module('scheduleApp', []);
app.controller('IndexController', function($scope, $http) {
    $http.get("../schedule.json").then(function (response) {
        $scope.myData = response.data.groups;
    });
});