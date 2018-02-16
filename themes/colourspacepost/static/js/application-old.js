/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this); 

$(function() {
	$("body").scrollspy({target: "#mainmenu",offset: 96});


	var $root = $('html, body');
	$('a[href^=#]').click(function() {

		// Collapse Main Menu if it is out
	    $("#mainmenu .navbar-collapse.in").collapse('hide');

	    // Scroll to new position
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});


	// Make main menu sticky
	$('#mainmenu').affix({
	    offset: {
	      top: function () {
	        return (this.top = $('#mainmenu').offset().top)
	      }
	    }
    })

    if((navigator.userAgent.match(/iPhone/i)) || 
    	(navigator.userAgent.match(/iPod/i)) || 
    	(navigator.userAgent.match(/iPad/i))) {
    	if ($(window).height() > 400) {
			$("#header").css("height",$(window).height());
		} else {
			$("#header").css("height",400);
		}
    }
});


$( window ).resize(function() {
	$("body").scrollspy('refresh');

    if((navigator.userAgent.match(/iPhone/i)) || 
    	(navigator.userAgent.match(/iPod/i)) || 
    	(navigator.userAgent.match(/iPad/i))) {
    	if ($(window).height() > 400) {
			$("#header").css("height",$(window).height());
		} else {
			$("#header").css("height",400);
		}
    }
});
