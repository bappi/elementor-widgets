jQuery('.parallax-window').each(function() {
        var image = jQuery(this).attr('data-bg');
        jQuery(this).parallax({
            imageSrc: image
        });
    });