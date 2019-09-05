(function($){
    $(function(){

    	/*$('#formCheckHover').hover(
		  // Mouse Over
		  function(){
		    $('#hover-check').removeClass("ui-state-hovered");
		  },
		  // Mouse Out
		  function(){
		    $('#hover-check').addClass("ui-state-hovered");
		});*/

		$(document).on('mouseover', '#formCheckHover', function() {
			$('#hover-check').removeClass('ui-state-hovered');
		});

		$(document).on('mouseout', '#formCheckHover', function() {
			$('#hover-check').addClass('ui-state-hovered');
		});

		$('#buttonLogin').on('click', function(e){
			let test = [];
			var valLogin = $('#inputUserNameLogin').val();
			var rv_name = /^[a-zA-Zа-яА-Я]+$/;
			if(valLogin.length > 2 && valLogin != '' && rv_name.test(valLogin))
            	{
                	$('#inputUserNameLogin').removeClass('error').addClass('not_error');
                	test.push(1);
               	}
            else
            	{
            		$('#inputUserNameLogin').removeClass('not_error').addClass('error');
            	}
            var valPassword = $('#inputPasswordLogin').val();
            var rv_password = /^[a-zA-Zа-яА-Я0-9]+$/;
            if(valPassword.length > 5 && valPassword != '' && rv_password.test(valPassword))
                {
                	$('#inputPasswordLogin').removeClass('error').addClass('not_error');
                	test.push(2);
               	}
            else
            	{
            		$('#inputPasswordLogin').removeClass('not_error').addClass('error');
            	}
            if(test.length < 2){
            	e.preventDefault();
            }
		});

		$('#inputUserNameLogin').unbind().blur( function(){
			var valLogin = $('#inputUserNameLogin').val();
			var rv_name = /^[a-zA-Zа-яА-Я]+$/;
			if(valLogin.length > 2 && valLogin != '' && rv_name.test(valLogin))
            	{
                	$('#inputUserNameLogin').removeClass('error').addClass('not_error');
               	}
            else
            	{
            		$('#inputUserNameLogin').removeClass('not_error').addClass('error');
            	}
		});

		$('#inputPasswordLogin').unbind().blur( function(){
			var valPassword = $('#inputPasswordLogin').val();
            var rv_password = /^[a-zA-Zа-яА-Я0-9]+$/;
            if(valPassword.length > 5 && valPassword != '' && rv_password.test(valPassword))
                {
                	$('#inputPasswordLogin').removeClass('error').addClass('not_error');
               	}
            else
            	{
            		$('#inputPasswordLogin').removeClass('not_error').addClass('error');
            	}
		});

		$('#buttonRegistr').on('click', function(e){
			let testReg = [];
			var valLogin = $('#inputUserNameRegistr').val();
			var rv_name = /^[a-zA-Zа-яА-Я]+$/;
			if(valLogin.length > 2 && valLogin != '' && rv_name.test(valLogin))
            	{
                	$('#inputUserNameRegistr').removeClass('error').addClass('not_error');
                	testReg.push(1);
               	}
            else
            	{
            		$('#inputUserNameRegistr').removeClass('not_error').addClass('error');
            	}
            var valPassword = $('#inputPasswordRegistr').val();
            var rv_password = /^[a-zA-Zа-яА-Я0-9]+$/;
            if(valPassword.length > 5 && valPassword != '' && rv_password.test(valPassword))
                {
                	$('#inputPasswordRegistr').removeClass('error').addClass('not_error');
                	testReg.push(2);
               	}
            else
            	{
            		$('#inputPasswordRegistr').removeClass('not_error').addClass('error');
            	}
            var valEmail = $('#inputUserEmailRegister').val();
            var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               		if(valEmail != '' && rv_email.test(valEmail))
               		{
                  		$('#inputUserEmailRegister').removeClass('error').addClass('not_error');
                  		testReg.push(3);
			        }
               		else
               		{
		                $('#inputUserEmailRegister').removeClass('not_error').addClass('error');
		            }
		    if(testReg.length < 3){
            	e.preventDefault();
            }
		});

		$('#inputUserNameRegistr').unbind().blur( function(){
			var valLogin = $('#inputUserNameRegistr').val();
			var rv_name = /^[a-zA-Zа-яА-Я]+$/;
			if(valLogin.length > 2 && valLogin != '' && rv_name.test(valLogin))
            	{
                	$('#inputUserNameRegistr').removeClass('error').addClass('not_error');
               	}
            else
            	{
            		$('#inputUserNameRegistr').removeClass('not_error').addClass('error');
            	}
		});

		$('#inputPasswordRegistr').unbind().blur( function(){
			var valPassword = $('#inputPasswordRegistr').val();
            var rv_password = /^[a-zA-Zа-яА-Я0-9]+$/;
            if(valPassword.length > 5 && valPassword != '' && rv_password.test(valPassword))
                {
                	$('#inputPasswordRegistr').removeClass('error').addClass('not_error');
               	}
            else
            	{
            		$('#inputPasswordRegistr').removeClass('not_error').addClass('error');
            	}
		});

		$('#inputUserEmailRegister').unbind().blur( function(){
			var valEmail = $('#inputUserEmailRegister').val();
            var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               		if(valEmail != '' && rv_email.test(valEmail))
               		{
                  		$('#inputUserEmailRegister').removeClass('error').addClass('not_error');
                  		testReg.push(3);
			        }
               		else
               		{
		                $('#inputUserEmailRegister').removeClass('not_error').addClass('error');
		            }
		});

    });

})(jQuery);