$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        smoothHeight: true,
        controlNav: false,
        directionNav:true,
        slideshowSpeed: 4000
    });
});

$(function () {
    // Side toggle
    $('.side-toggle').on('click',function(){
        var $self = $(this), $body = $('body'), open = $body.hasClass('side-open'), $mask = $('.page-mask');
        $self.toggleClass('close',!open);
        $body.toggleClass('side-open',!open);
        if (!open){
            $mask.removeClass('hide').off('click').on('click',function(){
                $(this).addClass('hide');
                $self.removeClass('close');
                $body.removeClass('side-open');
            });
        }
    });  

    //lazyoad
    $("img.lazy").lazyload({ threshold :180});

    //go top bar
    $(window).scroll(function () {
        if($(window).scrollTop() <= 600){
            $('.gotop').hide();
        }else{
            $('.gotop').show();
        }
    });
    $('.gotop').on('click',function () { 
        $(window).scrollTop(0) ;
    })
    
})
 