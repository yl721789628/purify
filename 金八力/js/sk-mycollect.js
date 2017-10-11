/**
 * Created by admin on 2017/5/23.
 */

$(document).ready(function(){
    /*input只读*/
    $('.mycenter-formok input').attr('readonly','readonly');
    $('.mycenter-formok textarea').attr('readonly','readonly');
    /*如果为两个字符，设置间距*/
    $('.mycenter-form>div>i').each(function(){
        var length = $(this).text().length;
        if(length == 2){
            $(this).css({
                'letter-spacing':'20px',
                'text-indent':'20px'
            });
        }
    });
    /*textarea高度自适应(和题库重复)*/
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    /*按钮/收藏/点赞/删除*/
    $(".mycenter-contbox-btn b").click(function(){
        $(this).toggleClass('active')
    });
    $(".mycenter-contbox-btn strong").click(function(){
        $(this).toggleClass('active')
    });
    $(".mycenter-contbox-btn i").click(function(){
        $(this).parent().parent('.mycenter-contbox').remove();
    });
    /*超出10条，翻页显示*/
   var length =  $(".mycenter-mantbox .mycenter-contbox").length;
    if(length>10){
        $("#pager").show();
    }else {
        $("#pager").hide();
    }
});
