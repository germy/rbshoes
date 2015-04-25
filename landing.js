 $(document).ready(function(){

 	if(document.cookie.indexOf("lang") >= 0){
 		$('#splash').hide();
 		$('#main').show();
 	}

 	$('#english').click(function(){
        document.cookie="lang=english; expires=Thu, 18 Dec 3000 12:00:00 UTC";        
 		$('#splash').hide();
 		$('#main').show();
 	});
    
 	$('#spanish').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=spanish; expires=Thu, 18 Dec 3000 12:00:00 UTC";
 	});

    $('#french').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=french; expires=Thu, 18 Dec 3000 12:00:00 UTC";
 	});
    
    $('#chinese').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=chinese; expires=Thu, 18 Dec 3000 12:00:00 UTC";
 	});    
    
 });