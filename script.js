let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
};

let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
    });
}

$(document).ready(function () {
    $(".item").click(function () {
        $(".item").removeClass("active");
        $(".tab_item").removeClass("active");
        $(this).addClass("active");

        let tab_ = $(this).attr("data-tab");

        $("#" + tab_).addClass("active");
    });
});

window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

var countdown;
var date = new Date("mar 13, 2030 11:51:51");
date.setDate(date.getDate());

countdown = setInterval(function () {
    timegap(date);
}, 1000);

function timegap(toDate) {
    var dateType = toDate;
    var rightNow = new Date();
    var diffBetween = dateType.getTime() - rightNow.getTime();

    if (diffBetween <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
    } else {
        var seconds = Math.floor(diffBetween / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}
