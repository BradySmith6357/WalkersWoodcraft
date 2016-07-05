// For Navbar
$(function(){
	$(".button-collapse").sideNav({
		menuWidth: 300,
		closeOnClick: true
	});
});

// For Slider
$(document).ready(function(){
    $('.slider').slider({
        full_width: false,
        indicators: false,
        height: 430
    });
});

$(document).ready(function(){
    $('.modal-trigger').leanModal();
});


//Convert address tags to google map links
$(document).ready(function () {
   $('address').each(function () {
      var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
      $(this).html(link);
   });
});


 
