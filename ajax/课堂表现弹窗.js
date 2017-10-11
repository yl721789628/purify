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
var classId = parseUrl(url).classId;
var course = parseUrl(url).course;
$.ajax({
		url:'http://www.baliyun.com/service/teach/schedule/getCourseRemarks',
			data:{
				clazz:classId,
				course:course
			},
		dataType:"JSON",
		type:"GET",
		success:function(data){			
			//遍历就行了
			var str='';
			for(var i=0;i<data.length;i++){
				if(data[i].worth==''){//未评价
					str+='<li class="classbx-box">'+
					        '<div class="classbx-box-left">'+
					            '<img src="http://www.baliyun.com/images/m115.jpg"/>'+
					            '<i>'+data[i].student+'</i>'+
					        '</div>'+
					        '<div class="classbx-box-right">'+
					            '<strong>未评价表现</strong>'+
					            '<a class="goRemak" data-course="'+data[i].course+'" data-class="'+data[i].clazz+'" href="sk-growup.html">去评价</a>'+
					        '</div>'+
					    '</li>';
				}else{//已评价
					/*if(data[i].){//加分
						var _class =  'classbx-add'
					}else{//减分
						var _class =  'classbx-minus'
					}*/
					str+='<li class="classbx-box">'+
					        '<p class="classbx-add"><i>+10</i></p>'+//+10为后台反值 p得class应该是动态的看是减分还是加分
					        '<div class="classbx-box-left">'+
					            '<img src="http://www.baliyun.com/images/m115.jpg"/>'+
					            '<i>'+data[i].student+'</i>'+
					        '</div>'+
					        '<div class="classbx-box-right">'+
					            '<h6><i>价值观'+data[i].worth+'</i><i>学习成果'+data[i].studyGain+'</i></h6>'+
					            '<p><b>规则意识</b><span>'+data[i].ruleConscious+'</span></p>'+
					            '<p><b>学习状态</b><span>'+data[i].studyState+'</span></p>'+
					            '<p><b>团队协作</b><span>'+data[i].teamWork+'</span></p>'+
					        '</div>'+
					    '</li>';
				}
			};
			$('.classbx-cont').html(str)
		}
	});

