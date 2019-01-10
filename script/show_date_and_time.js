var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var timeAndDate = hours + " " + minutes + " " + day + " " + month + " " + year;

function showDateAndTime () {
	var dateAndTimeBlock = document.getElementsByClassName("header__text_dateTime");
	dateAndTimeBlock[0].innerHTML = timeAndDate;
}
showDateAndTime();
// alert(timeAndDate);