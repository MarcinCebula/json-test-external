jQuery(document).ready(function($) {
	
	
	$.ajax({
	  url: "http://radiant-flower-39.heroku.com/cars.json",
		//url: "http://bedf.dyndns.info:9911/api?begin=l-5m&end=l&id=0,1&step=60&form=json",
	  data: "GET",
		dataType: "JSON",
	  success: function() {
			console.log("success")
	}
	});
	
	
	
});