(function ($) {
	"use strict";


    jQuery(document).ready(function($){
        
        // Responsive Embed
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        
        

        // Bootstrap tooltips
        $('[data-toggle="tooltip"]').tooltip();    

        // jQuery Instafeed
        

        // Parallax
       
        
        
        // Scroll to up
        $('.scroll-to-top a').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });          

    });


    jQuery(window).load(function(){
        // Masonry
        jQuery('.masonry-blog').masonry({ singleMode: true });
        
        // Preloader
        jQuery(".preloader").fadeOut(500);
    });
    
    
}(jQuery));	    