$(document).ready(function(){

  $("#searchButton").click(function(){

    var searchField = $("#searchField").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
              +searchField+"&callback=?"

    $.ajax({
      method: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&callback=?",
      datatype: "json",
      success: function(result){
        console.log(result);
      },
      error: function(err){
        alert("There was an error.");
      },

    })

  });

});
