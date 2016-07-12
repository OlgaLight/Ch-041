define(['./module'], function (services) {
    'use strict';
    services.factory("scheduleService", ["$http", "$q", serviceFunc]);

    function serviceFunc($http, $q) {
        return {
            getData: function () {
                var deferred = $q.defer();
                $http.get("data/schedule.json")
                    .success(function (data) {
                        deferred.resolve(data);
                    });
                return deferred.promise;
            }
        }
    }
});