/**
 * Created by admin on 2017/4/20.
 */
/*****温度计插件*****/
/*****基于jQuery*****/

(function($){

    //默认配置
    var defaults={
        //温度计球宽&高
        wdjCircle:50,
        //温度计li宽度
        wdjWidth:30,
        //温度计刻度间距
        wdjMargin:1,
        //温度计刻度总高度
        wdjHeight:150,
        //温度计总刻度数
        wdjNum:30,
        //温度计现在刻度数
        wdjNow:10
    };

    var TEMPLE=[
        '<div class="wdj-wrap">',
        '<ul class="wdj-top">{WDJLIS}</ul>',
        '<div class="wdj-botton">',
        '<span class="wdj-water"></span>',
        '</div>',
        '</div>',
    ];

    var TEMPLE_HTML=TEMPLE.join('');

    $.fn.WDJ=function(options){

        var settings=$.extend({},defaults,options);
        var $el=this;

        var el_html='';

        for(var i=0;i<settings.wdjNum;i++){
            if(i<settings.wdjNum-settings.wdjNow){
                el_html+='<li></li>';
            }
            else{
                el_html+='<li class="green"></li>';
            }
        }

        el_html=TEMPLE_HTML.replace('{WDJLIS}',el_html);
        $el.html(el_html);

        var el_height=Math.floor(settings.wdjHeight/settings.wdjNum-settings.wdjMargin);

        $el.find(".wdj-wrap").css('width',settings.wdjCircle);
        $el.find(".wdj-botton").css({
            'width':settings.wdjCircle,
            'height':settings.wdjCircle
        });
        $el.find(".wdj-water").css({
            'width':settings.wdjCircle*1.2,
            'height':settings.wdjCircle*1.2,
            'top':(100-Math.round(settings.wdjNow/settings.wdjNum*100))+'%'
        });
        $el.find(".wdj-top").css({
            'width': settings.wdjWidth,
            'marginBottom': settings.wdjCircle-Math.ceil(el_height/2)
        });
        $el.find(".wdj-top li").css({
            'height':el_height,
            'width':settings.wdjWidth,
            'marginBottom':settings.wdjMargin
        });

    }

})(jQuery);

