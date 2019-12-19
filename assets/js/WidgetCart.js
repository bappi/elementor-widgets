(function(){
	$('.quantity .plus').on('click',function(){
		 let display = parseInt($(this).siblings('.display').val());
		 display = display +=1
		 $(this).siblings('.display').val(display)
	});
	$('.quantity .minus').on('click',function(){
		 let display = parseInt($(this).siblings('.display').val());
		 display = display -=1
		 $(this).siblings('.display').val(display)
	});
})()