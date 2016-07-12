(function(){
    angular
    .module("scheduleApp")
    .config(function ($routeProvider) {
        $routeProvider
            .when('/groupsList', {
                templateUrl: 'groupsList/views/groupsList.html',
                controller: 'groupsController'
            })
            .when('/groupSchedule/:dayName/:day/:month/:year/:groupId', {
                templateUrl: 'groupSchedule/views/groupSchedule.html',
                controller: 'scheduleController'
            })
            .otherwise({
                redirectTo: '/groupsList',
            });
    });
})();