/**
 * Created by admin on 2017/4/21.
 */
/*温度计*/
$(function(){
    //配置数据
    var w=[
        {
            wdjCircle:50,/*温度计球宽&高*/
            wdjWidth:20,/*温度计li宽度*/
            wdjMargin:1,/*温度计刻度间距*/
            wdjHeight:120,/*温度计刻度总高度*/
            wdjNum:30,/*温度计总刻度数*/
            wdjNow:10/*温度计现在刻度数*/
        },{
            wdjCircle:50,
            wdjWidth:20,
            wdjMargin:1,
            wdjHeight:120,
            wdjNum:20,
            wdjNow:20
        }
    ];
    var s=[
        {num:'wdjNum',now:'wdjNow'},
        {num:'wdjNum',now:'wdjNow'}
    ];

    $(".wdj").each(function(i){
        $(this).WDJ(w[i]);
    });
    $(".sk-numba").each(function (i) {
        $(this).html(w[i].wdjNum)
    });
    $(".sk-numbb").each(function (i) {
        $(this).html('/'+w[i].wdjNow);
    });

});

/*页码*/
/*$(document).ready(function() {
    $("#pager").pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PageClick });
});

PageClick = function(pageclickednumber) {
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
}*/