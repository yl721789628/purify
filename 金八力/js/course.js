/*==主导航==*/
    var con = $('div.mnav-option>ul');
    con.each(function(i){
        var lis = $(this).find('li'),
            w = 0;
        lis.each(function(j){
            w += $(this).outerWidth(true);
        })
        $(this).css('width',w+2 + 'px');
    })
    /*主导航-默认当前页面的副标题出现*/
    var arr = ['mnav1','mnav2','mnav3','mnav4','mnav5'];
    var k = 0;
    $('.mnav-nav .mnav-option').hide();
    $('.mnav-li').hover(function(){
        k = $(this).index();
        $('.mnav-li a').css('text-decoration','none');
        $(this).find('.mnav-option').show();
        $(this).find('.mav').addClass(arr[k]);
    });
    $('.mnav-li').mouseleave(function(){
        $('.mnav-nav .mnav-option').hide();
        $(this).find('.mav').removeClass(arr[k]);
    });
    /*主导航-用户名/退出*/
    $('.set_user').on('mouseover mouseleave',function(){
        if(event.type == 'mouseover'){
            $(this).find('.set_change_user').show();
        }else{
            $(this).find('.set_change_user').hide();
        }
    });
/*级别部分滚动条*/
		var out = document.getElementsByClassName('lesson_scroll')[0];
		var con = document.getElementsByClassName('lesson_word')[0];
		var drag = document.getElementsByClassName('drag')[0];
		var box = document.getElementsByClassName('dragOutBox')[0];
		// scrollY(drag,box,out,con)
		/*班级列表滚动条*/
		var lessonCon = document.getElementsByClassName('lessonCon')[0];
		var lessonConBox = document.getElementsByClassName('lesson_ten')[0];
		var lessonDrag = document.getElementsByClassName('lessonDrag')[0];
		var lessonDragBox = document.getElementsByClassName('lessonDragBox')[0];
		// scrollY(lessonDrag,lessonDragBox,lessonConBox,lessonCon);

        $('.currentMonth').live('mousedown',function(){
            $(this).css({'background':'#80bd35','color':'#fff'});
            $(this).siblings().css({'background':'#fff','color':'#000'});
            $(this).parent().siblings().find('.currentMonth').css({'background':'#fff','color':'#000'});
            $('.currentDay').css({'background':'#fff','color':'#f39700'});
        });
        var date = (new Date()).getDay();
        if(date==7){
            date = 0;
        }
        $('.week i').eq(date).css('color','red')
        $('.calendar-table a').live('click',function(){
            if($(this).hasClass('currentDay')){               
                $(this).parent().parent().find('a').css({'background':"rgb(255,255,255)",'color':'#000'});
                $(this).css({'background':"orange",'color':'#fff'});
            }
        });
        // 列表移入效果
        $('.lessonCon li').hover(function(){
            $(this).addClass('change');
        },function(){
            $(this).removeClass('change');
        });
        // 列表鼠标选中效果
        $('.lessonCon li').live('click',function(){
            $(this).addClass('change');
            $(this).siblings().removeClass('change');
        });
       
        $('.tabBox span').click(function(){
            $(this).css('color','orange');
            $(this).siblings().css('color','#707070')
        });