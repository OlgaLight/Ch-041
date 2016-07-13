angular.module('schedule', ['ngAnimate', 'ui.bootstrap']);

angular.module('schedule').controller('scheduleController', ['$scope', '$http', function($scope, $http) {

        $http.get('data/schedule.json').

        success(function (data, status, headers, config) {
            $scope.groups = angular.fromJson(data);
        }).

        error(function (data, status, headers, config) {
            // log error
        });

        $scope.dateNow = Date.now();
    }]);
