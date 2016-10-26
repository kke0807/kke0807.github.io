//menu_btn.js
 function menu_btn(){
     var headBox=$('#Headbox'),
         menu_btn = $('.menu_btn'),
         menu_dl = headBox.find('dl');
     
     menu_btn.on('click',function(){
        menu_btn.toggleClass('menu_btnBox');  
        });
 };