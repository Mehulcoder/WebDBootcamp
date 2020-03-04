$("ul").on("click","li" ,function (e) {
    $(this).toggleClass("completed");
});


//ul exists when the page loads so we are selecting it rather than the span
$("ul").on("click","span" ,function (e) { 
    $(this).parent().fadeOut(350, function () {
    $(this).remove();  
    });
    e.stopPropagation();
});


$("input:text").keypress(function (e) { 
    if (event.which === 13) {
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+$(this).val()+"</li>");
        $(this).val("");
        
        var o = Math.round, r = Math.random, s = 255;
        var col = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

        // $("html", "body").animate({
        //     backgroundColor: col,
        //     // margin:"100px"
        // }, 1000);

        $("body").css("background-color", col);
    }

});

$(".fa-plus").on("click", function () {
    $("input").fadeToggle();
    // console.log();
});

