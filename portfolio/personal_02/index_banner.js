/*index_banner.js*/

function indexbanner(){
 var banner = $('.banner_box_page'),
          banLi = banner.find('li'),
          banLiFirst = banner.find('li').first(),
          banLiWid = parseInt(banLi.width()),
          banLihei = parseInt(banLi.height()),
          ind = $('#indicator_box'),
          indLi = ind.find('li'),
          indLiFirst = ind.find('li').first(),
          u_btn = $('.btn_01'),
          d_btn = $('.btn_02'),
          
          slideTime = 1000, //1초 : 배너움직이는 시간
          settingTime = 3100; //1.1초 : 슬라이드가 작동되게 하는 시간(버튼)
      
    // 인디게이터 크기 활성화
    indLiFirst.addClass('indWidth');
    
    // 첫번째 이미지 보이기
    banLi.last().clone().prependTo('.banner_box_page'); //banLi 배너 내부의 li(하나의 배너부분)
    indLi.last().clone().prependTo('#indicator_box'); //indLi 인디케이트의 하나
     
 
    // 인디게이터 표시 및 위치 이동
    indLi.on('click', function(){
    var $this = $(this),
        index = $this.index(),
        indexPlus = index - 1,
        banLi = banner.find('li'),
        banLihei = parseInt(banLi.height());
           
        $this.addClass('indWidth').siblings().removeClass('indWidth');
        banner.stop().animate({'margin-top':-banLihei*index},slideTime,function(){
        });
    });
      
    // slidebtn 버튼클릭
    u_btn.on('click', function(){
        var bannerML = parseInt(banner.css('margin-top'));
        if(bannerML == -banLihei){
        banner.stop().delay(500).animate({'margin-top':"+="+banLihei},slideTime, function(){
        banner.css({'margin-top':-banLihei*4})
        });
            $('#indicator_box li').last().addClass('indWidth').siblings().removeClass('indWidth');
          }else{
            banner.stop().delay(500).animate({'margin-top':"+="+banLihei},slideTime)
            var bannerMarginCut = Math.abs( parseInt($('.banner_box_page').css('margin-top') ) ) / $('.banner_box_page').find('li').height();
             $('#indicator_box li').eq(bannerMarginCut-1).addClass('indWidth').siblings().removeClass('indWidth');
            console.log(bannerMarginCut);
          };
        });
    
      var downBtn = function(){
        d_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-top'));
            if(bannerML <= -banLihei*4){
              banner.css({'margin-top':0}).stop().delay(500).animate({'margin-top':"-="+banLihei},slideTime);
            }else{
              banner.stop().delay(500).animate({'margin-top':"-="+banLihei},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('.banner_box_page').css('margin-top') ) ) / $('.banner_box_page').find('li').height();
           $('#indicator_box li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
          console.log(bannerMarginCut);
        });
      }
      downBtn();
    
      indLi = ind.find('li').eq(0);
      indLi.first().css({'display':'none'});                                                            
 };
    
