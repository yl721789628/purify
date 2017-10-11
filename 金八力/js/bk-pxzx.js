/**
 * Created by admin on 2017/4/18.
 */
$(function(){
    /*备课-培训中心-滚动条*/
   /* var pxzdrag = document.getElementsByClassName('bk-pxzx-drag')[0];
    var pxzscbox = document.getElementsByClassName('bk-pxzx-sclbox')[0];
    var pxzbox = document.getElementsByClassName('bk-pxzx-box')[0];
    var pxzul = document.getElementsByClassName('bk-pxzx-ul')[0];
    scrollY(pxzdrag,pxzscbox,pxzbox,pxzul);*/
    $(window).load(function(){
        $(".bk-pxzx-scl").mCustomScrollbar({
            theme:"minimal"
            // 这里可以根据背景颜色来通过theme选择自定义样式，
        });
    });

    /*==备课副导航*/
    $('.vinav_title li').click(function (){
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active');
    });
});
