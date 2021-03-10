$.fn.parallax = function(resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).mousemove(function(e) {
    $(".photoshop").parallax(20, e);
    $(".illustrator").parallax(25, e);
    $(".figma").parallax(20, e);
    $(".vscode").parallax(25, e);
    $(".xd").parallax(20, e);
    $(".js").parallax(25, e);
    $(".sublime").parallax(20, e);
    $(".bootstrap").parallax(25, e);
    $(".html").parallax(20, e);
    $(".css").parallax(25, e);
    $(".flag").parallax(20, e);
});