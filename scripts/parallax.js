// Parallax Movement of title with scroll
const bgVideoTitle = document.querySelector('.bg-video-text');
let pageHeight = document.body.getBoundingClientRect().height - window.innerHeight;
let viewportHeight = document.documentElement.clientHeight;

function updateHeight(){
    pageHeight = document.body.getBoundingClientRect().height - window.innerHeight;
    viewportHeight = document.documentElement.clientHeight;
}

document.addEventListener('resize', function(){
    updateHeight();
    viewportHeight = document.documentElement.clientHeight;
});

function parallaxMovement(e) {
    var scrolled = window.scrollY;
    var scrollRate = scrolled * -0.8;
    var opacityRate = 2;

    bgVideoTitle.style.transform = "translate3d(" + scrollRate + "px, 0px, 0px)"
    bgVideoTitle.style.opacity = (100 - ((window.scrollY/pageHeight) * 100 * opacityRate) ) + "%";
}

window.addEventListener("scroll", parallaxMovement);
