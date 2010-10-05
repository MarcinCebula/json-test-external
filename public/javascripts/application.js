jQuery(document).ready(function($) {
	
	
	$.ajax({
	  // url: "http://localhost:3000/cars.json",
		url: "http://bedf.dyndns.info:9911/api?begin=l-5m&end=l&id=0,1&step=60&form=json",
	  data: "GET",
		dataType: "JSON",
	  success: function() {
			console.log("success")
	}
	});
	
	
	
});