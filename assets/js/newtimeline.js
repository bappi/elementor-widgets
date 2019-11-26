$(document).ready(function(){
	$(window).on("load resize scroll",function(e){
	    var maxHeight = 0,maxElementHeight = null;

	var maxHeight = function(elems){
    return Math.max.apply(null, elems.map(function ()
    {
        return $(this).outerHeight();
    }).get());
}
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