window.onload = function() {
	menuMobile();
	toggleMenu();
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
	document.querySelector('.header').prepend(menuMobile);
}
function toggleMenu() {
	let menu = document.querySelector('.header--menu');
	document.querySelector('.header--hamburger').addEventListener('click', function() {
		this.classList.toggle('open');
		menu.classList.toggle('open');
		
	});

}