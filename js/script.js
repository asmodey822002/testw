(function($){
    $(function(){

  		$(document).on('mouseover', '#parentCheckRemember', function() {
  			$('#hoverCheck').removeClass('ui-state-hovered');
  		});

  		$(document).on('mouseout', '#parentCheckRemember', function() {
  			$('#hoverCheck').addClass('ui-state-hovered');
  		});

    });

})(jQuery);