var arguments = process.argv

console.log(arguments)

require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var Twitter = require('twitter')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

if (arguments[2] === 'my-tweets'){
  client.get('statuses/home_timeline', count = 20, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  })

}
