// White background on active menu item, depending on current page
function activeNavItemHandler(){
    const navItems = document.querySelectorAll('.nb-main-link');
    const currPath = window.location.pathname.toString();
    let newActiveIndex = 0;
    
    switch (currPath) {
        case "/index.html":
            newActiveIndex = 0;
            break;
        case "/servicios.html":
            newActiveIndex = 1;
            break;
        case "/nosotros.html":
            newActiveIndex = 2;
            break;
        case "/contacto.html":
            newActiveIndex = 3;
            break;
    }

    navItems[newActiveIndex].classList.add('active');

}
setTimeout(activeNavItemHandler, 500); //timeout set to give DOM time to update after navbar insertion

// Hide and show navbar when scrolling down and up, respectively
const navBar = document.querySelector('.nav-bar');
let oldScroll = document.pageYOffset
function hideNavOnScroll(e){
    if (scrollY < oldScroll || scrollY <= 0){
        // console.log('Scroll UP');
        navBar.classList.remove('hide');
    }
    else {
        // console.log('Scroll DOWN');
        navBar.classList.add('hide');
    }

    oldScroll = this.scrollY;
}

window.addEventListener("scroll", hideNavOnScroll);

// Ham Menu handler for mobile
setTimeout(() => {
    const hamMenuButton = document.querySelector('#ham-menu-button');
    hamMenuButton.addEventListener('click', function(e){
        hamMenuButton.classList.toggle('button-active');
        navBar.classList.toggle('mobile-active');
    });
    
    // closing ham menu mobile
    navBar.addEventListener('click', function(e){
        hamMenuButton.classList.remove('button-active');
        navBar.classList.remove('mobile-active');
    });
    
}, 500); 

// Expand submenus on mobile
setTimeout(() => {
    const mobileExpandButtons = document.querySelectorAll('.mobile-expand-button');
    mobileExpandButtons.forEach(button => {
        button.addEventListener('touchstart', mobileMenuExpander, false);
        button.addEventListener('click', mobileMenuExpander, false);
    });
}, 500);

//Expand submenus for mobile
function mobileMenuExpander(e){
    e.preventDefault();
    e.stopPropagation();

    let targetExpandButton = e.target;
    targetExpandButton.classList.toggle('expand');

    let targetInnerList = e.target.parentNode.nextElementSibling;
    targetInnerList.classList.toggle('expand');

    const allExpandButtons = document.querySelectorAll('.mobile-expand-button');
    allExpandButtons.forEach(button => {
        // Close previously expanded submenu, if present
        if (button !== e.target && button.classList.contains('expand')){
            button.classList.remove('expand');

            let oldExpandedMenu = button.parentNode.nextElementSibling;
            oldExpandedMenu.classList.remove('expand');
        }
    });
    


}
