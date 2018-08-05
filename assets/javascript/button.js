// BACK TO TOP BUTTON
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(1000);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(1000);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// END OF BACK TO TOP BUTTON

// THIS BIT MAKES IT SO THAT I CAN DISPLAY THE TEXTAREA CODE ON NEW LINES WITHOUT AFFECTING THE SPACE PLACEMENT. WITHOUT IT, THE PLACEHOLDER IN THE TEXT AREA WILL NOT SHOW UP

$('textarea').each(function(i) { 
    if ($.trim($(this).text()) == '') 
    $(this).text('').trigger('blur'); 
});