var arguments = process.argv

var fullSong = ""

var ready = false


console.log(arguments)

require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var Twitter = require('twitter')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

/*Last of my 20 tweets */
  if (arguments[2] === 'my-tweets'){
    client.get('statuses/home_timeline', count = 20, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    })
  }


/*
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
*/

if ((arguments[2] === 'spotify-this-song') && (arguments[3] != "")) {
  for (var i = 3; i < arguments.length; i++) {
    fullSong = fullSong + " " + arguments[i];
    ready = true
  }
  if (ready === true) {
    spotify.search({ type: 'track', query: fullSong })
    .then(function(response) {

     var responseItemsArray = response.tracks.items
      for (var i = 0; i < responseItemsArray.length; i++) {
        console.log("-------------------------------------------------------------------");
        console.log("Featured Artists: " + responseItemsArray[i].artists[0].name);
        console.log("Song Name: " + responseItemsArray[i].name);
        console.log("Preview Link: " + responseItemsArray[i].preview_url);
        console.log("On Album: " + responseItemsArray[i].album.name);
    }
  })
  .catch(function(err) {
  console.log(err);
  });
  ready=false
  }
}
if (arguments[2] === 'spotify-this-song') {
  ready = true

  if (ready === true) {
    spotify.search({ type: 'track', query: 'The Sign' })
    .then(function(response) {

     var responseItemsArray = response.tracks.items
        console.log("-------------------------------------------------------------------");
        console.log("Featured Artists: " + responseItemsArray[5].artists[0].name);
        console.log("Song Name: " + responseItemsArray[5].name);
        console.log("Preview Link: " + responseItemsArray[5].preview_url);
        console.log("On Album: " + responseItemsArray[5].album.name);

  })
  .catch(function(err) {
  console.log(err);
  });
  ready=false
  }
}

/*
if ((arguments[2] === 'spotify-this-song') && (arguments[3] === undefined)) {
  spotify.search({ type: 'track', query: 'The Sign'})
  .then(function(response) {

  console.log("-------------------------------------------------------------------");
  console.log("Featured Artists: " + response.tracks.items[0].artists[0].name);
  console.log("Song name: " + response.tracks.items[0].name);
  console.log("A preview link: " + response.tracks.items[0].preview_url);
  console.log("On Album: " + response.tracks.items[0].album.name);
  console.log("-------------------------------------------------------------------");
})
.catch(function(err) {
  console.log(err);
});
}

*/
