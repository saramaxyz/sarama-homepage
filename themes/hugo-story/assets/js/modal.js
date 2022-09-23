(function($) {
  var $window = $(window);
	$( document ).ready(function() {
    console.log( "ready!" );
});

  // Get the modal
  var modal = $("#myModal");

  // Get the button that opens the modal
  var btn = $("#myBtn");

  // Get the <span> element that closes the modal
  var span = $(".close");

  // When the user clicks the button, open the modal 
  btn.on('click', function() {
    modal.show();
  });

  // When the user clicks on <span> (x), close the modal
  span.on('click', function() {
    modal.hide();
  });

  // When the user clicks anywhere outside of the modal, close it
  $window.on('click', function(event) {
    console.log(event.target);
    if (event.target == modal[0]) {
      modal.hide();
    }
  });
})(jQuery);
