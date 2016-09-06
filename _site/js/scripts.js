var nav = document.getElementsByTagName('nav')[0],
    navButton = document.getElementById('nav-button');

function emailMe(address) {
    window.open('mailto:' + address + '@english-now.com');
}

document.getElementById('nav-button').onclick = function() {
    if (nav.className === 'open') {
        nav.className = '';
        navButton.className = '';
    } else {
        nav.className = 'open';
        navButton.className = 'open';
    }
};
document.getElementById('emailShareButton').onclick = function() {
    window.open('mailto:?subject=Check out this page!&body=' + window.location.href);
};
document.getElementById('facebookShareButton').onclick = function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
};
document.getElementById('twitterShareButton').onclick = function() {
    window.open('https://twitter.com/intent/tweet?text=English+Now!+http%3A%2F%2F' + window.location.href);
};
document.getElementById('googleShareButton').onclick = function() {
    window.open('https://plus.google.com/share?url="' + window.location.href + '"');
};


if(document.location.protocol=='http:'){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-11213935-1', 'auto');
    ga('send', 'pageview');
}
