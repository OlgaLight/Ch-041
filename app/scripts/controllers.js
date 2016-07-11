'use strict';

angular.module('scheduleApp')

app.controller('GroupController', function() {
    var schedule = [];

    $.getJSON('schedule.json', function (data) {
        $.each(data.schedule, function (i, f) {
            var tblRow = "<tr>" + "<td>" + f.time + "</td>" +
                "<td>" + f.lesson + "</td>" + "<td>" + f.room + "</td>" + "</tr>"
            $(tblRow).appendTo("#scheduleDate tbody");
        });
    })
    });

app.controller('IndexController', function() {
    
});

app.controller('CalendarController', function() {
    
});