window.onload = function() {
	menuMobile();
}


function menuMobile() {
	let i;
	let menuMobile = document.createElement('div');
	let hamburger = document.createElement('div');
	let logo = document.querySelector('.header--logo');
	let cart = document.querySelector('.header--bag');
	let search = document.querySelector('.header--search');
	let nav = document.querySelector('.header--menu');
	hamburger.innerHTML = "<span></span><span></span><span></span>";
	menuMobile.classList.add("header--mobile");
	hamburger.classList.add("header--hamburger");	

	menuMobile.appendChild(hamburger);
	menuMobile.appendChild(logo);
	menuMobile.appendChild(cart);
	menuMobile.appendChild(search);
	menuMobile.appendChild(nav);
	console.log(hamburger);
	console.log(menuMobile);
	document.querySelector('.header').prepend(menuMobile);






	// let i;
	// let headerMobile = document.createElement('div');
	// let header = document.querySelector('.header');
	// let headerItems = document.querySelectorAll('.header > *');
	// headerMobile.classList.add('header--mobile');
	// if (window.innerWidth < 767) {
	// 	console.log('estrutura nova do menu');
	// 	console.log(headerMobile);
	// 	for (i=0; i<headerItems.length; i++) {
	// 		switch( true ){
	// 			case headerItems[i].classList.contains('header--logo'):
	// 				headerMobile.append(headerItems[i]);
	// 				break;
 //    		case headerItems[i].classList.contains('header--hamburger'):
 //     		 	headerMobile.append(headerItems[i]);
 //    		  break;
 //    		case headerItems[i].classList.contains('header--bag'):
 //     			headerMobile.append(headerItems[i]);
 //    		  break;      
 //  		}
	// 	}
	// 	header.prepend(headerMobile);
	// }
}