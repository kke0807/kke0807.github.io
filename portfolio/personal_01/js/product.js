
function content1(content1){
    var b_box = content1,
        b_box_ul = b_box.find('ul'),
        b_box_li = b_box.find('li'),
        b_box_li_width = b_box.find('li').width(),
        l_btn = $('.product1_btn_01'),
        r_btn = $('.product1_btn_02');
   b_box_li.last().prependTo(b_box_ul);

        l_btn.on('click',function(){ 
            var b_li= b_box.find('li');
         b_li.first().stop().animate({'margin-left' : b_box_li_width },500,function(){
            b_li.css({'margin-left':0});
            b_li.last().prependTo(b_box_ul);
            });
         });  
        r_btn.on('click',function(){
            var b_li= b_box.find('li')
         .first().stop().animate({'margin-left' : -b_box_li_width },500,function(){
            b_li.css({'margin-left':0}).
            first().appendTo(b_box_ul);
            });
        });    
    /* function startBtn(){ settingTime = setInterval('$(".product1_btn_02").click()', 2500) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});*/
}

function content2(content2){
    var b_box = content2,
        b_box_ul = b_box.find('ul'),
        b_box_li = b_box.find('li'),
        b_box_li_width = b_box.find('li').width(),
        l_btn = $('.product2_btn_01'),
        r_btn = $('.product2_btn_02');
   b_box_li.last().prependTo(b_box_ul);

        l_btn.on('click',function(){ 
            var b_li= b_box.find('li');
         b_li.first().stop().animate({'margin-left' : b_box_li_width },500,function(){
            b_li.css({'margin-left':0});
            b_li.last().prependTo(b_box_ul);
            });
         });  
        r_btn.on('click',function(){
            var b_li= b_box.find('li')
         .first().stop().animate({'margin-left' : -b_box_li_width },500,function(){
            b_li.css({'margin-left':0}).
            first().appendTo(b_box_ul);
            });
        });    
    /* function startBtn(){ settingTime = setInterval('$(".product2_btn_02").click()', 2500) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});*/
}
function content3(content3){
    var b_box = content3,
        b_box_ul = b_box.find('ul'),
        b_box_li = b_box.find('li'),
        b_box_li_width = b_box.find('li').width(),
        l_btn = $('.product3_btn_01'),
        r_btn = $('.product3_btn_02');
   b_box_li.last().prependTo(b_box_ul);

        l_btn.on('click',function(){ 
            var b_li= b_box.find('li');
         b_li.first().stop().animate({'margin-left' : b_box_li_width },500,function(){
            b_li.css({'margin-left':0});
            b_li.last().prependTo(b_box_ul);
            });
         });  
        r_btn.on('click',function(){
            var b_li= b_box.find('li')
         .first().stop().animate({'margin-left' : -b_box_li_width },500,function(){
            b_li.css({'margin-left':0}).
            first().appendTo(b_box_ul);
            });
        });    
   /* function startBtn(){ settingTime = setInterval('$(".product3_btn_02").click()', 2500) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});*/
}

function productbox(productbox){
   var imgbox     = productbox,
       gallerybox = $('#product_con'),
       gallerybtn = gallerybox.find('a');
    
    	imgbox.html("<img src='./img/images/sub_product/content1/product1_1.png'>").find('img')
				.css({'width': 100+'%', 'height': 'auto'});

    	// 이미지 클릭
	gallerybtn.on('click', function(e){
		e.preventDefault();
            $(window).width(500);
		var imgspan = imgbox.find('div'),
				data_img = $(this).attr("data-img"),
				a_nar = $(this).text(),
				a_el = $(this).html();

			// 갤러리 큰창에 이미지 및 alt값 넣기	
		imgbox.find('img')
					.attr({'src': data_img, 'alt':a_nar});

		imgbox.find('div').stop().animate({'bottom': '-100px'},500, function(){
			imgspan.html(a_el).animate({'bottom':0},500);
		});

	}); // gallerybtn.click
}