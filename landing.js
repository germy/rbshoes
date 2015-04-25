 $(document).ready(function(){

 	if(document.cookie.indexOf("lang") >= 0){
 		$('#splash').hide();
 		$('#main').show();
        $("#lang").text("Language: " + document.lang);
 	}

 	$('#english').click(function(){
        document.cookie="lang=english; expires=Thu, 18 Dec 3000 12:00:00 UTC";        
 		$('#splash').hide();
 		$('#main').show();
        $("#lang").text("Language: " + document.lang);
 	});
    
 	$('#spanish').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=spanish; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Language: " + document.lang);
 	});

    $('#french').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=french; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Language: " + document.lang);
 	});
    
    $('#chinese').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=chinese; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Language: " + document.lang);
 	});    
    
    $('#lang').click(function(){
        document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
 	});    
    
 });