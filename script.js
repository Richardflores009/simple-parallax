window.addEventListener('scroll',function(e){

    const target = document.querySelectorAll('.scroll')

    // var scrolled = window.pageYOffset;
    // var rate = scrolled * .5;

    // target.style.transform = 'translate3d(0px,'+rate+'px, 0px)'

    for (let i = 0; i < target.length; i++) {
        var pos = window.pageYOffset * target[i].dataset.rate;

        if(target[i].dataset.direction === 'vertical') {
            target[i].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
        } else {
            var posX = window.pageYOffset * target[i].dataset.ratex;
            var posY = window.pageYOffset * target[i].dataset.ratey;
            
            target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }
})