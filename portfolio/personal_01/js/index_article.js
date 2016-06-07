//index_article.js

function articlenew(new_product){
    var b_box = new_product,
        b_box_ul = b_box.find('ul'),
        b_box_li = b_box.find('li'),
        b_box_li_width = b_box.find('li').width(),
        l_btn = $('.product_btn_01'),
        r_btn = $('.product_btn_02');
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
    
}

function articlemain(main_product){
    var b_box = main_product,
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
    
}