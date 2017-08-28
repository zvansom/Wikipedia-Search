$(document).ready(function(){

// jQuery Shortcuts
  var search_bar = $('#searchField');
  var search_button = $('#searchButton');
  var links = $('#results');


// Link generator function for results window
  function link_generator(data){

    var i = 0,
      title = data[1],
      description = data[2],
      link = data[3];

    for(i; i < data[3].length; i++){
      var  list_link = '<a href="'+link[i]+'" target="blank">'+title[i]+'</a><br/>';
      var link_description = '<p class="description">'+description[i]+'</p>';
      list_return = list_link+link_description+'<hr>';
      links.append(list_return);
    }
  }

// Wiki Auto-complete

  search_bar.autocomplete({
    source: function(query, result) {
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
          'action': "opensearch",
          'format': "json",
          'search': query.term
        },

        success: function (data) {
          links.empty();
          link_generator(data);
        }

      });
    }

  });

});
