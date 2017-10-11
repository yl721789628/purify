/**
 * Created by admin on 2017/4/15.
 */

$(function(){
    /*==主导航==*/
    var con = $('div.mnav-option>ul');
    con.each(function(i){
        var lis = $(this).find('li'),
            w = 0;
        lis.each(function(j){
            w += $(this).outerWidth(true);
        })
        $(this).css('width',w+2 + 'px');
    })
    /*主导航-默认当前页面的副标题出现*/
    var arr = ['mnav1','mnav2','mnav3','mnav4','mnav5'];
    var k = 0;
    $('.mnav-nav .mnav-option').hide();
    $('.mnav-li').hover(function(){
        k = $(this).index();
        $(this).find('.mnav-option').show();
        $(this).find('.mav').addClass(arr[k]);
    });
    $('.mnav-li').mouseleave(function(){
        $('.mnav-nav .mnav-option').hide();
        $(this).find('.mav').removeClass(arr[k]);
    });
    /*主导航-用户名/退出*/
    $('.set_user').on('mouseover mouseleave',function(){
        if(event.type == 'mouseover'){
            $(this).find('.set_change_user').show();
        }else{
            $(this).find('.set_change_user').hide();
        }
    });
    /*==备课副导航*/
    $('.vinav_title li').click(function (){
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active');
    });

    /*===备课-课件视频*/
    $('.bksub-vv').click(function(){
        var current = 0;
        $(this).siblings('p') .fadeToggle(800);
        $(this).toggleClass('bg');
    });
    $('.bksub-left li').click(function () {
        var i = $(this).index();
        $(this).addClass('bksub-left-select').siblings().removeClass('bksub-left-select');
        $('.bksub-right .bksub-box ').eq(i).addClass('bksub-right-select').siblings().removeClass('bksub-right-select');
    });


});