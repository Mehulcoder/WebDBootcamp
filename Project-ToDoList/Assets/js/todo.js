$("ul").on("click","li" function (e) {
    $(this).toggleClass("completed");
});


//ul exists when the page loads so we are selecting it rather than the span
$("ul").on("click","span" function (e) { 
    $(this).parent().fadeOut(500, function () {
    $(this).remove();  
    });
    e.stopPropagation();
});


$("input:text").keypress(function (e) { 
    if (event.which === 13) {
        $("ul").append("<li><span>X</span>"+" "+$(this).val()+"</li>");
    }
});

