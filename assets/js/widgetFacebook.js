// external js: isotope.pkgd.js

$(window).on('load',function(){
	$('.grid').isotope({
		  itemSelector: '.grid_item',
		  masonry: {
		 columnWidth: 0
		  }
		});
});

jQuery.fn.hasAttr = function(name) {  
       return this.attr(name) !== undefined && this.attr(name) !== '';
    };

$('.advanced_blocks_slider.type-3').on('init',function(){
    $(".slick-active").removeClass('slick-prev-item')
    $(".slick-active").removeClass('slick-next-item');
    $('.slick-center').prev().addClass('slick-next-item');
    $('.slick-center').next().addClass('slick-prev-item');
     $(".slick-center").removeClass('slick-prev-item');
    $(".slick-center").removeClass('slick-next-item');
});
function responsiveOptions(slidesToShow){
        console.log('sdsd',slidesToShow[1])
        return [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: slidesToShow ? slidesToShow[0] : slidesToShow[0],
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: slidesToShow ? slidesToShow[1] : slidesToShow[1],
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: slidesToShow ? slidesToShow[1] : slidesToShow[1],
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: slidesToShow ? slidesToShow[1] : slidesToShow[1],
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: slidesToShow ? slidesToShow[2] : slidesToShow[2],
              }
            }
      ]
    }

$('.advanced_blocks_slider.type-3').each(function(){
	var dotsClass,dots,autoplay,slidesToShow;
	if(jQuery(this).hasAttr('dotsClass')){
            dotsClass = jQuery(this).attr('dotsClass');
        }
        if(jQuery(this).hasAttr('dots')){
            dots = jQuery(this).attr('dots');
        }
         if(jQuery(this).hasAttr('enableAutoPlay')){
            autoplay = jQuery(this).attr('enableAutoPlay');
            autoplay = autoplay === 'true' ? true : false
            console.log('autoplay', autoplay)
        }
        if(jQuery(this).hasAttr('slidesToShow')){
            slidesToShow = jQuery(this).attr('slidesToShow');
            slidesToShow = slidesToShow.split(' ')
        }

	$(this).slick({
  centerMode: true,
  centerPadding: '0',
  focusOnSelect: true,
  slidesToShow: slidesToShow ? parseInt(slidesToShow[0]) : 1,
  autoplay: autoplay ? autoplay : false,
   dots: dots ? true : false,
  dotsClass: dots ? dotsClass : null,
  arrows: false,
  responsive: slidesToShow ? responsiveOptions(slidesToShow) : null
}).on('afterChange',function(){
    console.log($(".slick-active"));
   $(".slick-active").removeClass('slick-prev-item')
    $(".slick-active").removeClass('slick-next-item'); 
   
    $('.slick-center').prev().addClass('slick-next-item');
    $('.slick-center').next().addClass('slick-prev-item');
     $(".slick-center").removeClass('slick-prev-item');
    $(".slick-center").removeClass('slick-next-item');
});

});



