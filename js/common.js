$(document).ready(function(){
	
	//owl
	$(".owl-carousel").owlCarousel({  	
		loop : true,
		autoplay : true,
		autoplayTimeout : 5000,
		items : 1,
		smartSpeed : 1000,
		center : true,
		autoplaySpeed : 2000,
		mouseDrag : false,
		dots : true
	});
	
	
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {			
			
			$(".test-our_services > h2").befote(".class_before_safari");
			
			
	}
})
