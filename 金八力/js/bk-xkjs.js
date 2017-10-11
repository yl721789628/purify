/**
 * Created by admin on 2017/4/18.
 */
$(function(){
    /*备课-培训中心-滚动条*/
  /*  var subdrag = document.getElementsByClassName('bksub-drag')[0];
    var subbor = document.getElementsByClassName('bksub-sclbor')[0];
    var subbox = document.getElementsByClassName('bksub-sclbox')[0];
    var subtxt = document.getElementsByClassName('bksub-txt')[0];
    scrollY(subdrag,subbor,subbox,subtxt);*/
   /* $(window).load(function(){
        $(".bksub-sclcnt").mCustomScrollbar({
            theme:"minimal"
            // 这里可以根据背景颜色来通过theme选择自定义样式，
        });
    });*/

    /*微视屏*/
    function showBg(){
        var bh = $('body').height();
        var bw = $('body').width();
        $('#bksub-shade').css({
            height:bh,
            width:bw,
            display:'block',
            position:'absolute',
            top:0,
            left:0
        });
    };
    $('.bksub-vv-video').click(function () {
        showBg();

    });
    $('.bksub-close').click(function(){
        $('#bksub-shade').css({
            display:'none'
        })
    });
});
