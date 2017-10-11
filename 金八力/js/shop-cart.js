	// 加减商品
	$('#jian').click(function(){
		var num=parseFloat($('#input').val());		
		if(parseInt($('#input').val())==10){			
			$('#jian').css({'disabled':true,'color':'#ddd'});
			num-=10;
			$('#input').val('10')	
			$('.shop_num').html('10')
		}else{
			num-=10;
			$('#jian').css({'disabled':false,'color':'#666'});
			$('#input').val(num);
		}
		// 商品总价
		var s=$('.single_price').html()*num
		//保留两位小数
		$('.price_all').html(s.toFixed(2));
		$('.price_all').text(s.toFixed(2));
	})
	$('#jia').click(function(){
		var num=parseFloat($('#input').val())

		$('#jian').css({'disabled':false,'color':'#666'});
		num+=10;
		$('#input').val(num)
		// 这里有问题
		 $('.shop_num').html($('#input').val())
		//商品总价
		var s=$('.single_price').html()*num
		$('.price_all').html(s.toFixed(2));
		$('.price_all').text(s.toFixed(2));	
	})
	// 过滤数字input
	$('#input').keyup(function () {
        var val = $(this).val();
       var regZ=/^[+-]?(\d){1,}0$/

        /*if(!regZ.test(val)){
            $(this).val("");
            return;
        }*/
    });
	// 商品全选
	$('.all_choose').click(function(){
		$('.choose_one').attr("checked",this.checked);
		$('.choose_two').attr("checked",this.checked);
	})
	// 删除商品
	$('.book_del').click(function(){
		$('.shop_own').hide()
	})
	$('.book_del1').click(function(){
		$('.shop_own1').hide()
	})
	$('.all_del').click(function(){
		$('.shop_own').hide()
		$('.shop_own1').hide()
	})







