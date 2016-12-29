$(function () {
    var about = $(".column_left p");
    var menu = $(".menu");
    var newlist = $(".column_middle ul");
    var copy = $(".foot p");


    $.ajax({
        'url': '../json/index.json',
        'data': {},
        'data-type': 'json',
        'type': "GET"
    }).done(function (res) {

        about.html(res.index.about);
        menu.html(res.index.menu);
        //新闻列表
        var ru = "";
        var array = res.newlist;
        $.each(array, function (index, item) {
            ru += "<li><span>" + item.time + "</span><a href='"+item.url+"'>2"+item.title+"</a></li>";
        });
        newlist.html(ru);

        //版权

        copy.html(res.index.copyright);

    });

    //焦点图
    var i = 0;
    var m = $(".foucs li").length;

    function oTab() {
        i = $(".s_num li").index(this);
        $(this).addClass("on").siblings().removeClass("on");
        $(".foucs li").hide().eq($(this).index()).fadeIn();
    }

    //自动切换时页签高亮显示
    function oStart(i) {
        $(".s_num li").eq(i).addClass("on").siblings().removeClass("on");
        $(".foucs li").eq(i).fadeIn().siblings("li").hide();
    }

    //自动切换
    function oTimer() {
        i++;
        if (i >= m) {
            i = 0;
        }
        oStart(i);
    }

    //设置定时器
    var myTimer = setInterval(oTimer, 4000);
    //鼠标悬停和移开的情况用hover
    $(".foucs_box").hover(function () {
        if (myTimer) {
            clearInterval(myTimer);
        }
    }, function () {
        myTimer = setInterval(oTimer, 4000);
    });
    //点击下一个按钮切换图片
    $(".btn .next").click(function () {
        clearInterval(myTimer);
        i++;
        if (i == m) {
            i = 0;
        }
        oStart(i)
    });
    //点击上一个按钮切换图片
    $(".btn .prev").click(function () {
        clearInterval(myTimer);
        i--;
        if (i == -1) {
            i = m - 1;
        }
        oStart(i)
    });

    //调用方法
    $(".s_num li").click(oTab); //点击切换click,鼠标移上去用mouseover.


});