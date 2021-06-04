let mobileMenuOpen = document.querySelector("#mobile-btn-open"),
    mobileMenuClose = document.querySelector("#mobile-btn-close"),
    mobilemenu = document.querySelector(".header-mobile");

mobileMenuOpen.addEventListener ('click', () => {
    if(mobilemenu.classList.contains("header-mobile-hidden")) {
		mobilemenu.classList.remove('header-mobile-hidden');
	}
})

mobileMenuClose.addEventListener ('click', () => {
    if(!mobilemenu.classList.contains("header-mobile-hidden")) {
		mobilemenu.classList.add('header-mobile-hidden');
	}
})

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        if (window.outerWidth>768) {
            if(!mobilemenu.classList.contains("header-mobile-hidden")) {
                mobilemenu.classList.add('header-mobile-hidden');
            }
        }
    };
});