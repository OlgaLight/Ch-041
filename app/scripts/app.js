/**
 * Created by olga on 10.07.16.
 */
'use strict';

angular.module('scheduleApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    }
                    // 'content': {
                    //     template : 'views/home.html',
                    //     controller  : 'IndexController'
                    // },
                    // 'footer': {
                    //     templateUrl : 'views/footer.html'
                    // }
                }
            })
            // route for the calendar page
            .state('app.calendar', {
                url:'calendar',
                views: {
                    'content@': {
                        template: 'views/calendar.html',
                        controller  : 'CalendarController'
                    }
                }
            })
            // route for the group page
            .state('app.group', {
                url:'group/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/group.html',
                        controller  : 'GroupController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;
