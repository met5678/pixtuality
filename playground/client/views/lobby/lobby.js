Template.lobby.rendered = function() {
  var giphyKey = "dc6zaTOxFJmzC";
  var giphyRandomUrl = "http://api.giphy.com/v1/gifs/random?api_key="+giphyKey;

  var randomGif = function(error, result) {
    if (error) {
      return;
    }
    var url = result.data.data.image_original_url;
    $('.BackgroundGif').css('background-image', 'url('+url+')' );
  };

  HTTP.call("GET", giphyRandomUrl, randomGif);

  setInterval( function() {
    HTTP.call("GET", giphyRandomUrl, randomGif)
  }, 10000);

};

Template.lobby.helpers({
  'curPlayers': function() {
    return Participants.find().count();
  },

  'maxPlayers': function() {
    return 32;
  }
});
