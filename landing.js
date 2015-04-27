
 
 
 $(document).ready(function(){
     
  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.
  
    function getCookie(name){
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }      

 	if(document.cookie.indexOf("lang") >= 0){
 		$('#splash').hide();
 		$('#main').show();
        $("#lang").text("Choose Language: " + getCookie("lang"));
 	}

 	$('#english').click(function(){
        document.cookie="lang=english; expires=Thu, 18 Dec 3000 12:00:00 UTC";        
 		$('#splash').hide();
 		$('#main').show();
        $("#lang").text("Choose Language: " + getCookie("lang"));
 	});
    
    $( "#english" ).mouseover(function() {
        $("#lang-text").text("English");
    });
    
 	$('#spanish').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=spanish; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Choose Language: " + getCookie("lang"));
 	});
    
    $( "#spanish" ).mouseover(function() {
        $("#lang-text").text("Spanish");
    });    

    $('#french').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=french; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Choose Language: " + getCookie("lang"));
 	});
    
    $( "#french" ).mouseover(function() {
        $("#lang-text").text("French");
    });     
    
    $('#chinese').click(function(){
 		$('#splash').hide();
 		$('#main').show();
        document.cookie="lang=chinese; expires=Thu, 18 Dec 3000 12:00:00 UTC";
        $("#lang").text("Choose Language: " + getCookie("lang"));
 	});    
    
    $( "#chinese" ).mouseover(function() {
        $("#lang-text").text("Chinese");
    });      
    
    $('#lang').click(function(){
        document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        window.location.href = "http://germy.github.io/rbshoes";
 	});    
    
 });