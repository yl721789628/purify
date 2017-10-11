var classId;//班级Id
$('.tab_green h3').click(function(){
    var i = $(this).index();   
    $(this).addClass('currentSpan').siblings().removeClass('currentSpan');
    $('.tab_tab').html(testArr[$(this).index()]);//改变下面ul的内容----根据ajax获取数据
});
var drag = $('.drag'),box = $('.box'),out = $('.list'), con = $('.lisst');
scrollY(drag,box,out,con);
var drag1 = $('.drag1'),box1 = $('.box1'),out1 = $('.list1'),con1 = $('.lisst1');
scrollY(drag1,box1,out1,con1);
var drag2 = $('.drag2'),box2 = $('.box2'),out2 = $('.list2'),con2 = $('.lisst2');
scrollY(drag2,box2,out2,con2);
//下拉内容
$('.dropSelect li').live('click',function(){//根据学科获取级别
    var par = $(this).parent().parent().parent().parent();
    par.find('input').css('border-bottom','3px solid #f39800').val($(this).html()).css('color','#707070');
    par.find('img').removeClass('rotate');
    $(this).parent().parent().parent().hide();
    if($(this).hasClass('xueke')){//因为这个ajax只根据学科来获取级别，不然点任何下拉都会走ajax
        var id = $(this).attr('data-id');
        $.ajax({
            url:'http://www.baliyun.com/service/teach/getLevelsListBySid?subjectId='+id,
            type:"GET",
            dataType:"JSON",
            success:function(data){
                var str = ''
                    for(var i= 0;i<data.length;i++){
                        str+='<li class="liuu2 jibie" data-id='+data[i].id+'>'+data[i].name+'</li>'
                    }
                    $('.lisst2').html(str)
            },
            complete:function(){
            	$('.jibie').eq(0).trigger('click')
            }
        })
    }else if($(this).hasClass('jibie')){
        var  id = $(this).attr('data-id');
        //根据级别获取课程
        $.ajax({
            url:'http://www.baliyun.com/service/teach/getCoursesByLid?levelId='+id,
            type:'POST',
            dataType:'JSON',
            success:function(data){
                if(data.length>0){//有数据
                    var str = '';
                    for(var i=0;i<data.length;i++){//循环遍历数据
                        if((i+1)%3==0){//每一行第三个没有margin-right
                           var className = 'spec';
                        }else{
                            var className = '';
                        };
                        str+='<li class="'+className+'">'+
                                       ' <img src="http://www.baliyun.com/images/schedule/no.png" alt="">'+
                                        '<p class="tab_num">No.<i>'+(i+1)+'</i></p>'+
                                        '<p class="num1">'+data[i].times+'</p>'+
                                        '<p class="projectName">'+data[i].name+'</p>'+
                                       ' <img class="tab_pic1"  data-i="'+data[i].id+'" src="http://www.baliyun.com/images/schedule/a1.png" alt="">'+
                                        '<img class="tab_pic2" data-i="'+id+'"  data-id="'+data[i].id+'" src="http://www.baliyun.com/images/schedule/a2.png" alt="">'+
                                    '</li>';
                    };
                    $('.tab_tab').html(str);
                    if(data.length>6){//当数据大于6个即大于两行数据进行滑动效果
                        scrollY($('.dragBox'),$('.Tabdrag'),$('.conBox'),$('.tab_tab'));
                    }
                }else{//无数据
                    //这里进行无数据处理
                }
            },
            error:function(){
                alert('系统错误')
            }
        })
    }else if($(this).hasClass('banji')){
    	//par.find('input').attr('data-i',$(this).attr('data-i'))
    	classId = $(this).attr('data-i');
    }   
});
$('._dropBtn').click(function(){
    //增加用户体验,当前选项卡打开后用户没有选中内容而去点击其他选项卡就把其他选项卡样式归位
    var sib =  $(this).parent().siblings();
    sib.find('.dropCon').hide();
    sib.find('input').css('border-bottom','3px solid #f39800');
    sib.find('img').removeClass('rotate');
    //改变当前选项卡样式
    if($(this).find('img').hasClass('rotate')){//如果已经把下拉内容打开，点击时则隐藏选项内容，同时样式归位
        $(this).find('img').removeClass('rotate');
        $(this).parent().find('.dropCon').hide();
        $(this).siblings().find('input').css('border-bottom','3px solid #f39800');
    }else{
        $(this).parent().find('.dropCon').show();
        $(this).find('img').addClass('rotate');
        $(this).siblings().find('input').css('border-bottom','none');
    }
});



//学科
$.ajax({
    url:'http://www.baliyun.com/service/teach/getSubjects',
    type:"GET",
    dataType:"JSON",
    success:function(data){
        var str = ''
        for(var i= 0;i<data.length;i++){
            str+='<li class="liuu1 xueke" data-id='+data[i].id+'>'+data[i].understand+'</li>'
        }
        $('.lisst1').html(str)
    },
    complete:function(){
    	$('.xueke').eq(0).trigger('click')
    }
});
//根据教师id获取班级
$.ajax({
	url:'http://www.baliyun.com/service/teach/getClazzByTid?tid=5',
	type:"GET",
	dataType:"JSON",
	success:function(data){
		var str='';
		for(var i =0;i<data.length;i++){
			str+='<li class="liuu banji" data-i="'+data[i].id+'">'+data[i].name+'</li>'
		};
		$('.lisst').html(str);
	},
	complete:function(){
		$('.banji').eq(0).trigger('click');
	}
});
//查看作业
$('.tab_pic2').live('click',function(){
	window.location.href = 'http://www.baliyun.com/teach/schedule/task.html?id='+$(this).attr('data-i')+'course='+$(this).attr('data-id')
});
//课堂表现列表
$('.tab_pic1').live('click',function(){
	window.location.href='http://www.baliyun.com/teach/schedule/toClassExpress.html?classId='+classId+'&course='+$(this).attr('data-i');
});
