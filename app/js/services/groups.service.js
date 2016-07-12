define(['./module'], function (services) {
    'use strict';
    services.factory('groupsService', ["$http", "$q", serviceFunc]);

    function serviceFunc($http, $q) {
        return {
            getData: function () {
                var deferred = $q.defer();
                $http.get("data/groups.json").success(function (data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        }
    }
});