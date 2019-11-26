$(document).ready(function(){
	$(window).on("load resize scroll",function(e){
	    var maxHeight = 0,maxElementHeight = null;

	var maxHeight = function(elems){
	    return Math.max.apply(null, elems.map(function ()
	    {
	        return $(this).outerHeight();
	    }).get());
	}
	jQuery('.advanced_blocks_timeline.horizontal').each(function(index, el) {
        var nextArrow,prevArrow,dotsClass,dots,arrows,slidesToShow,centerMode,autoplay,centerPadding;
        if(jQuery(this).hasAttr('nextArrow')){
            nextArrow = jQuery(this).attr('nextArrow');
        }
        if(jQuery(this).hasAttr('prevArrow')){
            prevArrow = jQuery(this).attr('prevArrow');
        }
        if(jQuery(this).hasAttr('dotsClass')){
            dotsClass = jQuery(this).attr('dotsClass');
        }
        if(jQuery(this).hasAttr('dots')){
            dots = jQuery(this).attr('dots');
        }
        if(jQuery(this).hasAttr('arrows')){
            arrows = jQuery(this).attr('arrows');
            console.log('arrya is ',  arrows);
        }
        if(jQuery(this).hasAttr('slidesToShow')){
            slidesToShow = jQuery(this).attr('slidesToShow');
            slidesToShow = slidesToShow.split(' ')
        }
         if(jQuery(this).hasAttr('centerMode')){
            centerMode = jQuery(this).attr('centerMode');
        }
         if(jQuery(this).hasAttr('centerPadding')){
            centerPadding = jQuery(this).attr('centerPadding');
            console.log(centerPadding , 'paddding')
        }
         if(jQuery(this).hasAttr('enableAutoPlay')){
            autoplay = jQuery(this).attr('enableAutoPlay');
            autoplay = autoplay === 'true' ? true : false
            console.log('autoplay', autoplay)
        }
        jQuery(this).not('.slick-initialized').slick({
            slidesToShow: slidesToShow ? parseInt(slidesToShow[0]) : 1,
            centerPadding:  centerPadding ? centerPadding : '0px',
            slidesToScroll: 1,
            dots: dots === 'true' ? true : false,
            centerMode: centerMode ? true : false,
            arrows: arrows === 'true' ? true : false,
            nextArrow: arrows === 'true' ? '<button type="button" class="slick-next">' + nextArrow + '</button>' : null,
            prevArrow: arrows === 'true' ? '<button type="button" class="slick-prev">' + prevArrow + '</button>' : null,
            dotsClass: dots === 'true' ? dotsClass : null,
            autoplay: autoplay === 'true' ? autoplay : false,
            autoplaySpeed: 3500,
            responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        arrows: true,
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        arrows: true,
			        slidesToShow: 3,
			        vertical: true,
			        verticalSwiping: true,
			      }
			    }
			  ]
        })
    });
	var actual = maxHeight($(".advanced_blocks_timeline.horizontal .slick-slide"));

		if($(this).width() >= 576){
			$('.advanced_blocks_timeline.horizontal .slick-slide').each(function(){
				console.log(actual)
				maxHeight = (actual * 2) + 100;
				console.log(actual,'',maxHeight)
		       	$(this).parents('.slick-list').height(maxHeight);
				if($(this).attr('data-slick-index') % 2 === 0){
					$(this).addClass('even');
					$(this).css({
						'transform': 'translateY('+ ( maxHeight / 2 + 48) +'px)',
					})
				}
				
		})
		} else {
			
		}
	});
	

});