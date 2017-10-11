/**
 * Created by admin on 2017/4/18.
 */



(function($){
    $(window).load(function(){
        $(".class-box").mCustomScrollbar({
            theme:"minimal"
            // 这里可以根据背景颜色来通过theme选择自定义样式，
        });
    });

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
    $('.exp_video').click(function () {
        showBg();
    });
    $('.bksub-close').click(function(){
        $('#bksub-shade').css({
            display:'none'
        })
    });
    /*导航默认第一个为选中状态*/
    $(".vinav_title li a").eq(0).addClass('active');
    $(".vinav-scnt-ul a").eq(0).addClass('acolor');
    $(".vinav-scnt-ul a").click(function(){
        $(this).addClass('acolor').siblings().removeClass('acolor');
    });

})(jQuery);
