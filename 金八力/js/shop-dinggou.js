/**
 * Created by admin on 2017/5/4.
 */
$(document).ready(function(){
    
    /*地址收放功能*/
    $('.shouhuo-address-info a.shouhuo-toggle').on('click', function(){

    	if ($(this).hasClass('on')) {
    		$(this).removeClass('on').html('收起');
    		var h = $('.shouhuo-address-info>ul li').outerHeight() * $('.shouhuo-address-info>ul li').length;
			$('.shouhuo-address-info>ul').css({"height": h})
    	} else {
			$(this).addClass('on').html('展开');
    		var h = $('.shouhuo-address-info>ul li').outerHeight() * 2;
    		$('.shouhuo-address-info>ul').css({"height": h});
    	}
    });
	/*只能输入整数，且四舍五入*/

	$('.num input').blur(function () {
		var value = $(this).val();
		if(value%10 != 0){
			var num = value % 10 >= 5 ? value - value % 10 + 10 : value - value % 10;
			$(this).val(num);
		}else{
			$(this).val(value);
		}
	});



    /*地址删除功能*/

    $('.shouhuo-delete').bind('click', function() {
    	$(this).parent().remove()
    });


    /*提交功能*/
    $('#sublimt').on('click', function() {
    	$('#zhezhao').show();
    })

    /*弹窗功能*/
    $('#zhezhao .caozuo .noPay').on('click', function() {
    	$('#zhezhao').hide();
    })
    $('#zhezhao .caozuo .goPay').on('click', function() {
    	window.location.href = '#';
    });

	/*订单地址选择*/
	 $('.shouhuo-uesr-name').click(function(){
		$(this).addClass('active').parent().siblings().find('.active').removeClass('active')
	 });

	/*输入框金额*/
	$(".shop-dinggou-content-qingdan .num > input").keyup(function(){
		var num=parseInt($(this).val());
		//如果为数字
		if(!isNaN(num)){
			allPrice();
		}
		else{
			alert("请输入正确的数字")
		}
	});
	function allPrice(){
		var allnum=0;
		$(".shop-dinggou-content-qingdan dl dd").each(function(){
			var price=$(this).find(".rmb i").html();
			var num=$(this).find(".num input").val();
			allnum+=parseInt(price)*parseInt(num);
		});
		$(".allNum").html(allnum);
	}
});
