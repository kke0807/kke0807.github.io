// index_banner.js

function slidebanner(banner){
    var b_box = banner,
        b_box_ul = b_box.find('ul'),
        b_box_li = b_box.find('li'),
        b_box_li_width = b_box.find('li').width(),
        l_btn = $('.index_btn_1'),
        r_btn = $('.index_btn_2');
   b_box_li.last().prependTo(b_box_ul);

        l_btn.on('click',function(){ 
            var b_li= b_box.find('li');
         b_li.first().stop().animate({'margin-left' : b_box_li_width },700,function(){
            b_li.css({'margin-left':0});
            b_li.last().prependTo(b_box_ul);
            });
         });  
        r_btn.on('click',function(){
            var b_li= b_box.find('li')
         .first().stop().animate({'margin-left' : -b_box_li_width },700,function(){
            b_li.css({'margin-left':0}).
            first().appendTo(b_box_ul);
            });
        });    
        // 자동움직임
      // var timer;
      // 일정한 시간간격을 두고 움직이는기능 : setInterval
      function startBtn(){ settingTime = setInterval('$(".index_btn_2").click()', 3000) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});
}//slidebanner