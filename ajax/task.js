var url = window.location.href;
function parseUrl(url){
     var str = url.split("?")[1],    //通过?得到一个数组,取?后面的参数
     items = str.split("&");    //分割成数组
     var obj = {};
     for(var i=0; i<items.length; i++){
    	 var key = items[i].split("=")[0],value = items[i].split("=")[1];
    	 obj[key] = value;
     };
     return obj;
};
var classId = parseUrl(url).classId;//班级ID
//var course = parseUrl(url).course;//课程ID
var leveId = parseUrl(url).levelId;//级别ID获取下拉列表用
//console.log(classId+'==='+ course +'==='+ leveId)
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
        	$(this).find('i').removeClass('chose');
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
    $(this).attr('src','http://www.baliyun.com/images/task/yyy.gif');
    $('.pic_two').attr('src','http://www.baliyun.com/images/task/chat.png');
})
$('.pic_two').click(function(){
     $('.pic_one').attr('src','http://www.baliyun.com/images/task/chat.png');
    $(this).attr('src','http://www.baliyun.com/images/task/yyy.gif');
});
//下拉框


var ajaxFlag = false;
$.ajax({
	url:'http://www.baliyun.com/service/teach/schedule/getCoursesByLid',
	type:"GET",
	dataType:"JSON",
	data:{
		levelId:leveId
	},
	success:function(data){
		var str = '';
		ajaxFlag = true;
		for(var i=0;i<data.length;i++){
			str+='<li class="liuu" data-classId="'+data[i].id+'">'+data[i].name+'</li>';
		};
		$('.lisst').html(str);
	},
	error:function(){
		alert('系统错误')
	},
	complete:function(){
		//ajax执行完成后对第一个li进行自动点击处理；这是为了用户体验，不然进入页面是空白的
		if(ajaxFlag){
			$('.lisst li').eq(0).trigger('click');
		};		
	}
});
//获取作业列表
$('.lisst li').live('click',function(){
	$.ajax({
		url:'http://www.baliyun.com/service/teach/schedule/getTasks',
		dataType:"JSON",
		type:"GET",
		data:{
			clazz:classId,
			course:$(this).attr('data-classId')
		},
		success:function(data){
			console.log(data)
			var str = '';
			for(var i=0;i<data.length;i++){
				//循环遍历 根据体型进行不同的拼接
				if(data[i].type=='选择'){
					if(data[i].selectType=='单选'){
						
					}else if(data[i].selectType=='多选'){
						
					}					
				}else if('tiankong1'){
					str+=''
				}else if('tiankong2'){
					str+=''
				}else if('yuyin'){
					str+=''
				}
			};
			$('.lisst').html(str);
		},
		error:function(){
			alert('系统错误')
		}
	});
})