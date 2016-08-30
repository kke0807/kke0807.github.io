//shop_menu.js
 function shop_menu(){
     var shop_menu=$('#shop_menu'),
         shop_dl = shop_menu.find('dl'),
         shop_dt = shop_dl.find('dt'),
         shop_dd = shop_dl.find('dd');
     
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(2).fadeOut(); 
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(4).fadeOut();
    shop_dd.eq(5).fadeOut();
     
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1on");
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off");

     
    shop_dl.find('.shopmenu_1').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_1off");
    $this.children('a').addClass("shopmenu_1on");
       
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off");
  
    shop_dd.eq(0).fadeIn();
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(2).fadeOut();
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(4).fadeOut();
    shop_dd.eq(5).fadeOut();
    
    });
     
    shop_dl.find('.shopmenu_2').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_2off");
    $this.children('a').addClass("shopmenu_2on");
        
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off");
  
    shop_dd.eq(1).fadeIn();
    shop_dd.eq(0).fadeOut();
    shop_dd.eq(2).fadeOut();
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(4).fadeOut();
    shop_dd.eq(5).fadeOut();
    });
     
    shop_dl.find('.shopmenu_3').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_3off");
    $this.children('a').addClass("shopmenu_3on");
        
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1off");
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off");
    shop_dd.eq(2).fadeIn();
    shop_dd.eq(0).fadeOut();
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(4).fadeOut();
    shop_dd.eq(5).fadeOut();
     
    });
     
    shop_dl.find('.shopmenu_4').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_4off");
    $this.children('a').addClass("shopmenu_4on");
        
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1off");
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off"); 
        
    shop_dd.eq(3).fadeIn();
    shop_dd.eq(0).fadeOut();
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(2).fadeOut();
    shop_dd.eq(4).fadeOut();
    shop_dd.eq(5).fadeOut();
    });
     
    shop_dl.find('.shopmenu_5').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_5off");
    $this.children('a').addClass("shopmenu_5on");
        
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1off");
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_6').children('a').addClass("shopmenu_6off");    
    shop_dd.eq(4).fadeIn();
    shop_dd.eq(0).fadeOut();
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(2).fadeOut();
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(5).fadeOut();
    
    });
    shop_dl.find('.shopmenu_6').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("shopmenu_6off");
    $this.children('a').addClass("shopmenu_6on");
        
    shop_dl.find('.shopmenu_1').children('a').addClass("shopmenu_1off");
    shop_dl.find('.shopmenu_2').children('a').addClass("shopmenu_2off");
    shop_dl.find('.shopmenu_3').children('a').addClass("shopmenu_3off");
    shop_dl.find('.shopmenu_4').children('a').addClass("shopmenu_4off");
    shop_dl.find('.shopmenu_5').children('a').addClass("shopmenu_5off");    
    shop_dd.eq(5).fadeIn();
    shop_dd.eq(0).fadeOut();
    shop_dd.eq(1).fadeOut();
    shop_dd.eq(2).fadeOut();
    shop_dd.eq(3).fadeOut();
    shop_dd.eq(4).fadeOut();
    
    });
     
 };
