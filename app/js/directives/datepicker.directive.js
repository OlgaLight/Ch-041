define(['./module'], function (directives) {
    'use strict';
    directives.directive("datepicker", function () {
        return function (scope, elem, attrs) {
            elem.datepicker({
                dateFormat: "DD/dd/mm/yy",
                weekStart: 1,
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "0,6",
                calendarWeeks: true,
                autoclose: true,
                todayHighlight: true,
                firstDay: 1,
                beforeShowYear: function (date) {
                    if (date.getFullYear() == 2007) {
                        return false;
                    }
                },
                beforeShowDay: $.datepicker.noWeekends,
                toggleActive: true,
                onSelect: function (dateText, inst) {
                    var link = "#/groupSchedule/";
                    var group = "/" + angular.element(".in .bg-primary .group-name").text();

                    var dateAsString = dateText;
                    console.log(dateAsString);

                    var dateAsObject = $(this).datepicker('getDate');
                    console.log(dateAsObject);
                    angular.element(this).parent().next().children().attr("href", link + dateAsString + group);

                    $("#dateHeader").text(dateText);
                }
            })
        }
    });
});