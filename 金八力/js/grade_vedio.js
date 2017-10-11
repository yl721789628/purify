$('.note_title span').click(function(){
			$('.note_title span').removeClass('active');
			$(this).addClass('active');
		});
$('.xoio').click(function(){
        if($(this).find('img').hasClass('rotate')){
                $(this).find('img').removeClass('rotate');
                $('.listt').hide();
                $('.xial input').css('border-bottom','1px solid #f39800')
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
            $('.xial input').css('border-bottom','1px solid #f39800')
        });
         var dragA = $('.dragA');
        var boxA = $('.boxA');
        var outA = $('.list');
        var conA = $('.lisst');
        scrollY(dragA,boxA,outA,conA)


        $('.picture_list li').hover(function(){
            $(this).find('i').css('display','block');
        },function() {
            $(this).find('i').css('display','none');
         });
        $('.picture_list li i').click(function(){
            $(this).parent().parent().remove()
        });
        // 分页插件
        var pageIndex = 0;//页码初始化
    var pageSize=5;//每页的条数 本页面是一页17个（除了第一个+号）
    var off=false;
    invitePage(200)//这句代码应该在ajax里面执行 我写在外边
    function invitePage(pageCount)
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
        test(pageIndex)
    };
    //下面是ajax函数
    function test(pageIndex){
        $.ajax({
            url:'',
            type:"POST",
            dataType:"JSON",
            data:{
                page:pageIndex+1,
                rows:5
            },
            success:function(data){
                var count = data.total;//获取的总条数
                if(!off){invitePage(count);}
                off=true;
                if(count<5){//当总数据达不到一页的要求时，分页隐藏
                   $('#prjlistPage').hide(); 
                };
                //下面进行正常页面逻辑业务处理
            }
        })
    }