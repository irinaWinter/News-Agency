    /* конфигурация */
    // var width = 250; // ширина изображения
    // var count = 1; // количество изображений

    // var carousel = document.getElementById('carousel');
    // var list = carousel.querySelector('ul');
    // var listElems = carousel.querySelectorAll('li');

    // var position = 0; // текущий сдвиг влево

    // var field = document.querySelector('.galery__ul');
    // var arr = document.querySelectorAll('.galery__li');

    //  var elem = arr[0];
    //  arr[0].onclick = function() {
    //   field.appendChild(arr[1]);
    //   // position = Math.min(position + width * count, 0);
    //   list.style.marginLeft = position + 'px';
       
    //  }
    //  arr[1].onclick = function() {
    //   field.appendChild(arr[0]);
    //   // position = Math.min(position + width * count, 0);
    //   list.style.marginLeft = position + 'px';
      
    //  }


        var list = document.querySelector('.galery__ul');
        var position = 0;
        var width = 225;
        list.onclick = function() {
        	if (position === 0) {
        		position -= width;
        	} else { position += width}
        	
       		list.style.marginLeft = position + "px";
        }


