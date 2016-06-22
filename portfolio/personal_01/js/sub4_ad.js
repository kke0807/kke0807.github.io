/*sub4_ad.js*/
 $(function(){
    var ad_box = $('.ad_box').find('iframe'), 
        ad_li =  $('#ad').find('li');
    ad_li.eq(0).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/SIw0aiIeA10'});
    });
    ad_li.eq(1).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/k7njUtkMqsQ'});
    });
    ad_li.eq(2).on('click',function(e){
        e.preventDefault();
        ad_box.attr({'src':'https://www.youtube.com/embed/HwTjMRyKxfo'});
    });
});