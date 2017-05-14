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

//JSON object to JS object
//строго в двойных скобках
var cardJSON = '{ "title" : "Другая карточка", "body": "Текст другой карточки"}'
console.log(cardJSON)//вывести JSON объект
cardJS = JSON.parse(cardJSON);//преобразование в javascript объект
console.log(cardJS)//JS объект








$(function() {
     $( ".column" ).sortable({
         connectWith: ".column", //взаимное перемещение межу
     }).disableSelection()
});