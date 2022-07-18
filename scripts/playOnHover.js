let vidContainers = document.querySelectorAll('.play-on-hover');
vidContainers.forEach(container => {
    container.addEventListener('mouseenter', videoHoverIn);
    container.addEventListener('mouseleave', videoHoverOut);

    let vid = container.firstElementChild.firstElementChild;

    let pausedTime = parseFloat(vid.dataset.starttime);
    (pausedTime !== NaN) ? 
    vid.currentTime = pausedTime : vid.currentTime = 0;
});

function videoHoverIn(e) {
    let vid = e.target.firstElementChild.firstElementChild;
    let pausedTime = parseFloat(vid.dataset.starttime);
    (pausedTime !== NaN) ? 
    vid.currentTime = pausedTime : vid.currentTime = 0;
    vid.play();
}

function videoHoverOut(e) {
    let vid = e.target.firstElementChild.firstElementChild;
    vid.pause();

    let pausedTime = parseFloat(vid.dataset.starttime);
    (pausedTime !== NaN) ? 
    vid.currentTime = pausedTime : vid.currentTime = 0;
}