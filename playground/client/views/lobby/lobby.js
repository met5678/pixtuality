Template.lobby.rendered = function() {
  // like doc ready
  var giphyKey = "dc6zaTOxFJmzC";
  var giphyRandomUrl = "http://api.giphy.com/v1/gifs/random?api_key="+giphyKey;
  var randomGif = function(error, result) {
    if (error) {
      //do stuff
      return;
    }
    var gifUrl = result.data.data.image_original_url;
    $('.Lobby-backgroundGif').css('background-image', 'url('+gifUrl+')' );

  };
  HTTP.call("GET", giphyRandomUrl, randomGif);
  setInterval( function() {
    HTTP.call("GET", giphyRandomUrl, randomGif)
  }, 5000);

};
