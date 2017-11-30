/*global $*/
/*global APIKEY $*/
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/sources",
		data: {
			category: "business",
			country: "us",
			language: "en",
			apiKey: APIKEY
		},
		success: function(data) {
			if (data.status === "ok") {
				console.log(data)
				for (var i = 0; i < data.sources.length; i++) {
					var source = document.createElement("OPTION");
					source.setAttribute("value", data.sources[i].id);
					source.innerHTML = data.sources[i].name;
					document.getElementById("selection").appendChild(source);
				}
			}
		}
	});
	
	
	$("#source").submit(function(event) {
		event.preventDefault();
		document.getElementById("heading").innerHTML = "";
		document.getElementById("heading").innerHTML+=("Top Business Headlines");
		document.getElementById("headlines").innerHTML = "";
		$.ajax({
			method: "GET",
			url: "https://newsapi.org/v2/top-headlines",
			data: {
				sources: document.getElementById("selection").value, apiKey: APIKEY
			},
			success: function(data) {
				console.log(data);
				if (data.status === "ok") {
					for (var i = 0; i < data.articles.length; i++) {
						console.log(data.articles[i].title);
						
						
	
  
  }
}
					
				
			}
		})
	});

});