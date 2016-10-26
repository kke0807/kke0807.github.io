//shop_movie.js
 function brnad_movie(){
     var ad_box=$('#ads').find('iframe'),
         ad_li =  $('#ads').find('li');
        
    ad_li.eq(0).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/OY7WUGThICY'});
    });
     
    ad_li.eq(1).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/M58dcf6jbtc'});
    });
     
    ad_li.eq(2).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/JKp1VslcRac'});
    });
     
    ad_li.eq(3).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/s1KAI3VWyuQ'});
    });
     
    ad_li.eq(4).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/4DaevBwCtN4'});
    });
     
    ad_li.eq(5).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/P7Jlfi-ey6c'});
    });
     
    ad_li.eq(6).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/C7barpr5VCM'});
    });
     
    ad_li.eq(7).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/wqCpxN57cAs'});
    });
     
    ad_li.eq(8).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/jAz1ezNlHes'});
    });
 };

