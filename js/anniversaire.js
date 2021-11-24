$(function() {
    var $header = $('#header');
    var $greetings = $('ul');

    $header.on('click', function() {
        $('#greeting_1').show();
    })

    $greetings.on('click', 'li', function() {
        $(this).next().show();
    })

    $('.greeting:last').on('click', function() {
        var imageUrl = "images/anniversaire.jfif";
        $("body").css("background-image", "url(" + imageUrl + ")");
        var audio = new Audio('sounds/fireworks.wav');
        audio.play();
    })
})