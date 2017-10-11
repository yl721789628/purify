$('.note_title span').click(function(){
            $('.note_title span').removeClass('active');
            $(this).addClass('active');
        });
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
    }
});
// 下拉列表
$('.xoio').click(function(){
        if($(this).find('img').hasClass('rotate')){
                $(this).find('img').removeClass('rotate');
                $('.listt').hide();
                $('.xial input').css('border-bottom','1spx solid #f39800')
                return ;
            }
            $('.xoio img').addClass('rotate');
            $('.xial input').css('border-bottom','none')
            $('.listt').toggle()
        });
        $('.list li').live('click',function(){
            $('input').val($(this).html());
            $('.xoio img').removeClass('rotate');
            $('.listt').hide()
            $('.xial input').css('border-bottom','3px solid #f39800');
            id = $(this).attr('data-i');
            getList(0);            
        })

        var drag = $('.drag');
        var box = $('.box');
        var out = $('.list');
        var con = $('.lisst');
        scrollY(drag,box,out,con)



    //分页插件
    var pageIndex = 0;//页码初始化
    var pageSize=5;//每页的条数 本页面是一页17个（除了第一个+号）
    var off=false;
    //invitePage(200)//这句代码应该在ajax里面执行 我写在外边
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
        getList(pageIndex)
    };
    //下面是ajax函数
    function getList(pageIndex){
        $.ajax({
            url:'http://manage.baliyun.com/rest/share/notice/list/?classId='+id+'&page='+(pageIndex+1)+'&rows='+pageSize,
            type:"GET",
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
                    str+='<li class="clearfix note_box_one">'+
                        '<span class="message_word fl">'+data[i].classNotice+'</span>'+
                        '<span class="fl times_now">'+data[i].noticeTime+'</span>'+
                        '<a href="grade_inform.html?id='+data.rows[i].id+'" class="modify dealBtn fl clearfix">'+
                            '<i class="fl"></i>'+
                            '<em class="fl">修改</em>'+
                        '</a>'+
                        '<span class="delete dealBtn fl" data-i="'+data.rows[i].id+'">'+
                            '<i class="fl"></i>'+
                            '<em class="fl">删除</em>'+
                        '</span>'+
                    '</li>'
                }
                $('.message_list').html(str);
          }
        });
    };
    $('.message_list .note_box_one').live('mouseover',function(){
        $(this).find('.dealBtn').show();
        $(this).find('.times_now').css('margin-left','0px');
    });
    $('.message_list .note_box_one').live('mouseout',function(){
        $(this).find('.dealBtn').hide();
        $(this).find('.times_now').css('margin-left','80px');
    })
    //删除班级通知
    $('.delete').live('click',function(){
        var shareNoticeId = $(this).attr('data-i');
        $.ajax({
            url:'http://manage.baliyun.com/rest/share/notice/deleteNotice/',
            type:'GET',
            dataType:'JSON',
            data:{
                shareNoticeId:shareNoticeId
            },
            success:function(data){
                $(this).parent().remove();
            },
            error:function(){
                console.log('删除操作出错')
            }
        })
    });
    
 