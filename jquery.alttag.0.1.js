(function ( $ ) {

    $.fn.altTag = function( options ) {

        //Dafaults
        var settings = $.extend({
            test : false,
            fix  : true,
            alt  : 'image'
        }, options );

        //Run test if enabled
        if( settings.test ) {

            var noAlt   = [];
            var withAlt = [];

            jQuery("body img").each(function(index,value){

                var imageElement = jQuery(this);

                if( imageElement.attr("alt") ){
                    withAlt.push(index);
                } else {
                    noAlt.push(index);
                }

            });

            console.log("total images without alt tag: " + noAlt.length);

        }

        //Fix missing alt tags with default image string
        if( settings.fix ) {

            jQuery("body img").each(function(index,value){

                var imageElement = jQuery(this);

                if( !imageElement.attr("alt") ){
                    imageElement.attr("alt",settings.alt)
                }

            });

        }

    };

}( jQuery ));
