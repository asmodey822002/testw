(function($){
    $(function(){

  		$(document).on('mouseover', '#formCheckHover', function() {
  			$('#hoverCheck').removeClass('ui-state-hovered');
  		});

  		$(document).on('mouseout', '#formCheckHover', function() {
  			$('#hoverCheck').addClass('ui-state-hovered');
  		});

    });

})(jQuery);