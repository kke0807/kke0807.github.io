//service_menu.js
 function service_menu(){
     var service_menu = $('#eyeborowbar_menu'),
         service_dl = service_menu.find('dl'),
         service_dt = service_dl.find('dt'),
        service_dd = service_dl.find('dd');
    
       service_dl.find('.eyeborowbar_menu2').fadeOut();
       service_dl.find('.eyeborowbar_menu3').fadeOut();
       service_dl.find('.eyeborowbar_menu4').fadeOut();
       service_dl.find('.eyeborowbar_menu5').fadeOut();
 
    service_dl.find('.eyeborowbar_1').children('a').addClass("eyeborowbar_1on");
    service_dl.find('.eyeborowbar_2').children('a').addClass("eyeborowbar_2off");
    service_dl.find('.eyeborowbar_3').children('a').addClass("eyeborowbar_3off");
    service_dl.find('.eyeborowbar_4').children('a').addClass("eyeborowbar_4off");
    service_dl.find('.eyeborowbar_5').children('a').addClass("eyeborowbar_5off");
    
     
    service_dl.find('.eyeborowbar_1').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("eyeborowbar_1off");
    $this.children('a').addClass("eyeborowbar_1on");
 
    service_dl.find('.eyeborowbar_5').children('a').addClass("eyeborowbar_5off").removeClass("eyeborowbar_5on");
    service_dl.find('.eyeborowbar_2').children('a').addClass("eyeborowbar_2off").removeClass("eyeborowbar_2on");
    service_dl.find('.eyeborowbar_3').children('a').addClass("eyeborowbar_3off").removeClass("eyeborowbar_3on");
    service_dl.find('.eyeborowbar_4').children('a').addClass("eyeborowbar_4off").removeClass("eyeborowbar_4on");

    service_dd.eq(0).fadeIn();
    service_dd.eq(1).fadeOut();
    service_dd.eq(2).fadeOut();
    service_dd.eq(3).fadeOut();
    service_dd.eq(4).fadeOut();

    
    });
     
    service_dl.find('.eyeborowbar_2').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("eyeborowbar_2off");
    $this.children('a').addClass("eyeborowbar_2on");
        
    service_dl.find('.eyeborowbar_1').children('a').addClass("eyeborowbar_1off").removeClass("eyeborowbar_1on");
    service_dl.find('.eyeborowbar_3').children('a').addClass("eyeborowbar_3off").removeClass("eyeborowbar_3on");
    service_dl.find('.eyeborowbar_4').children('a').addClass("eyeborowbar_4off").removeClass("eyeborowbar_4on");
    service_dl.find('.eyeborowbar_5').children('a').addClass("eyeborowbar_5off").removeClass("eyeborowbar_5on");
 
    service_dd.eq(1).fadeIn();
    service_dd.eq(0).fadeOut();
    service_dd.eq(2).fadeOut();
    service_dd.eq(3).fadeOut();
    service_dd.eq(4).fadeOut();

    });
     
    service_dl.find('.eyeborowbar_3').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("eyeborowbar_3off");
    $this.children('a').addClass("eyeborowbar_3on");
        
    service_dl.find('.eyeborowbar_1').children('a').addClass("eyeborowbar_1off").removeClass("eyeborowbar_1on");
    service_dl.find('.eyeborowbar_2').children('a').addClass("eyeborowbar_2off").removeClass("eyeborowbar_2on");
    service_dl.find('.eyeborowbar_4').children('a').addClass("eyeborowbar_4off").removeClass("eyeborowbar_4on");
    service_dl.find('.eyeborowbar_5').children('a').addClass("eyeborowbar_5off").removeClass("eyeborowbar_5on");

    service_dd.eq(2).fadeIn();
    service_dd.eq(0).fadeOut();
    service_dd.eq(1).fadeOut();
    service_dd.eq(3).fadeOut();
    service_dd.eq(4).fadeOut();

     
    });
     
    service_dl.find('.eyeborowbar_4').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("eyeborowbar_4off");
    $this.children('a').addClass("eyeborowbar_4on");
        
    service_dl.find('.eyeborowbar_1').children('a').addClass("eyeborowbar_1off").removeClass("eyeborowbar_1on");
    service_dl.find('.eyeborowbar_2').children('a').addClass("eyeborowbar_2off").removeClass("eyeborowbar_2on");
    service_dl.find('.eyeborowbar_3').children('a').addClass("eyeborowbar_3off").removeClass("eyeborowbar_3on");
    service_dl.find('.eyeborowbar_5').children('a').addClass("eyeborowbar_5off").removeClass("eyeborowbar_5on");
   
    service_dd.eq(3).fadeIn();
    service_dd.eq(0).fadeOut();
    service_dd.eq(1).fadeOut();
    service_dd.eq(2).fadeOut();
    service_dd.eq(4).fadeOut();

    });
     
    service_dl.find('.eyeborowbar_5').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    $this.children('a').removeClass("eyeborowbar_5off");
    $this.children('a').addClass("eyeborowbar_5on");
        
    service_dl.find('.eyeborowbar_1').children('a').addClass("eyeborowbar_1off").removeClass("eyeborowbar_1on");
    service_dl.find('.eyeborowbar_2').children('a').addClass("eyeborowbar_2off").removeClass("eyeborowbar_2on");
    service_dl.find('.eyeborowbar_3').children('a').addClass("eyeborowbar_3off").removeClass("eyeborowbar_3on");
    service_dl.find('.eyeborowbar_4').children('a').addClass("eyeborowbar_4off").removeClass("eyeborowbar_4on");
   
    service_dd.eq(4).fadeIn();
    service_dd.eq(0).fadeOut();
    service_dd.eq(1).fadeOut();
    service_dd.eq(2).fadeOut();
    service_dd.eq(3).fadeOut();

    });
     
 };
