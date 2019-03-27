window.onload = function() {
	menuMobile();
}


function menuMobile() {
	let i;
	let headerMobile = document.createElement('div');
	let header = document.querySelector('.header');
	let headerItems = document.querySelectorAll('.header > *');
	headerMobile.classList.add('header--mobile');
	if (window.innerWidth < 767) {
		console.log('estrutura nova do menu');
		console.log(headerMobile);
		for (i=0; i<headerItems.length; i++) {
			switch( true ){
				case headerItems[i].classList.contains('header--logo'):
					headerMobile.append(headerItems[i]);
					break;
    		case headerItems[i].classList.contains('header--hamburger'):
     		 	headerMobile.append(headerItems[i]);
    		  break;
    		case headerItems[i].classList.contains('header--bag'):
     			headerMobile.append(headerItems[i]);
    		  break;      
  		}
		}
		header.prepend(headerMobile);
	}
}