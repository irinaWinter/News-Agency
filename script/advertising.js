// var list = document.querySelector('.advertising__ul');
// var position = 0;
// var width = 225;
// list.onclick = function() {
//     if (position === 0) {
//         position -= width;
//     } else { position += width}
//         list.style.marginLeft = position + "px";
// }

    var list = document.querySelector('.advertising');
    var visibleArea = document.querySelector('.advertising__ul');
    var dailyNews = document.querySelector('.newsBlock_dailyNews');
    var advertising = document.querySelector('.advertising');
    var dailyNewsStyle = getComputedStyle(dailyNews);
    var listItem = document.querySelector('.advertising__li');
    var position = 0;
    var position2 = 0;
    // var width = 225;
    var changeSlide = function() {
        
    }
    list.onclick = function() {
            var computedStyle = getComputedStyle(list);
            var arr = computedStyle.width.split('');
            arr.splice(-2, 2);  
            var width = +(arr.join(''));        
    	if (document.documentElement.clientWidth < 463) {
        	if (position === 0) {
           		position -= 250 - (width - 270);
        	} else {
                position = 0;
            }
            visibleArea.style.marginLeft = position + "px";
    	}

        if (document.documentElement.clientWidth < 983 && document.documentElement.clientWidth > 755) {
            var listItemStyle = getComputedStyle(listItem);
            var arr2 = listItemStyle.width.split('');
            arr2.splice(-2, 2);
            var height = +(arr2.join(''));
            var heightUl = visibleArea.style.height.split('');
            heightUl.splice(-2, 2);
            heightUl = +(heightUl.join(''));
   
            if (position2 === 0) {
                position2 = height - heightUl + height + 20;
            } else {
                position2 = 0;
            }
            visibleArea.style.marginTop = position2 + "px";
        }
        console.log(heightUl + "- высота видимой части");
        console.log(height + "- высота изображения " + position2 + '- отступ');
	}
    var resize = function() {
        if (document.documentElement.clientWidth < 983 && document.documentElement.clientWidth > 755) {
            visibleArea.style.height = dailyNewsStyle.height; 
            advertising.style.height = dailyNewsStyle.height;
        }
    }
    window.onload = resize;
    window.onresize = resize;

 