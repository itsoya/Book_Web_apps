$(document).ready(function() { 

	$(function(){
		$(window).resize(function(){
			if($(window).width() <= 750){
				$('#menu li').attr('data-toggle', 'collapse');
			} else  {
				$('#menu li').attr('data-toggle', ''); 
			}
		});
		if($(window).width() <= 750){
			$('#menu li').attr('data-toggle', 'collapse');
		} else {
			$('#menu li').attr('data-toggle', '');
		}
	});
});