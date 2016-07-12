define([
    'angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.services',
        'ngRoute'
    ]);
});