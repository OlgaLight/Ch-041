define(['./app'], function (app) {
    'use strict';
    return app.config(function ($routeProvider) {
        $routeProvider
            .when('/groupsList', {
                templateUrl: '../app/views/groupsList.html',
                controller: 'groupsController'
            })
            .when('/groupSchedule/:dayName/:day/:month/:year/:groupId', {
                templateUrl: '../app/views/groupSchedule.html',
                controller: 'scheduleController'
            })
            .otherwise({
                redirectTo: '/groupsList',
            });
    });
});