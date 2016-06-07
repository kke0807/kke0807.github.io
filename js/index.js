 $(function(){
     
 $('button').hide();
    $(window).on('scroll',function(){
        var win_h = $(this).height();
        var menu = $('#menu').find('li');
        var sc = $(this).scrollTop();
       
        if($(this).scrollTop()>0){
            $('button').fadeIn();
        }else{
            $('button').fadeOut();
        }
         $('button').on('click',function(){
             $('html,body').stop().animate({scrollTop:0},450);
             return false;
         });
        
        menu.children('a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$(this.hash).offset().top - 75},200);
     }); // menu.hash
   }); //scroll
});