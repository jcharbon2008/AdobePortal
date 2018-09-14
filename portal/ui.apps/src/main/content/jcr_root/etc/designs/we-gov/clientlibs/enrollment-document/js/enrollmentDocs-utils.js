var time = 1000;

$(document).ready(function() {
    setHeight();
});

function scrollTo($uElement) {
    $('html, body').animate({
        scrollTop: $uElement.offset().top
    }, 1000);
};

function setHeight() {
    var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();
    var headerHeight = 60;
    var heroPanel = $("div[id$=rootPanel-enrollmentDetailsPanel___guide-item]");
    /*Desktop*/
    if (windowWidth > 667) {
        heroPanel.css('height', windowHeight-headerHeight);
    } 
    /*Mobile*/
    else {
        heroPanel.css('height', "auto");
    }
};

$(window).resize(function() {
    setHeight();
});

/*

$(document).keydown(function(e) {
    var windowHeight = $(window).innerHeight();
    var headerHeight = 60;
    switch(e.which) {
        case 37: // left
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - windowHeight
            }, time );
            break;
            
        case 38: // up
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - windowHeight
            }, time );
            break;
            
        case 39: // right
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() + windowHeight
            }, time );
            break;
            
        case 40: // down
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() + windowHeight
            }, time );
            break;
            
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
};

function handle(delta) {
    var windowHeight = $(window).innerHeight();
    var headerHeight = 60;
    var distance = 300;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (windowHeight * delta)
    }, time );
};

*/
