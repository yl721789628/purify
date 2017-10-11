$('.big').hide()
    var smalloW = ['37px','70px','70px','70px'];//字体原始大小
    var smallW = ['41px','75px','75px','75px'];//字体划入大小
    var bgoW = ['120px','120px','120px','120px'];//头像划出宽度
    var bgW = ['125px','125px','125px','125px'];//头像划入宽度
    var urlArr = ['./vote.html?a=0','#','./learner.html?a=2','./sk-sk-index.html?a=3'];//用来存储跳转链接
    var sear = window.location.search.substr(3);
    if(sear==0&&sear!=''){
        ex($('.call'),sear);
    }else if(sear==1&&sear!=''){

    }else if(sear==2&&sear!=''){
         ex($('.group'),sear);
    }else if(sear==3&&sear!=''){
        ex($('.record'),sear);
    }
    function ex(obj,i){
        obj.find('.bg').attr('width',bgW[i]);
        obj.find('.small').hide();
        obj.find('.big').show();
    };
    $('.toJump').click(function(){
        var i = $(this).index()-1;
        if(sear==i){
             return false;
         }else{
            window.location.href = urlArr[i];
            $(this).find('.big').show();
            $(this).find('.small').hide();
        };
    });
    $('.toJump').hover(function(){
        var i = $(this).index()-1;
        if(sear==i){
             return false;
         };
        $(this).find('.bg').attr('width',bgW[i]);
        $(this).find('.small').attr('width',smallW[i]);
    },function(){
        var i = $(this).index()-1;
        if(sear==i){
             return false;
         };
        $(this).find('.bg').attr('width',bgoW[i]);
        $(this).find('.small').attr('width',smalloW[i]);
    });

    