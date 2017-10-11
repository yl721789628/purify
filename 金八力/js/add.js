/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-24 21:39:02
 *  添加学生Module
 */

$('.sk-makscroll a').live('click',function(){//因为数据是ajax请求后来追加到页面所以用live；高本版jq用on
	var id = $(this).attr('data-id');//存储的学生身份,跟vote页面一个原理
	$('.ensureBtn').attr('data-id',id);//赋值给确定按钮，因为我们是通过确定按钮启动ajax
	$('.mask').show();//弹窗出现
});
$('.ensureBtn').click(function(){
	var id = $(this).attr('data-id');//
	$.ajax({
		//数据处理
	})
});
$('.cancelBtn').click(function(){
	$('.mask').hide();//弹窗关闭
});