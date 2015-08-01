/*global jQuery */
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */
function changepdf(name) {
    "use strict";
    document.getElementById("viewer").innerHTML =
        "<iframe  src = 'ViewerJS/#../assets/pdf/" + name + ".pdf' width='100%' height='80%' allowfullscreen webkitallowfullscreen></iframe>";
}


jQuery(function ($) {

    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 
    'use strict';
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                && location.hostname === this.hostname) {
            var $target = $(this.hash),
                targetOffset;
            $target = ($target.length && $target)
                || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                targetOffset = $target.offset().top;
                $('html,body')
                    .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });

    /*==========================================
  PARALLAX SCRIPTS
   =====================================================*/

    
    $('.parallax').scrolly({ bgParallax: true });

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/

});