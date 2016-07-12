/**
 * Created by olga on 11.07.16.
 */
// $(function () {
//
//
//     var schedule = [];
//
//     $.getJSON('schedule.json', function (data) {
//         $.each(data.schedule, function (i, f) {
//             var tblRow = "<tr>" + "<td>" + f.time + "</td>" +
//                 "<td>" + f.lesson + "</td>" + "<td>" + f.room + "</td>" + "</tr>"
//             $(tblRow).appendTo("#scheduledate tbody");
//         });
//
//     });
//
// });

$(function () {
    $('.datetimepicker4').datetimepicker();
});
