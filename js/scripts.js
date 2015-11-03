$(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    $('.bg').css({
        'transform': 'translate(0,-' + wScroll / 2 + 'px)'
    });
});

$(document).ready(function() {
    var isMenuOpen = false;
    $('.menuButton').click(function() {
        if (isMenuOpen === false) {
            $('nav').animate({
                top: 0
            }, 100);
            isMenuOpen = true;
        } else {
            $('nav').animate({
                top: '100vh'
            }, 100);
            isMenuOpen = false;
        }
    });
});

function emailMe(address) {
    console.log('test');
    window.open('mailto:' + address + '@english-now.com');
}

$(document).ready(function() {
    $('#emailShareButton').click(function() {
        window.open('mailto:?subject=Check out this page!&body=' + window.location.href);
    });
    $('#facebookShareButton').click(function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
    });
    $('#twitterShareButton').click(function() {
        window.open('https://twitter.com/intent/tweet?text=English+Now!+http%3A%2F%2F' + window.location.href);
    });
    $('#googleShareButton').click(function() {
        window.open('https://plus.google.com/share?url=' + window.location.href);
    });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-11213935-1', 'auto');
ga('send', 'pageview');
