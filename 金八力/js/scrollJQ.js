/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-19 22:29:19
 * @version $Id$
 */

function scrollY(drag,box,out,con){
    drag.mousedown(function(e){
        var disY=e.pageY-drag.position().top;
        $('*').bind('mousemove',function(e){
            var top=e.pageY-disY;
            if (top<=0) {
                top=0;
            };
            if (top>=box.height()-drag.height()) {
                top=box.height()-drag.height();
            };
            var scale=top/(box.height()-drag.height());
            var cony=scale*(con.height()-out.height());
            drag.css('top',top+'px');
            con.css('top',-cony+'px')
        });
        $('*').mouseup(function(){
           $('*').unbind('mousemove');
        });
    });
    out.on('mousewheel DOMMouseScroll',function(e){
         var e=e||window.event;
         if (e.preventDefault) {
             e.preventDefault();
         } else{
             e.returnValue=false;
         };
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));// chrome & ie  
        if (delta<0) {
            var t=con.position().top-20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.height()-out.height())) {
                t=-(con.height()-out.height());
            };
            var scale=t/(con.height()-out.height());
            var top=scale*(box.height()-drag.height());
            con.css('top',t+'px');
            drag.css('top',-top+'px');
        };
        if (delta>0) {
            var t=con.position().top+20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.height()-out.height())) {
                t=-(con.height()-out.height());
            };            
            var scale=t/(con.height()-out.height());
            var top=scale*(box.height()-drag.height());
            con.css('top',t+'px');
            drag.css('top',-top+'px');
        };
    });
}