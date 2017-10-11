$(".icon1").mouseover(function(){
	$(this).attr("src","../images/school/z1.png");
})

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
//lyh补充开始
//
//
function lyh(box,con,a,b){
	$(box).hover(function(){
		$(con).attr('src',a)
	},function(){
$(con).attr('src',b)
	})
}

lyh('.lyh','.lyh>img','images/school/b2.png','images/school/b1.png')
lyh('.lyh','.lyh>img','images/school/b2.png','images/school/b1.png')

$('.lyh1').mouseenter(function(){
	$(".lyh1>img").attr('src','images/school/x2.png')
})
$('.lyh1').mouseleave(function(){
	$(".lyh1>img").attr('src','images/school/x1.png')
})

$('.lyh2').mouseenter(function(){
	$(".lyh2>img").attr('src','images/school/q2.png')
})
$('.lyh2').mouseleave(function(){
	$(".lyh2>img").attr('src','images/school/q1.png')
})

$('.lyh3').mouseenter(function(){
	$(".lyh3>img").attr('src','images/school/k2.png')
})
$('.lyh3').mouseleave(function(){
	$(".lyh3>img").attr('src','images/school/k1.png')
})

$('.lyh4').mouseenter(function(){
	$(".lyh4>img").attr('src','images/school/g2.png')
})
$('.lyh4').mouseleave(function(){
	$(".lyh4>img").attr('src','images/school/g1.png')
})

$('.lyh5').mouseenter(function(){
	$(".lyh5>img").attr('src','images/school/w2.png')
})
$('.lyh5').mouseleave(function(){
	$(".lyh5>img").attr('src','images/school/w1.png')
})

$('.lyh6').mouseenter(function(){
	$(".lyh6>img").attr('src','images/school/zs2.png')
})
$('.lyh6').mouseleave(function(){
	$(".lyh6>img").attr('src','images/school/zs1.png')
})

$('.lyh7').mouseenter(function(){
	$(".lyh7>img").attr('src','images/school/kc2.png')
})
$('.lyh7').mouseleave(function(){
	$(".lyh7>img").attr('src','images/school/kc1.png')
})

$('.lyh8').mouseenter(function(){
	$(".lyh8>img").attr('src','images/school/bang2.png')
})
$('.lyh8').mouseleave(function(){
	$(".lyh8>img").attr('src','images/school/bang1.png')
})

$('.lyh9').mouseenter(function(){
	$(".lyh9>img").attr('src','images/school/tun2.png')
})
$('.lyh9').mouseleave(function(){
	$(".lyh9>img").attr('src','images/school/tun1.png')
})

$('.lyh10').mouseenter(function(){
	$(".lyh10>img").attr('src','images/school/tunj2.png')
})
$('.lyh10').mouseleave(function(){
	$(".lyh10>img").attr('src','images/school/tunj1.png')
})

$('.lyh11').mouseenter(function(){
	$(".lyh11>img").attr('src','images/school/jiang2.png')
})
$('.lyh11').mouseleave(function(){
	$(".lyh11>img").attr('src','images/school/jiang1.png')
})

$('.lyh12').mouseenter(function(){
	$(".lyh12>img").attr('src','images/school/xuban2.png')
})
$('.lyh12').mouseleave(function(){
	$(".lyh12>img").attr('src','images/school/xuban1.png')
})
$('.lyh13').mouseenter(function(){
	$(".lyh13>img").attr('src','images/school/z2.png')
})
$('.lyh13').mouseleave(function(){
	$(".lyh13>img").attr('src','images/school/z1.png')
})




$('#lyh_jiantou').mouseenter(function(){
	$('#lyh_jiantou>img').attr('src','images/school/orange.png')
	$("#lyh_jiantou>a").css('color','orange')
	
})
$('#lyh_jiantou').mouseleave(function(){
	$('#lyh_jiantou>img').attr('src','images/school/green.png')
	$("#lyh_jiantou>a").css('color','green')
	
})

$('#lyh_jiantoua').mouseenter(function(){
	$('#lyh_jiantoua>img').attr('src','images/school/orange.png')
	$("#lyh_jiantoua>a").css('color','orange')
	
})
$('#lyh_jiantoua').mouseleave(function(){
	$('#lyh_jiantoua>img').attr('src','images/school/green.png')
	$("#lyh_jiantoua>a").css('color','green')
	
})

$('#lyh_jiantoub').mouseenter(function(){
	$('#lyh_jiantoub>img').attr('src','images/school/orange.png')
	$("#lyh_jiantoub>a").css('color','orange')
	
})
$('#lyh_jiantoub').mouseleave(function(){
	$('#lyh_jiantoub>img').attr('src','images/school/green.png')
	$("#lyh_jiantoub>a").css('color','green')
	
})




$(function(){
$('#lyh_zhankai').toggle(function(){
	$('.lyh_ml1').slideToggle(200)
	$('#lyh_zhankai').animate({"top":-160},200);
},function(){
	$('.lyh_ml1').slideToggle(200)
	$('#lyh_zhankai').animate({"top":-80},200);
})
})



//鼠标移入的时候背景颜色改变
function lyh1(name,sex){
	$(name).hover(function(){
		$(name).css('background',"yellow")
		$(sex).css("color","gray")
	},function(){
	$(name).css('background',"none")
	$(sex).css("color","white")
	$(name).children('a').removeClass('font_a')

	
	})
}
// lyh1(".manage_wrap")
lyh1(".lyh",".lyh a")
lyh1(".lyh1",".lyh1 a")
lyh1(".lyh2",".lyh2 a")
lyh1(".lyh3",".lyh3 a")
lyh1(".lyh4",".lyh4 a")
lyh1(".lyh5",".lyh5 a")
lyh1(".lyh6",".lyh6 a")
lyh1(".lyh7",".lyh7 a")
lyh1(".lyh8",".lyh8 a")
lyh1(".lyh9",".lyh9 a")
lyh1(".lyh10",".lyh10 a")
lyh1(".lyh11",".lyh11 a")
lyh1(".lyh12",".lyh12 a")
lyh1(".lyh13",".lyh13 a")


function lyh2(name1){
	$(name1).click(function(){
		$(this).css('background',"yellow")
		$(this).children('a').addClass('font_a')
	})
}
lyh2(".lyh13")
lyh2(".lyh")
lyh2(".lyh1")
lyh2(".lyh2")
lyh2(".lyh3")
lyh2(".lyh4")
lyh2(".lyh5")
lyh2(".lyh6")
lyh2(".lyh7")
lyh2(".lyh8")
lyh2(".lyh9")
lyh2(".lyh10")
lyh2(".lyh11")
lyh2(".lyh12")


//lyh补充结束