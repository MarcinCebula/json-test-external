jQuery(document).ready(function($) {
	
	
	$.ajax({
	  url: "http://radiant-flower-39.heroku.com/cars.json",
	  data: "GET",
		dataType: "JSON",
	  success: function(data) {
			alert(data)
	}
	});
	
	
	
});