// client-side js
// run by the browser each time your view template is loaded

$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    var trackName = $(
      // '<a href="' + data.external_urls.spotify + '" target="blank">' + '<h3>' + data.name + '</h3>' + '</a>'
      `<h3><a href="${data.external_urls.spotify}" target="blank">${data.name}</a></h3>`
    );
    trackName.appendTo('#search-track-container');
    
    // Display the artist(s) name
    var artists = '';
    data.artists.forEach(function(element) {
      artists = artists + element.name + ' ';
     });
    
    var artistName = $('<h5>' + artists + '</h5>');
    artistName.appendTo('#search-track-container');
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  $.get('/category-playlists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.log(data.href);
    console.groupEnd();
    
    // Display the covers of the playlists    
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
  });
  
  $.get('/tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.log(data.href);
    console.groupEnd();
    
    // The name of the track in 'Audio Features'
    var trackTitle = $('<h3>' + data.album.name + '</h3>');
    trackTitle.appendTo('#audio-features-name'); 
  });
  
  $.get('/audio-features', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "liveness", "tempo"]
    
    
    // Display the audio features
    keys.map(function(key, i) {
      for (var i = 0; i < 
    });
  });
  
  $.get('/artist', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
  });
  
  $.get('/artist-top-tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    var artistsName = $('<h3>'+ data[0].artists[0].name +'</h3>');
    artistsName.appendTo('#top-tracks-container');
    
    //Display the artists names
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container');
    });
  });

});
