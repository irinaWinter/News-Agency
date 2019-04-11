	var colon = ":";

	function blinkColon() {
		if (colon === ":") {		
			return colon = " ";
			
		} else {
			return colon = ":";
		};		
	}
	
	function showDateAndTime() {
		var date = new Date();
		var hours = date.getHours();
		if (hours < 10) hours = "0" + hours;
		var minutes = date.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;
		var day = date.getDate();
		if (day < 10) day = "0" + day;
		var month = date.getMonth();
		var monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		if (monthNumber[month] < 10) monthNumber[month] = "0" + monthNumber[month];
		var year = date.getFullYear();

		var timeAndDate = hours + blinkColon() + minutes + " " + day + "." +
						  monthNumber[month] + "." + year;
		var dateAndTimeBlock = document.getElementsByClassName("tagline__text_dateTime");
		dateAndTimeBlock[0].innerHTML = timeAndDate;
	}
	showDateAndTime();
	setInterval(showDateAndTime, 500);