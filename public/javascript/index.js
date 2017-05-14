/*
Если нужно с сервера взять объект с данными и передать на клиенте,
то в качестве промежуточного формата – для передачи по сети,
почти всегда используют именно его.
*/

/*
//javascript object to JSON object
var cardJS = {
    title : 'Карточка',
    body : 'Текст карточки'
}
console.log(cardJS);//вывести JS объект
var cardJSON = JSON.stringify(cardJS);//преобразуем в JSON объект
console.log(cardJSON)//json объект
*/

/*
//JSON object to JS object
//строго в двойных скобках
var cardJSON = '{ "title" : "Другая карточка", "body": "Текст другой карточки"}'
console.log(cardJSON)//вывести JSON объект
cardJS = JSON.parse(cardJSON);//преобразование в javascript объект
console.log(cardJS)//JS объект
*/
var json = '{"order": ["01","02","03"]}';
var data = JSON.parse(json);
$(function() {
    for (var i=0; i<data.order.length; i++) {
        $(".column").append('<div class="ui-state-default" id="'+ data.order[i] +'">'+ i +'</div>');//вывести первый элемент массива вне зависимости от значения
    }
});

$(function() {
     $( ".column" ).sortable({
         connectWith: ".column" //взаимное перемещение между
     }).disableSelection()
	 /*
     $('<div id=buttonDiv><button>Получить порядок</button></div>').appendTo('body');
	
     $('button').button().click(function() {
        //клиент
        var order = $('.column').sortable("toArray");//для детей .column узнать в каком порядке карточки
        //console.log(order);//["01","02","11","03"] вывести третью карточку order[3]
        var json = '{"order": ' + JSON.stringify(order) + '}';//{"order": ["01","02","03"]}
        //console.log(json);
        
        //отправка данных на сервер

        //на основании данных отрисовать колонку
        var data = JSON.parse(json);
        console.log(data)
        for (var i=0; i<data.order.length; i++) {
       	    $("#new").append('<div class="ui-state-default ui-sortable-handle" id="'+ data.order[i] +'"></div>');//вывести первый элемент массива вне зависимости от значения
        }
     })
     */
})