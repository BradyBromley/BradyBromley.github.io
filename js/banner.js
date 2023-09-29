const checkpoint = 250;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll/checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector('#bannerImage').style.opacity = opacity;
});