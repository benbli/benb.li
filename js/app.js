"use strict";

(function () {
    // Initialize the soot    
    function _init() {
        // TODO: create a Soot object with private methods
        var windowWidth = window.innerWidth - 250;
        var windowHeight = window.innerHeight - 250;
        var soot = document.querySelector('.soot-main');
        
        // Soot runs away on mouseoever
        soot.addEventListener('mouseover', function(e) {
            e.preventDefault();
            
            var randomWidth = Math.floor(Math.random() * windowWidth);
            var randomHeight = Math.floor(Math.random() * windowHeight);
        
            soot.style.top = randomWidth + 'px';
            soot.style.left = randomHeight + 'px';
            soot.style.animation = 'animation-blur 1s ease 1';

           
           
            // if (soot.classList.contains('animation-blur')) {
            //     soot.classList.remove('animation-blur');
            // } else {
            //     soot.classList.add('animation-blur');
            // }
        })
    }

    // TODO: Listener for 'victory'

    // Main loop 
    _init();

})(document);