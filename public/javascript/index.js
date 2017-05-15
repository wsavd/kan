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

/*
//ajax запрос на получение всех карточек
$.ajax({
    url: 'http://localhost:3078/board',
    type: 'GET',
    contentType: 'application/json',
    success: function(result) {
        $.each(result, function(index){
        //<a id="58ee7bf57cb76c2e6477caca" href="/board/58ee7bf57cb76c2e6477caca">my</a>
        $(".boards").append("<a class='board' id='"+ result[index]._id + "'href='/board/" + result[index]._id + "'>" + result[index].title + "</a>");
        })
    },
    error: function (error) {
        console.log(error);
    }
});
*/
var json = '{"order": ["1","2","3","4"]}';
var data = JSON.parse(json);
console.log(json);
$(function() {
    for (var i=0; i<data.order.length; i++) {
        $(".column").append('<div class="ui-state-default" id="'+ data.order[i] +'">'+ i +'</div>');//вывести первый элемент массива вне зависимости от значения
    }
});

$(function() {
     $( ".column" ).sortable({
         connectWith: ".column", //взаимное перемещение карточек между колонками
         update: function() {//когда карточка переместилась
            //взять каждого ребенка .column и вывести его id
            var order = $('.column').sortable("toArray")//узнаем новый порядок карточек для каждой колонки
            var j = '{"order": ' + JSON.stringify(order) + '}';//{"order": ["01","02","03"]}//формируем JSON на основании новых данных
            console.log(j)
            $(".column > div").each( function(index, element) {
                console.log("id:", $( element).attr("id"));
            }); 
            //обновление данных
            /*
            $.ajax({
                url: 'http://localhost:8080/boardid',
                type: 'PUT',
                //contentType: 'application/json',
                data: j,
                success: function(response) {
                    console.log("id saved");
                }
            });*/
         }
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