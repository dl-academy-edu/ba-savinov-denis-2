let mobileMenuOpen = document.querySelector("#mobile-btn-open"),
    mobileMenuClose = document.querySelector("#mobile-btn-close"),
    mobilemenu = document.querySelector(".header-mobile");
    
//mobile menu

mobileMenuOpen.addEventListener ('click', () => {

    if(mobilemenu.classList.contains("header-mobile-hidden")) {
      
		mobilemenu.classList.remove('header-mobile-hidden');
      
	}
    // overlay.classList.add('popup-visible');
    // modalWindow.classList.add('popup-visible');
    // modalInput.focus();
})

mobileMenuClose.addEventListener ('click', () => {

    if(!mobilemenu.classList.contains("header-mobile-hidden")) {
      
		mobilemenu.classList.add('header-mobile-hidden');
      
	}
    // overlay.classList.add('popup-visible');
    // modalWindow.classList.add('popup-visible');
    // modalInput.focus();
})