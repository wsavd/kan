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
//var json = '{"order": ["first","second","third","foutr"], "ready": ["1","2"]}';
//var data = JSON.parse(json);
//console.log("Начальная расстановка: "+json);
/*$(function() {
    //заполнение колонок данными с сервера
    for (var i=0; i<data.order.length; i++) {
        $("#toDo").append('<div class="ui-state-default" id="'+ data.order[i] +'">'+ i +'</div>');//вывести первый элемент массива вне зависимости от значения
    }
    for(var i=0; i<data.ready.length; i++) {
        $("#inProgress").append('<div class="ui-state-default" id="'+ data.ready[i] +'">'+ i +'</div>');
    }
});*/
function fetch(){
    $.ajax({
        url: 'http://localhost:3001/column',
        type: 'GET',
                //contentType: 'application/json',
    })
    .done(function(response) {
        //console.log(response)
        //console.log(JSON.stringify(response))
        //var obj = $.parseJSON(JSON.stringify(response));
        console.log(response[0]);
        console.log(response[1]);
        /*for (var i=0; i<response.todo.length; i++) {
            $("#toDo").append('<div class="ui-state-default" id="'+ response.todo[i] +'">'+ i +'</div>');//вывести первый элемент массива вне зависимости от значения
        }
        for(var i=0; i<data.inprogress.length; i++) {
            $("#inProgress").append('<div class="ui-state-default" id="'+ data.inprogress[i] +'">'+ i +'</div>');
        }*/
    });
          //end update
}
$(function() {
     fetch();
     $(".column").sortable({
          connectWith: ".column",
          /*start: function(event, ui) {
            columnIdStart = ui.item.parent().attr('id');//начальной колонки
            console.log("id начальной колонки: "+columnIdStart);
          },*/
          update: function(event, ui){
            //var data = $(this).sortable('toArray');
            //console.log(data);
            var toDo = $("#toDo").sortable("toArray");
            var inProgress = $("#inProgress").sortable("toArray");
            json = '{"toDo": '+JSON.stringify(toDo)+'}'//,"inProgress": '+JSON.stringify(inProgress)+'}';
            console.log("После перетаскивания: "+json)
            //var order = ui.item.index();
            //console.log("Какой элемент по счету, начиная от 0: "+ order +" id тронутого элемента: "+ ui.item.attr('id'));
            //columnIdEnd = ui.item.parent().attr('id');
            //console.log("id конечной колонки: "+columnIdEnd)

            //console.log(ui)
            $.ajax({
                url: 'http://localhost:3001/board',
                type: 'POST',
                //contentType: 'application/json',
                data: JSON.stringify({json}),
                dataType: "json",
                contentType: "application/json",// //data: { a: "a"},
            })
            .done(function(response) {
                //render
                console.log(response);
            });
          }//end update

         /*stop: function(event, ui) {
             alert("Позиция элемента c id "+ui.item.attr('id')+": "+ui.item.index())//позиция элемента
             console.log(ui.item.prev());*/
             //alert(ui.item.attr('id'));
             //когда карточка переместилась
             //var data = $(this).sortable('toArray');
             //console.log(data);
			//$("#result").html("JSON:<pre>"+JSON.stringify(data)+"</pre>");
            //взять каждого ребенка .column и вывести его id
            //$(".column > div").each(function(i, children) {
                //var order = $('.column').sortable("toArray")//узнаем новый порядок карточек для каждой колонки
                //var j = '{"order": ' + JSON.stringify(order) + ', ""}';//{"order": ["01","02","03"]}//формируем JSON на основании новых данных
                //console.log(j)
            //})
            //обновление данных
            /*
            $.ajax({
                url: 'http://localhost:3000',
                type: 'post',
                //contentType: 'application/json',
                data: j,
                success: function(response) {
                    console.log("id saved");
                }
            });*/
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