$( function() {

    $(".menu a").click(function(){
    	$(".menu a").removeClass( "active" );
    	$(this).addClass("active");
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

  } );