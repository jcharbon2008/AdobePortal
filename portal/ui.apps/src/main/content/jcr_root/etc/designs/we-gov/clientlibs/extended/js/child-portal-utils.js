$(document).ready(function () {
     var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();
if (windowWidth < 667) {
    $(this).on('click',".formNodeWrapper, .formNodeWrapper div", function (e) {
        e.stopPropagation();
        var drop = $(this).siblings('.customOptions');
        
        if (drop.is(":hidden")) {
            $('.title_active').siblings('.customOptions').hide();
            drop.show();
        } else {
            drop.hide();
        }
    });
}

});
