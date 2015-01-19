


if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
          $('.navigation-wrapper').css('position','absolute')// 
  
          // $('.bright').css('position','absolute')first value for left offset, second value for top offset
}else{
   $(window).scroll(function() { window_fade(); });

}

$(document).ready(function(){
	$(this).scrollTop(0);
	header_in_margin_top = $('.content').css('margin-top').replace('px', '');
	if ($(".header-image").length)
		$(".header-image").backstretch($('.header-image').data('url'));


        $('a[href^="#"]').on('click', function(event) {
    
    var target =  $( $(this).attr('href') );

    if( target.length ) {
         console.log(target)
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 300);
    }
});

});





function window_fade() {
    window_scroll = $(this).scrollTop();
  console.log(window_scroll)
    var margin_top = parseInt((window_scroll/6)) + parseInt(header_in_margin_top);

    $('.header-image').css({
			'opacity' : 1-(window_scroll/300),
			'margin-top' : -window_scroll
    });
    
    $('.logo a').css({
			'opacity' : 1-(window_scroll/300)
    });
    
    $('.logo_alt a').css({
			'opacity' : 0+(window_scroll/300)
    });
    
    if (window_scroll > 40)
    {
	    $('.navigation-wrapper').css('position','fixed');
	    $('.navigation-wrapper').css('top',40);
         $('a:link').css('color','#000')
               $('a:link').css('color','#000')
         
    } else {
	    $('.navigation-wrapper').css('position','absolute');
	    $('.navigation-wrapper').css('top',40);
   
          $('a:link').css('color','rgb(247, 245, 226)')
    }
    
    if (window_scroll > 300)
    {
	    // $('.navigation-wrapper').css('background-color','#F7F5E2');
       
          // $('.navigation-wrapper').css('background-color','rgb(104, 115, 165)');
        $('.navigation-wrapper').css('position','absolute')
             $('.navigation-wrapper').css('margin-top','300px')
              $('a:link').css('color','#000')
 	    
    } 
    else {
        
    	$('.navigation-wrapper').css('border-top', '0');
	    $('.navigation-wrapper').css('background-color','transparent');
	    $('.navigation-wrapper').css('box-shadow', 'none');
	    $('.navigation-wrapper').css('border', 'none');	
        $('.navigation-wrapper').css('position','fixed') 
        $('.navigation-wrapper').css('margin-top','0px')
    }
    if (window_scroll > 1064){
         $('.profile').css({'opacity' : (-0.75+(window_scroll/1564))*4})
   
}

    if (window_scroll > 1435){
         $('.navigation-wrapper').css('position','fixed');
    $('.navigation-wrapper').css('margin-top','0px')
       $('a:link').css('color','#000')
        
   
}
   if (window_scroll > 1514){
         $('.navigation-wrapper').css('position','absolute');
    $('.navigation-wrapper').css('margin-top','1514px')
    $('a:link').css('color','#F7F5E2')
    $('.contactsme a').css('color','rgb(103, 130, 141)')
    $('.sayhelloagain').css('color','rgb(103, 130, 141)')
}

   if (window_scroll > 1925){
         $('.navigation-wrapper').css('position','fixed');
    $('.navigation-wrapper').css('margin-top','0px')
    $('a:link').css('color','#F7F5E2')
 
}
   if (window_scroll > 1975){
         $('.navigation-wrapper').css('position','absolute');
    $('.navigation-wrapper').css('margin-top','1975px')
    $('a:link').css('color','rgb(103, 130, 141)')
}
    }