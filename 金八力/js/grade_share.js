//根据教师id获取班级
var id;
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
		if(data.length>5){//不能什么时候都滚动
			scrollY(drag,box,out,con)
		}
	},
	complete:function(){
		$('.banji').eq(0).trigger('click');
		getShareList(pageIndex)
	}
});
//分页插件
    var pageIndex = 0;//页码初始化
    var pageSize=5;//每页的条数 本页面是一页17个（除了第一个+号）
    var off=false;
    function listPage(pageCount)
    {
        //分页，PageCount是总条目数，这是必选参数，其它参数都是可选
        $("#Pagination").pagination(pageCount, {
            num_edge_entries: 2,        //两侧首尾分页条目数
            num_display_entries: 4,    //连续分页主体部分分页条目数
            callback: Callback,
            items_per_page: pageSize,  //显示条数
            current_page: pageIndex,   //当前页索引
            first_text: "首页",
            last_text: "尾页",
            prev_text: '上一页',       //上一页按钮里text
            next_text: '下一页'       //下一页按钮里text
        });
    };
    function Callback(pageIndex){
    	getShareList(pageIndex)
    };
    function getShareList(pageIndex){
    	$.ajax({
            url:'http://manage.baliyun.com/rest/share/sharenum/list/?classId='+id+'&page='+(pageIndex+1)+'&rows='+pageSize,
            type:"POST",
            dataType:"JSON",
            success:function(data){
            	var count = data.total;//获取的总条数
                if(!off){listPage(count);}
                off=true;
                if(count<5){//当总数据达不到一页的要求时，分页隐藏
                   $('#Pagination').hide(); 
                };
	            var str = ''
	            for(var i= 0;i<data.rows.length;i++){
	                str+='<div class="mycenter-contbox">'+
					        '<dl class="mycenter-contbox-dl">'+
					            '<dt>'+
					                '<img src="http://www.bliyun.com/images/m109.jpg"/>'+
					            '</dt>'+
					            '<dd>'+
					                '<div><i>贾玲</i><time>'+data.rows[i].createTime+'</time></div>'
					                '<p>'+data.rows[i].commentContent+'</p>'+
					            '</dd>'+
					        '</dl>'+
					        '<div class="mycenter-contbox-btn">'+
					            '<strong class="parise" data-i="'+data.rows[i].id+'">'+data.rows[i].pariseNum+'</strong>'+
					            '<span class="comment" data-i="'+data.rows[i].id+'">'+data.rows[i].commentNum+'</span>'+
					            '<b class="collect" data-i="'+data.rows[i].id+'">'+data.rows[i].collectionNum+'</b>'+
					            '<i class="del" data-i="'+data.rows[i].id+'">删除</i>'+
					        '</div>'+
					    '</div>';
	            }
	            $('.mycenter-mantbox').html(str);
          }
    	});
    };
    //删除
    $('.del').live('click',function(){
    	$.ajax({
    		url:'http://manage.baliyun.com/rest/share/deleteShare/',
    		data:{
    			shareId:$(this).attr('data-i')
    		},
    		success:function(data){
    			$(this).parent().parent().remove();
    		},
    		error:function(){
    			console.log('删除分享失败');
    		}
    	});
    });
    //点赞
    $('.parise').live('click',function(){
    	$.ajax({
    		url:'',
    		data:{
    			
    		},
    		success:function(data){
    			$(this).html()+1
    		},
    		error:function(){
    			console.log('点赞失败')
    		}
    	})
    });
    //收藏 
    $('.collect').live('click',function(){
    	$.ajax({
    		url:'http://manage.baliyun.com/rest/share/sharenum/insert/',
    		data:{
    			shareNum:$(this).attr('data-i')
    		},
    	success:function(data){
			$(this).html()+1;
		},
		error:function(){
			console.log('删除分享失败');
		}
    	})
    });
    //评论 
    