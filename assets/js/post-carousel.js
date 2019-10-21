 jQuery.fn.hasAttr = function(name) {  
       return this.attr(name) !== undefined && this.attr(name) !== '';
    };


function responsiveOptions(centerPadding){
        console.log('sdsd',centerPadding[1])
        return [
            {
              breakpoint: 1024,
              settings: {
                centerPadding: centerPadding ? '300px' : centerPadding[0],
              }
            },
            {
              breakpoint: 800,
              settings: {
                centerPadding: centerPadding ? centerPadding[0] : centerPadding[1],
              }
            },
            {
              breakpoint: 700,
              settings: {
                centerPadding: centerPadding ? centerPadding[1] : centerPadding[1],
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerPadding: centerPadding ? centerPadding[1] : centerPadding[1],
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: centerPadding ? centerPadding[2] : centerPadding[2],
              }
            }
      ]
    }

var myCarousel = $('.advanced_blocks_blog_post_carousel.type-2'),
    centerPadding;
    console.log(centerPadding)
$('.advanced_blocks_blog_post_carousel.type-2').on('init',function(){
    $(".slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
    $(".slick-active").next().removeClass('prevdiv').addClass('nextdiv');
});

 if(myCarousel.hasAttr('centerPadding')){
            centerPadding = myCarousel.attr('centerPadding');
            centerPadding = centerPadding.split(' ')
              console.log(centerPadding[0])
        }
$('.advanced_blocks_blog_post_carousel.type-2').slick({
  centerMode: true,
  centerPadding: centerPadding ? centerPadding[0] : '',
  focusOnSelect: true,
  dots: true,
  slidesToShow: 1,
  arrows: true,
  responsive: centerPadding ? responsiveOptions(centerPadding) : null
}).on('afterChange',function(){
    $(".advanced_blocks_blog_post_carousel.type-2 .slick-active").prev().removeClass('nextdiv').addClass('prevdiv');
    $(".advanced_blocks_blog_post_carousel.type-2 .slick-active").next().removeClass('prevdiv').addClass('nextdiv');
}).on('beforeChange',function(){
  $('.slick-slide').removeClass('prevdiv nextdiv');
});