
$(function () {
    var about = $(".column_left p");
    var menu = $(".menu");
    var newlist=$(".column_middle ul");
    var copy=$(".foot p");


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
            ru +="<li><span>"+ item.time + "</span>" + item.title +"</li>";
        });
        newlist.html(ru);

        //版权

        copy.html(res.copyright);

    });

});