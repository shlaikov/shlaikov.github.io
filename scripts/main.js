$(document).ready(function () {
    $(".element").typed({
        strings: [
            "Добро пожаловать на мой сайт!",
            "Приятно познакомиться с вами.",
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