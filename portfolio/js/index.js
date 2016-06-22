 $(function(){
     
 $('.top_btn').hide();
    $(window).on('scroll',function(){
        var win_h = $(this).height();
        var menu = $('#menu').find('li');
        var sc = $(this).scrollTop();
       
        if($(this).scrollTop()>0){
            $('.top_btn').fadeIn();
        }else{
            $('.top_btn').fadeOut();
        }
         $('.top_btn').on('click',function(){
             $('html,body').stop().animate({scrollTop:0},450);
             return false;
         });
        
        menu.children('a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$(this.hash).offset().top - 72},200);
     }); // menu.hash
   }); //scroll
     /*--------scroll_mousewheel-----------*/
     var article_H = $('.window_h').height()+450,
        timed=1000;
     
      function amouse(){
        $('.window_h').on('mouseenter',function(){
          var win_index=$(this).index(); 
          var win_i = win_index - 1;
            
          var win_offset = article_H * win_i;
          
            console.log(win_offset);
           return win_offset;
        });
        };
       
   
      $('html, body').on('mousewheel DOMMouseScroll',function(e){
       
        var E = e.originalEvent;
        var delta=E.deltaY; // 위아래
        amouse();
     
     if(delta > 0){
            $('html , body').stop().animate({'scrollTop':'+=' + article_H},timed);
             console.log("마우스 휠을 내렸습니다.");
         } else{
               $('html , body').stop().animate({'scrollTop':'-='+article_H},timed);
              console.log("마우스 휠을 올렸습니다.");
         };      
     
      });
});