var typed = new Typed("#type", {
    strings: ["Developer", "stopradi", "Siratee topradit", "Novice"],
    smartBackspace: true,
    loop: true,
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 700,
});

AOS.init();

$(function () {
    $(".nav-link").on("click", function (event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr("href")).offset().top - 49,
                },
                100
            );
        event.preventDefault();
    });
});

(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookie-alert");
    var acceptCookies = document.querySelector(".accept-cookies");

    cookieAlert.offsetHeight;

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 60);
        cookieAlert.classList.remove("show");
    });
})();

// Cookie functions stolen from w3schools XD
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
