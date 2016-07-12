define(['./module'], function (controllers) {
    'use strict';
    controllers.controller("scheduleController", ["$scope", "$http", "$routeParams", "scheduleService", "groupsService", scheduleCtrl]);

    function scheduleCtrl($scope, $http, $routeParams, scheduleService, groupsService) {
        $scope.groupId = $routeParams.groupId;
        $scope.date = $routeParams.dayName + ", " + $routeParams.day + "/" + $routeParams.month + "/" + $routeParams.year;

        var promise = groupsService.getData();

        promise.then(function (data) {
            $scope.groupData = $.grep(data.groups, function (e) {
                return e.name == $scope.groupId;
            });
        });

        promise = scheduleService.getData();

        promise.then(function (data) {
            $scope.schedule = data;
            //console.log($scope.schedule.groupIds);

            $scope.foundObj = $.grep($scope.schedule.groupIds, function (e) {
                return e.id == $scope.groupId;
            });
            console.log($scope.foundObj);

            $scope.foundDay = $.grep($scope.foundObj[0].days, function (e) {
                return e.date == $routeParams.dayName;
            });

            console.log($scope.foundDay);
        });
    }
});