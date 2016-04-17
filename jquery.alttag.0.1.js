jQuery(document).ready(function(){

    jQuery("body").altTag({
        test: true,
        roleLink: true
    });

});

(function ( $ ) {

    $.fn.altTag = function( options ) {

        //Dafaults
        var settings = $.extend({
            test:     false,
            fix:      true,
            alt:      'image',
            roleLink: false
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
        if( settings.roleLink ) {
            jQuery("body a").each(function(index,value){
                jQuery(this).attr("role","link");
            });
        }


    };

}( jQuery ));
