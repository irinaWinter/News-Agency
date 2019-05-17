var menu = document.querySelector('.menu_header');
var burger = document.querySelector('.Hamburger');
var calendar = document.querySelector('.calendar');
var main = document.querySelector('.main');
var footer = document.querySelector('.footer');
var footer_copyright = document.querySelector('.footer_copyright');

burger.addEventListener('click', function() {
	if (menu.style.display == 'block') {
		menu.style.display = '';
		calendar.style.display = '';
		main.style.display = '';
		footer.style.display = '';
		footer_copyright.style.display = '';
	} else {
		menu.style.display = 'block';
		calendar.style.display = 'none';
		main.style.display = 'none';
		footer.style.display = 'none';
		footer_copyright.style.display = 'none';
	}
});