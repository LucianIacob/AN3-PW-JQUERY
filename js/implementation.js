/**
 * Created by Lucian on 10.11.2015.
 */

$(document).ready(function () {

    $("input", this).focusout(function () {
        $(this).parent().find("ul").slideUp();
    });

    $("input", this).focus(function () {
        $(this).parent().find("ul").slideDown();
    });

    $("ul li", this).each(function () {
        $(this).click(function () {
            $(this).parent().parent().find("input").val($(this).text());
        });
    });

    $("li").hover(function () {
        $(this).css("background-color", "#D8D8D8");
    }, function () {
        $(this).css("background-color", "#FFF");
    });

});