define(['./module'], function (controllers) {
    'use strict';
    controllers.controller("groupsController", ["$scope", "$http", "groupsService", groupsCtrl]);

    function groupsCtrl($scope, $http, groupsService) {
        var promise = groupsService.getData();
        promise.then(function (data) {
            $scope.groupsList = data.groups;
        });
    }
});
    
