jQuery(document).ready(function ($) {

    $(window).on('load', function () {
        $('.preloader').fadeOut(1000, function () {
            $('.preloader').remove();

            $(".element").typed({
                strings: [
                    "Добро пожаловать на мой сайт!",
                    "Я web-разработчик",
                    "Алексей Шлайков."
                ],
                startDelay: 0.5,
                typeSpeed: 0.1,
                backSpeed: 0.9,
                backDelay: 700,

                callback: function () {
                    $(".discriptor").show("fast");
                    $(".main-body").show("fast");
                    $(".avatar").show("fast");
                }
            });
        });
    });
});