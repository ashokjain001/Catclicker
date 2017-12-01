var number = 0;
        $( ".pic" ).click(function() {
            number = number + 1;
            $(".number").text(number);
			$("#audio")[0].play();
	
        });
		
	    $( ".reset" ).click(function() {
			 number = 0;
			$(".number").text(number);
        });