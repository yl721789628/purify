/**
 * Created by admin on 2017/4/19.
 */
$(function(){

    /*滚动条*/
    $(window).load(function(){
        $(".sk_show").mCustomScrollbar({
            theme:"minimal"
            // 这里可以根据背景颜色来通过theme选择自定义样式，
        });
    });
    /*日历的课程安排*/
    $('#ca').calendar({
        width: 180,
        height: 170,
        data: [
            {
                date: '2017/4/18',
                value:[
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"}
                ]
            },
            {
                date: '2017/4/17',
                value:[
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"诗歌朗诵",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"}
                ]
            },
            {
                date: '2017/4/19',
                value:[
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"听说读写",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"}
                ]
            },
            {
                date: '2017/5/18',
                value:[
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"},
                    {name:"作文阅读",subject:'看图说话',teacher:"杨老师",time:"15:00-18:00"}
                ]
            }
        ],
        onSelected: function (view, date, data) {
            //view视图 date点击日期 data 数据
            showTimer(date);
            showText(data);
        }
    });

    $(function(){
        $(".now")[0].click();
    })

    function showTimer(day){
        var yuefen=day.getMonth()+1;
        var riqi=day.getDate();
        var zhou=riqiGet(day.getDay());
        $(".sk-day").html(yuefen+"月"+riqi+"日");
        $(".sk-week").html(zhou);
    }

    function showText(data){
        if(data){
            var html='';
            for(var i=0;i<data.length;i++){
                html+="<div class='sk-timetable'>";

                html+="<button>"+data[i].name+"</button>";
               /* html+="<img  src='images/m40.png'>";*/
                html+="<i class='sk-tb'>"+data[i].subject+"</i>";
                html+="<span class='sk-tb'>"+data[i].teacher+"</span>";
                html+="<time class='sk-tb'>"+data[i].time+"</time>";

                html+="</div>";
            }
            $(".sk-t").html(html);
        }
        else{
            $(".sk-t").html("今天暂无课程安排!");
        }
    }

    function riqiGet(day){
        var xingqi='';
        switch(day){
            case 0:xingqi="星期日";break;
            case 1:xingqi="星期一";break;
            case 2:xingqi="星期二";break;
            case 3:xingqi="星期三";break;
            case 4:xingqi="星期四";break;
            case 5:xingqi="星期五";break;
            case 6:xingqi="星期六";break;
        }
        return xingqi;
    }
});