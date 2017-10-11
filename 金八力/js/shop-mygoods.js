/**
 * Created by admin on 2017/5/10.
 */
(function($){
    $(window).load(function(){
        /*滚动条*/
        $(".track-list ul").mCustomScrollbar({
            theme:"minimal"
            // 这里可以根据背景颜色来通过theme选择自定义样式，
        });
        /*弹窗功能*/
        $('.goods-res-cancel').on('click', function() {
            $('#zhezhao').show();
        });
        $('.shop-no').on('click', function() {
            $('#zhezhao').hide();
        });
        /*高*/
        $(".goods-box").each(function(){
            var height=$(this).find(".goods-cot-Lbox").height();
            $(this).find(".goods-cot-Rbox").height(height);
            $(this).find(".goods-cot-Rbox div").not(".track-rcol").height(height);
        });
        /*快递信息*/
        $('.goods-where').click(function(){
            $('.track-rcol-bg').show();
        });
        $('.track-list .shop-no').click(function(){
            $('.track-rcol-bg').hide();
        });

        /*$('.goods-where').hover(function(){
            $(this).parent().parent().find('.track-rcol').css('display','block');
        },function(){
            $(this).parent().parent().find('.track-rcol').css('display','none');
        });
        $('.track-rcol').hover(function(){
            $(this).parent().parent().find('.track-rcol').css('display','block');
        },function(){
            $(this).parent().parent().find('.track-rcol').css('display','none');
        });*/
        $(".goods-box").each(function(){
            var num=$(this).find(".goods-cot-Lbox>dl").length;
            if(num<=2){
                $(this).find(".goods-cot").css('height','140px')
                $(this).find(".goods-cot").children().children(".goods-cot-Lbox-btn").css('display','none');
            }
            else{
                $(this).find(".goods-cot").css('height','140px');

            }
        });

        /*我的订单货物收放功能*/
        $('.goods-cot-Lbox-btn a.shouhuo-toggle').on('click', function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on').html('展开');
                $(this).parent().parent().find('.goods-res:lt(2)').css("display","none");
                $(this).parents(".goods-cot").css('height','140px');
                ReHeight($(this).parent().parent());
            }else {
                $(this).addClass('on').html('收起');
                $(this).parent().parent().find('.goods-res').css("display","block");
                $(this).parents(".goods-cot").css('height','auto');
                ReHeight($(this).parent().parent());
            }
        });
        function ReHeight(box){
            var height=$(box).height();
            $(box).parent().find(".goods-cot-Rbox").height(height);
            $(box).parent().find(".goods-cot-Rbox div").not(".track-rcol").height(height);
        }

    });
})(jQuery);

