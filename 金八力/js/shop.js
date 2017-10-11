/**
 * Created by admin on 2017/5/4.
 */
/*立即购买弹出层*/

$(document).ready(function(){
    /*教材-教材教具物料/筛选导航*/
    $('.textbook-vna li').click(function(){
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('ol.textbook-vna li').eq(i).show().siblings().hide();

    });
    $("ol.textbook-vna li a").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })



    /*加入购物车*/
    $('button.cot-cart').bind('click', function() {
    	var val = $('i.icon-cart-nub').attr('data-value');
        /*成功加入购物车*/
       $('.cot-cart-ok').show(function(){
           setTimeout(function () {
               $('.cot-cart-ok').hide();
           },1000)
       })

    	if (val >= 199) {
    		val=parseInt(val)+10;
    		$('i.icon-cart-nub').attr('data-value',val).html('199+');
    	} else {
            val=parseInt(val)+10;
    		$('i.icon-cart-nub').attr('data-value',val).html(val);
    	}
    });
});
