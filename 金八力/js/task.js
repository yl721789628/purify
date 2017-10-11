// 下拉列表
$('.xoio').click(function(){
        if($(this).find('img').hasClass('rotate')){
                $(this).find('img').removeClass('rotate');
                $('.listt').hide();
                $('.xial input').css('border-bottom','3px solid #f39800')
                return ;
            }
            $('.xoio img').addClass('rotate');
            $('.xial input').css('border-bottom','none')
            $('.listt').toggle()
        });
        $('.list li').click(function(){
            $('input').val($(this).html());
            $('.xoio img').removeClass('rotate');
            $('.listt').hide()
            $('.xial input').css('border-bottom','3px solid #f39800')
        });

        var drag = $('.drag');
        var box = $('.box');
        var out = $('.list');
        var con = $('.lisst');
        scrollY(drag,box,out,con)
// 多选

$('.Multiselect').live('click',function(){
    if($(this).find('i').hasClass('chose')){
        $(this).find('i').removeClass('chose')
    }else{
        $(this).find('i').addClass('chose');
    }
});
// 单选
$('.task_odd').click(function(){
        $(this).find('i').addClass('chose');
        $(this).siblings().find('i').removeClass('chose')
    });
// 判断
$('.task_judge').click(function(){
        $(this).find('i').addClass('chose');
        $(this).siblings().find('i').removeClass('chose')
    });
// 语音
$('.pic_one').click(function(){
    $(this).attr('src','images/task/yyy.gif');
    $('.pic_two').attr('src','images/task/chat.png');
})
$('.pic_two').click(function(){
     $('.pic_one').attr('src','images/task/chat.png');
    $(this).attr('src','images/task/yyy.gif');
})