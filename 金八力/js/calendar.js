/**
 * Created by admin on 2017/4/12.
 */
var d1 = new Date();  // 获取当前系统时间
d1.getFullYear();    // 获取年信息
d1.getMonth();      // 获取月信息（从0开始 范围：0-11） 3
d1.getDate();      // 获取天信息
d1.getDay();      // 获取星期信息 （0-6）
/*var d3 = new Date(2016, 3, 30);
 d3.toLocaleDateString();      // "2016/4/30"
 var d4 = new Date(2016, 3, 31);
 d4.toLocaleDateString();      // "2016/5/1"
 var d5 = new Date(2016, 3, 33);
 d5.toLocaleDateString();      // "2016/5/3"
 var d6 = new Date(2016, 4, 1);
 d6.toLocaleDateString();      // "2016/5/1"
 var d7 = new Date(2016, 4, 0);
 d7.toLocaleDateString();      // "2016/4/30"
 var d8 = new Date(2016, 4, -3);
 d8.toLocaleDateString();      // "2016/4/27"*/
(function(){
    /*
     * 用于记录日期，显示的时候，根据dateObj中的日期的年月显示
     */
    var dateObj = (function(){
        var _date = new Date();    // 默认为当前系统时间
        return {
            getDate : function(){
                return _date;
            },
            setDate : function(date) {
                _date = date;
            }
        };
    })();

    // 设置calendar div中的html部分
    renderHtml();
    // 表格中显示日期
    showCalendarData();
    /**
     * 渲染html结构
     */
    function renderHtml() {
        var calendar = document.getElementById("calendar");
        var titleBox = document.createElement("div");  // 标题盒子 设置上一月 下一月 标题
        var bodyBox = document.createElement("div");  // 表格区 显示数据

        // 设置标题盒子中的html
        titleBox.className = 'calendar-title-box calendar-english';
        titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>" +
        "<span id='en'></span>"+/*添加内容*/
            "<span class='calendar-title calenum' id='calendarTitle'></span>"  /*+
         "<span id='nextMonth' class='next-month'></span>"*/;
        calendar.appendChild(titleBox);    // 添加到calendar div中

        // 设置表格区的html结构
        bodyBox.className = 'calendar-body-box';
        var _bodyHtml = "";
        // 一个月最多31天，所以一个月最多占6行表格
        for(var i = 0; i < 6; i++) {
            _bodyHtml += "<div class='days days2'>" +
                "<a></a>" +
                "<a></a>" +
                "<a></a>" +
                "<a></a>" +
                "<a></a>" +
                "<a></a>" +
                "<a></a>" +
                "</div>";
        }
        bodyBox.innerHTML = "<div id='calendarTable' class='calendar-table'>"  + _bodyHtml +
            "</div>";
        // 添加到calendar div中
        calendar.appendChild(bodyBox);
    }

    /**
     * 表格中显示数据，并设置类名
     */
    function showCalendarData() {
        var _year = dateObj.getDate().getFullYear();
        var _month = dateObj.getDate().getMonth() + 1;
        var _dateStr = getDateStr(dateObj.getDate());
        var _day = dateObj.getDate().getDay();
        console.log(_day)
        // 设置顶部标题栏中的 年、月信息
        var calendarTitle = document.getElementById("calendarTitle");
        var titleStr = /*_dateStr.substr(0, 4) + "年" +*/ _dateStr.substr(4,2);
        calendarTitle.innerText = titleStr;
        /*

			添加内容
        */
        var en = document.getElementById("en");
        var m = _dateStr.substr(4,2);
        var enText = '';
        if(m =='01'){
        	enText = 'JANUARY'
        }else if(m =='02'){
			enText = 'FEBRUARY'
        }else if(m =='03'){ 
        	enText = 'MARCH'
        }else if(m =='04'){
        	enText = 'APRIL'
        }else if(m =='05'){
        	enText = 'MAY'
        }else if(m =='06'){
        	enText = 'JUNY'
        }else if(m =='07'){
        	enText = 'JULY'
        }else if(m =='08'){
        	enText = 'AUGUST'
        }else if(m =='09'){
        	enText = 'SEPTEMBER'
        }else if(m =='10'){
        	enText = 'OCTOBER'
        }else if(m =='11'){
        	enText = 'NOVEMBER'
        }else{
        	enText = 'DECEMBER'
        }
        en.innerText = enText;


        /*
			添加结束
        */

        // 设置表格中的日期数据
        var _table = document.getElementById("calendarTable");
        var _tds = _table.getElementsByTagName("a");
        var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        for(var i = 0; i < _tds.length; i++) {
            var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
            var _thisDayStr = getDateStr(_thisDay);
            _tds[i].innerText = _thisDay.getDate();
            //_tds[i].data = _thisDayStr;
            _tds[i].setAttribute('data', _thisDayStr);
            if(_thisDayStr == getDateStr(new Date())) {    // 当前天
                _tds[i].className = 'currentDay';
            }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                _tds[i].className = 'currentMonth';  // 当前月
            }else {    // 其他月
                _tds[i].className = 'otherMonth';
            }
        }
    }



    /**
     * 日期转化为字符串， 4位年+2位月+2位日
     */
    function getDateStr(date) {
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;    // 月从0开始计数
        var _d = date.getDate();

        _month = (_month > 9) ? ("" + _month) : ("0" + _month);
        _d = (_d > 9) ? ("" + _d) : ("0" + _d);
        return _year + _month + _d;
    }
})();
// $('.days a').click(function(){
//     $(this).css('color','#f48221');
// })
// $(".days2 a").click(function(){
//     $(this).addClass('color','green');
// })
