function scrollY(drag,box,out,con){
	drag.onmousedown=function (ev){
        var e=ev||window.event;
        if (e.preventDefault) {//消除默认行为
            e.preventDefault();
        } else{
            e.returnValue=false;
        };
        var disY=e.clientY-drag.offsetTop;
        document.onmousemove=function (ev){
            var e=ev||window.event;
            var top=e.clientY-disY;
            if (top<=0) {
                top=0;
            };
            if (top>=box.clientHeight-drag.clientHeight) {
                top=box.clientHeight-drag.clientHeight;
            };
            var scale=top/(box.clientHeight-drag.clientHeight);
            var cony=scale*(con.clientHeight-out.clientHeight);
            drag.style.top=top+'px';
            con.style.top=-cony+'px';
        };
        document.onmouseup=function (){
            document.onmousemove=null;
        };
    }
    var str=window.navigator.userAgent.toLowerCase();
    if (str.indexOf('firefox')!=-1) {//火狐浏览器
        out.addEventListener('DOMMouseScroll',function (e){
            e.preventDefault();//阻止窗口默认的滚动事件
        if (e.detail<0) {
            var t=con.offsetTop+20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        if (e.detail>0) {
            var t=con.offsetTop-20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        },false);
    } else{//非火狐浏览器
        out.onmousewheel=function (ev){
            var e=ev||window.event;
            if (e.preventDefault) {
                e.preventDefault();
            } else{
                e.returnValue=false;
            };
            if (e.wheelDelta>0) {
            var t=con.offsetTop+20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        if (e.wheelDelta<0) {
            var t=con.offsetTop-20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        }
    };
}