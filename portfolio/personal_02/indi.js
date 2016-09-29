/*indi.js*/
function indi(indi,banBox){
    var indi_btn = indi.find('li');
    indi_btn.on('click',function(e){
      e.preventDefault();
      var $this = $(this);
      var indexNum = $this.index(); 
      var  banner_li = banBox.find('li').width();
      var banAni  = indexNum * banner_li;
        //li의 위치값을 불러오는것.
        
    console.log(indexNum * banner_li);
        banBox.animate({'margin-left':-banAni},500);
  });
};
