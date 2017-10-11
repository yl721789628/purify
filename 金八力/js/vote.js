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
        $('.mnav-li a').css('text-decoration','none');
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
    // 滚动条
    var drag = $('.drag');
    var box = $('.dragBox');
    var  out= $('.infoWrap');
    var con = $('.infoCon');
    //scrollY(drag,box,out,con)
    // 补课考勤
    $('.selectBtn').click(function(){
        $('.selectBtn').addClass("notSelect")
        if($(this).hasClass('notSelect')){
            $(this).removeClass('notSelect')
        }
    });
    // 按时迟到按钮
    $('.detailInfo span').click(function(){        
        var par = $(this).parent().parent();
        par.find('span').removeClass('actSpan');
        $(this).addClass('actSpan');
    });

        
    // 导航字体
// var urlArr = [];
// $('.navLink').click(function(){
//     var i = $(this).index()-1;
//     if(i==0){
//         var width = '35px';
//     }else{
//         var width = '75px';
//     };

//     $('.orImg').show();
//     $(this).find('.orImg').hide();
//     $('.changeImg').hide();
//     if(i==0){
//         var orwidth = '13px';
//     }else{
//          var orwidth = '65px';
//     };
//     $('.changeImg').css('width',orwidth);
//     $(this).find('.changeImg').show();
//     $(this).find('.changeImg').animate({'width':width},0,function(){
//         window.location.href = urlArr[i];
//     });
// });
//按钮按钮处理
var rows = Math.ceil($('.infoCon li').length/4);//此处应根据ajax获得数据取得
var len = $('.infoCon li').length;
// 以上是ajax里的
if(len<12){
    $('.infoCon').css('height',rows*110+'px');
    $('.commiteBtn').show();
    $('.dragOut').hide();
}else{
    scrollY(drag,box,out,con)
    $('.infoCon').css('height',rows*110+100+'px');
}
$('.infoCon').on('mousewheel DOMMouseScroll',function(e){
    if(len<12){
        return ;
    };
    var e=e||window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else{
        e.returnValue=false;
    };
    var bottom = parseInt($('.drag').position().top);
    if(bottom>150){
        $('.commiteBtn').fadeIn()

    }else{
        $('.commiteBtn').hide()
    }
});
$('.drag').mousedown(function(){
    $('*').mousemove(function(){
    var bottom = parseInt($('.drag').position().top);
    if(bottom>150){
        $('.commiteBtn').show()
    }else{
        $('.commiteBtn').hide()
    }
    })
})