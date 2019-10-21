$(window).on('load',function(){
	// $('.grid').isotope({
	// 	  itemSelector: '.grid_item',
	// 	  masonry: {

	// 	 columnWidth: 0
	// 	  }
	// 	});

	$('.grid').isotope({
		  layoutMode: 'packery',
		  itemSelector: '.grid_item'
		});

});

