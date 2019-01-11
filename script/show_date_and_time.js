$(function() {	
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;
	var day = date.getDate();
	var month = date.getMonth();
	var monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	if (monthNumber[month] < 10) monthNumber[month] = "0" + monthNumber[month];
	var year = date.getFullYear();
	var timeAndDate = hours + "<span class='header__span_style_blink'>:</span>" + minutes + " " + day + "." + monthNumber[month] + "." + year;
	// function blink() {
	// 	if ($('.header__span_style_blink') == ":") {
	// 		$('.header__span_style_blink') == "dkfv";
	// 	} else {
	// 		$('.header__span_style_blink') == ":";
	// 	}
	// }
	function showDateAndTime () {
		var dateAndTimeBlock = document.getElementsByClassName("header__text_dateTime");
		dateAndTimeBlock[0].innerHTML = timeAndDate;
	}
	showDateAndTime();
	// blink();
});	