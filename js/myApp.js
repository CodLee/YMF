document.addEventListener("touchmove",function(e){
    // e.preventDefault();//默认可以下滑
});
// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  startSlide:0,/*开始是第几页*/ 
  auto: 2000,//自动播放的时间间隔 
  continuous: true,// 
  // disableScroll: true,
  // stopPropagation: true,
  callback: function(index, element) {
    $("#mySwipe li").css("background-color","red");
    $("#mySwipe li").eq(index).css("background-color","#fff");
  }
});
$('.top_btn').on('click',function(){
  $('.sidebar').addClass('on');
});
$('.sidebar .right').on('click',function(e){
    $('.sidebar').removeClass('on');
    console.info(12)
});
$('.sidebar .item').on('click',function(){
  $(this).addClass('on').siblings().removeClass('on');
})
