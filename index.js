/*global $*/
/*global APIKEY $*/
$(document).ready(function() {
  
    $.ajax({
      //method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
      success: function(data) {
          if (data.status === "ok") {
              console.log(data)
              for (var i = 0; i < data.sources.length; i++) {
                var source = document.createElement("OPTION");
                source.getAttribute("value", data.sources[i].id);
                source.innerHTML = data.sources[i].name;
                document.getElementById("selection").appendChild
                (source);
              }
          }
      }
        
    })
    // .done(function( data ) {
    //     console.log( data );
    //     console.log( data.status )
    // });

    $("#source").submit(function(event) {
        event.preventDefault();
        alert(document.getElementById("selection").value);

     for (var i = 0; i < document.getElementById("selection").length; i++);
        var articleName = document.getElementById("selection").value;
        var article = document.getElementById("article");
        article.innerHTML = articleName;
        
      });
        
});