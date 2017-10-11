$(function(){		   
	//设计案例切换
	$('.title-list li').click(function(){
		var liindex = $('.title-list li').index(this);
		$(this).css('cursor','pointer');
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
});

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
        var k = $(this).index();
        $('.mnav-li a').css('text-decoration','none');
        $(this).find('.mnav-option').show();
        $(this).find('.mav').addClass(arr[k]);
    },function(){
        var k = $(this).index();
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
