function embedNavBar(){
    const navBar = document.querySelector('.nav-bar');
    fetch('/navbar.html')
    .then(resp => resp.text())
    .then(data => {
        navBar.innerHTML = data;
    });
}

function embedFooter(){
    const footer = document.querySelector('.site-footer');
    fetch('/footer.html')
    .then(resp => resp.text())
    .then(data => {
        footer.innerHTML = data;
    });
}

embedNavBar();
embedFooter();