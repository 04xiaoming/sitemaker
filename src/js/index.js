var xiaoming = "2", jiayu = "4";

//alert(xiaoming + jiayu);


var blogInfo = {
    blogId: 1234,
    blogName: "xiaoming",
    showBlog: function () {
        alert(this.blogId);
    }
};

$(function () {
    var about = $(".column_left p");
    var menu=$(".menu");


    $.ajax({
        'url': 'json/index.json',
        'data': {},
        'data-type': 'json',
        'type': "GET"
    }).done(function (res) {

        about.html(res.index.about);
        menu.html(res.index.menu);

    });

});