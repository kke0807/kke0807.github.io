//shop_movie.js
 function shop_movie(){
    var shopmovieWrap=$('#shopmovieWrap'),
         play_btn = $('.play_btn');
    play_btn.on('click',function(){
    var $this = $(this);
     $this.parent().html('<iframe width="100%" height="350px" src="https://www.youtube.com/embed/M58dcf6jbtc?autoplay=1&loop=1" frameborder="0" allowfullscreen>');  
    }); 
 };