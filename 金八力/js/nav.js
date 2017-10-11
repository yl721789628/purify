/**
 * 
 * @date    2017-04-24 15:16:03
 * @version $Id$
 */

var urlArr = ['./vote.html','#','#','#','./sk-sk-index.html'];//用来存放跳转链接
$('.navLink').click(function(){
    if($(this).find('.changeImg').css('display')!='none'){
        return ;
    };
    var i = $(this).index()-1;
    if(i==0){
        var width = '50px';
    }else{
        var width = '91px';
    };
    $('.orImg').show();
    $(this).find('.orImg').hide();
    $('.changeImg').hide();
    if(i==0){
        var orwidth = '44px';
    }else{
         var orwidth = '85px';
    };
    $('.changeImg').css('width',orwidth);
    $(this).find('.changeImg').show();
    $(this).find('.changeImg').animate({'width':width},300,function(){
        window.location.href = urlArr[i];
    });
});