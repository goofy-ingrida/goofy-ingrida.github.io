$(function() {

    $('#vertical').hover(function() {
        $('img.top', $(this)).stop().animate({top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#left').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-293px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#bottom-left').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-293px', top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
    $('#bottom').hover(function() {
        $('img.top', $(this)).stop().animate({top: '-188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#right').hover(function() {
        $('img.top', $(this)).stop().animate({left: '293px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#bottom-right').hover(function() {
        $('img.top', $(this)).stop().animate({left: '293px', top: '188px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
});