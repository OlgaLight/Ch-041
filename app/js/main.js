require.config({

    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route',
        'bootstrap3': '../bower_components/bootstrap/dist/js/bootstrap',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        bootstrap3: {
            deps: [ "jquery" ]
        }
    },
    deps: ['./bootstrap']
});