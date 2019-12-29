(function(jQuery){

	// Whole-script strict mode syntax
	'use strict';
	var __this,result;
	jQuery('.offcanva_btn').on('click',function(e){
		__this = jQuery(this);
		e.preventDefault();
		result = jQuery(this).attr('data-canvas');
		result = result.replace(' ', '');
		jQuery('.advanced_blocks_offcanvas[id*=' + result + ']').toggleClass('active');
		jQuery('body').toggleClass('offcanvas_open');
	});
	jQuery('.offcanvas_cancel').on('click',function(e){
		__this = jQuery(this);
		e.preventDefault();
		__this.parents('.advanced_blocks_offcanvas').removeClass('active');
		jQuery('body').removeClass('offcanvas_open');
	});

	jQuery(document).mouseup(function (e) { 
		 var container = jQuery('.offcanvas_content,.offcanva_btn');
		 if (!container.is(e.target) && container.has(e.target).length === 0) {
		 	jQuery('.advanced_blocks_offcanvas').removeClass('active');
		 	jQuery('body').removeClass('offcanvas_open');
		 }
	});

})(jQuery)