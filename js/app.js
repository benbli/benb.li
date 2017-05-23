(function () {
"use strict";
    // Initialize the soot
    function _init() {
        // TODO: create a Soot object with interaction methods
        var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        x=w.innerWidth||e.clientWidth||g.clientWidth,
        y=w.innerHeight||e.clientHeight||g.clientHeight;

        var windowWidth = window.innerWidth - 250;
        var windowHeight = window.innerHeight - 350;
        var soot = document.querySelector('.soot-main');

        // Soot runs away on mouseoever
        soot.addEventListener('mouseover', function(e) {
            e.preventDefault();

            var randomWidth = Math.floor(Math.random() * windowWidth);
            var randomHeight = Math.floor(Math.random() * windowHeight);

            soot.style.top = randomWidth + 'px';
            soot.style.left = randomHeight + 'px';
            soot.style.animation = 'animation-blur 1s ease-in-out 1';
        })
    }

    // TODO: Listener for 'victory'

    // Main loop
    _init();

})(document);