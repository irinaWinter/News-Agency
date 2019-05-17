// var list = document.querySelector('.advertising__ul');
// var position = 0;
// var width = 225;
// list.onclick = function() {
//     if (position === 0) {
//         position -= width;
//     } else { position += width}
//         list.style.marginLeft = position + "px";
// }

    var list = document.querySelector('.advertising__ul');
    var position = 0;
    var width = 225;
    list.onclick = function() {
    	if (document.documentElement.clientWidth < 1000) {
        	if (position === 0) {
           		position -= width;
        	} else {
                position += width;
            }
            
            list.style.marginLeft = position + "px";
    	}
        console.log(list.width);
	}

