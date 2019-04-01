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
	let logo = document.querySelector('.header--logo');
	let bag = document.querySelector('.header--bag');
	let search = document.querySelector('.header--search');
	// menu.classList.add('animated');
	document.querySelector('.header--hamburger').addEventListener('click', function() {
		this.classList.toggle('open');
		if (menu.classList.contains('open')) {
			console.log('fechei');
			// menu.classList.remove('open');
			animateCSS(menu, 'fadeOut', function() {
				menu.classList.remove('open');
				console.log('test');
			});
		} else {
			console.log('abri');
			// menu.classList.add('open');
			animateCSS(menu, 'fadeIn', function() {
				console.log('test');
			});
			menu.classList.add('open');
		}

		// menu.classList.toggle('open');
		logo.classList.toggle('hidden');
		bag.classList.toggle('hidden');
	});
}

function animateCSS(element, animationName, callback) {
    // const node = document.querySelector(element)
    element.classList.add('animated', animationName)

    function handleAnimationEnd() {
        element.classList.remove('animated', animationName)
        element.removeEventListener('animationend', handleAnimationEnd)
        // console.log('test');
        if (typeof callback === 'function') callback()
    }

    element.addEventListener('animationend', handleAnimationEnd)
}