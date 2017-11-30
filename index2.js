/*global $*/
/*global APIKEY $*/
$(document).ready(function() {

$.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      sources: { category: "business", country: "us", language: "en", apiKey: "13b97311a2014874a45db72ad3c7ca88" },
      success: function() {
          if (data.status === "ok")
            {
                
            }
      }
      
//   .done(function( msg ) {
//       alert( "Data Saved: " + msg );
    
//     });
})