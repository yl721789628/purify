 //请求数据
    $('.selectBtn').click(function(){
        var type = $(this).attr('data-type');//1 代表考勤 2 代表补课
        int(type)
    })
    //初始化数据
    int(1);
     function int(type){
        $.ajax({
            url:'888',
            type:'POST',
            dataType:'JSON',
            // data发送给服务端的数据
            data:{
               type:type 
            },
            // data是服务器返回的数据
            success:function(data){
                var  str = '' ;
                var res = data.res;
                if(res.length<9){
                    //滚动条隐藏
                    $('dragOut').hide()
                }else{
                    $('dragOut').show()
                    scrollY();
                }
                for(var i = 0;i<res.length;i++){
                    str+='<li class="clearfix"><div class="headImg">'+
                                '<img src="'+res[i].src+'" >'+
                            '</div>'+
                            '<div class="detailInfo">'+
                                '<div class="name">'+res[i].name+'</div>'+
                                '<p class="clearfix firP">'+
                                    '<span class="firSpan" data-id="'+res[i].id+'" data-type="0">按时</span>'+
                                    '<span  data-id="'+res[i].id+'" data-type="2">迟到</span>'+
                                '</p>'+
                                '<p class="clearfix">'+
                                    '<span class="firSpan actSpan"  data-id="'+res[i].id+'" data-type="2">请假</span>'+
                                    '<span  data-id="'+res[i].id+'" data-type="3">旷课</span>'+
                                '</p>'+
                            '</div>'+
                        '</li>'
                };
                $('.infoCon').html(str)             
            },
            error:function(){
                alert('error')
            }
        })
     };
     //存储数据
     var idArr = [],typeArr = [];
     $('.infoCon span').click(function(){
        var id = $(this).attr('data-id');
        var type = $(this).attr('data-type');               
        if(idArr.indexOf(id)>-1){//如果数组中已经有该ID
            var index = idArr.indexOf(id);
            typeArr[index]=type;
        }else{
            idArr.push(id);
            type.push(type)
        }
     })
    //这是发送数据
    $('.commiteBtn').click(function(){
        $.ajax({
            url:'888',
            type:'POST',
            dataType:'JSON',
            data:{
               id:idArr,
               type:typeArr 
            },
            success:function(data){
                if(data==0){
                    alert('success')
                }else if(data==2){
                    alert('shibai ')
                }
            },
            error:function(){
                alert('error')
            }
        })
    })
    