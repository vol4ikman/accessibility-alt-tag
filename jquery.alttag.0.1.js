(function ( $ ) {

    $.fn.altTag = function( options ) {

        //Defaults
        var settings = $.extend({
            test:     false,
            fix:      true,
            alt:      'image',
            rolelink: false,
            landmark: false
        }, options );

        var noAlt    = [];
        var emptyAlt = [];
        var withAlt  = [];

        jQuery("body img").each(function(index,value){
            var imageElement = jQuery(this);
            //Fix missing alt tags with default image string
            if( settings.fix ) {
                if( !imageElement.attr("alt") ){
                    imageElement.attr("alt",settings.alt)
                }
            }
            //Run test if enabled
            if( settings.test ) {
                if( imageElement.attr("alt") ){
                    withAlt.push(index);
                } else {
                    noAlt.push(index);
                }
            }
        });

        if( settings.test ) {
            console.log("total images without 'alt' tag: " + noAlt.length);
            console.log("total images with 'alt' tag: " + withAlt.length);
        }

        //Add role link to each <a> tag
        if( settings.rolelink ) {
            jQuery("body a").each(function(index,value){
                jQuery(this).attr("role","link");
            });
        }

        if( settings.landmark ) {
            jQuery("header").attr("role","banner");
            jQuery("nav").attr("role","navigation");
            jQuery("aside").attr("role","complementary");
            jQuery("footer").attr("role","contentinfo");
            jQuery("main").attr("role","main");
            jQuery(".search, #search, .searchform, #searchform").attr("role","search");
        }


    };

}( jQuery ));
