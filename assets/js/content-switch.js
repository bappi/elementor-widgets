jQuery('.advanced_blocks_content_switch_container').each(function(){
	const __this = jQuery(this);
	 jQuery(this).find('.advanced_blocks_content_switch_content_on').hide();
	if(__this.find('.advanced_blocks_content_switch').hasClass('on')){
		__this.find('.advanced_blocks_content_switch input').click();
		 __this.find('.advanced_blocks_content_switch input').prop('checked', true);
		 __this.find('.advanced_blocks_content_switch input').addClass('test');
		 jQuery(this).find('.advanced_blocks_content_switch_content_on').show();
		jQuery(this).find('.advanced_blocks_content_switch_content_off').hide();
	}
	__this.find('.advanced_blocks_content_switch input').on('click',function(){
		if(jQuery(this).is(':checked')){
			jQuery(this).parents('.advanced_blocks_content_switch').addClass('on');
			jQuery(this).parents('.advanced_blocks_content_switch').removeClass('off');
			jQuery(this).parents('.advanced_blocks_content_switch_container').find('.advanced_blocks_content_switch_content_on').show();
			jQuery(this).parents('.advanced_blocks_content_switch_container').find('.advanced_blocks_content_switch_content_off').hide();
		} else{
			jQuery(this).parents('.advanced_blocks_content_switch').removeClass('on');
			jQuery(this).parents('.advanced_blocks_content_switch').addClass('off');
			jQuery(this).parents('.advanced_blocks_content_switch_container').find('.advanced_blocks_content_switch_content_on').hide();
			jQuery(this).parents('.advanced_blocks_content_switch_container').find('.advanced_blocks_content_switch_content_off').show();
		}
	});
	__this.find('.aae_label1,.aae_label2').on('click',function(){
		jQuery(this).siblings('.switch_slider').children('input').click();
	});
});