$('.testimonial_button.prev').on('click',function(){
    $(".advanced_blocks_testimonial_slider").slick('slickPrev');
});
$('.testimonial_button.next').on('click',function(){
    $(".advanced_blocks_testimonial_slider").slick('slickNext');
});

$('.advanced_blocks_testimonial_slider.dark .slick-prev').on('click',function(){
	$(this).parents('.advanced_blocks_testimonial_slider.dark ').addClass('prev');
	$(this).parents('.advanced_blocks_testimonial_slider.dark ').removeClass('next');
})
$('.advanced_blocks_testimonial_slider.dark .slick-next').on('click',function(){
	$(this).parents('.advanced_blocks_testimonial_slider.dark ').addClass('next');
	$(this).parents('.advanced_blocks_testimonial_slider.dark ').removeClass('prev');
})

