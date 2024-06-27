$(function() {
    var pageTop = $('#pagetop');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(function(){
    $('a[href^=#]').click(function() {
        var href= $(this).attr("href");

        var target = $(href == "#" || href == "" ? 'html' : href);
        var speed = 1000;//sokudo
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});
