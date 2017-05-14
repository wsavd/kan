$(function() {
     $( ".column" ).sortable({
         connectWith: ".column", //взаимное перемещение межу
     }).disableSelection()
});