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
    // 头像删除
    $('.groupMember').hover(function(){
        $(this).find('.guy_del').show();
    },function(){
        $(this).find('.guy_del').hide();
    });
    $('.guy_del').click(function(){
        $(this).parent().remove();
    });
    // 未分组学员
    $('.one_list1 li').hover(function(){
        $(this).addClass('active');
        //$(this).find('img').attr('src','images/ungroup/boy.png');
    },function(){
        if($(this).attr('data-flag')=='true'){
            $(this).removeClass('active')
            //$(this).find('img').attr('src','images/ungroup/z2.png');
        }else{
            return ;
        }        
    });
    // 点击选中
    $('.one_list1 li').click(function(){
        if($(this).attr('data-flag')=='true'){
            $(this).addClass('.active');
            //$(this).find('img').attr('src','images/ungroup/boy.png');
            $(this).attr('data-flag','false');       
        }else{           
            $(this).removeClass('active')
            //$(this).find('img').attr('src','images/ungroup/z2.png');
            $(this).attr('data-flag','true');           
        }        
    });
    

