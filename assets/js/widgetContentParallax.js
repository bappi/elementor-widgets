(function($) {

    "use strict";
    $(window).on('load', function() {
        var wrapper = document.querySelector('.advanced_parallax_layer_container');
        if ($('.advanced_parallax_layer_container').length > 0) {
            var layerOne = document.querySelector('.advanced_parallax_layer1');
            var layerTwo = document.querySelector('.advanced_parallax_layer2');
            wrapper.addEventListener('mousemove', function(e) {
                var pageX = e.clientX,
                    pageY = e.clientY;
                     console.log('page X: ', e.clientX,'Page y: ', e.clientY);
                layerOne.style.webkitTransform = 'translateX(' + pageX / 1000 + '%) translateY(' + pageY / 70 + '%)';
                layerOne.style.transform = 'translateX(' + pageX / 1000 + '%) translateY(' + pageY / 70 + '%)';

                layerTwo.style.webkitTransform = 'translateX(' + pageX / 260 + '%) translateY(' + pageY / 70 + '%)';
                layerTwo.style.transform = 'translateX(' + pageX / 1000 + '%) translateY(' + pageY / 70 + '%)';

            });
        }
    });

})(jQuery);