var arguments = process.argv

var fullSong = ""

var fullMovieName= ""

var doWhatItSays = []

var ready = false

console.log(arguments)


require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var Twitter = require('twitter')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


switch(arguments[2]) {
    case 'my-tweets':
        if (arguments[2] === 'my-tweets'){
          client.get('statuses/home_timeline', count = 20, function(error, tweets, response) {
            if (!error) {
              for (var i = 0; i < tweets.length; i++) {
                console.log("-------------------------------------------------------------------");
                console.log("Created: " + tweets[i].created_at);
                console.log("Post: " + tweets[i].text);
                console.log("User: " + tweets[i].user.screen_name);
              }
            }
          })
        }
        break;
    case 'spotify-this-song':
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
        if ((arguments[2] === 'spotify-this-song') && (arguments[3] === undefined )) {
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
        break;
    case 'movie-this':
        if ((arguments[2] === 'movie-this') && (arguments[3] != "")) {

          for (var i = 3; i < arguments.length; i++) {
            fullMovieName = fullMovieName + " " + arguments[i];
            ready = true
          }
          if (ready === true) {
              var request = require("request");
              request("http://www.omdbapi.com/?t=" + fullMovieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
                if (!error && response.statusCode === 200) {
                  console.log("-------------------------------------------------------------------");
                  console.log("Movie Title: " + JSON.parse(body).Title);
                  console.log("Release Date: " + JSON.parse(body).Year);
                  console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                  console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                  console.log("Country Produced: " + JSON.parse(body).Country);
                  console.log("Languages: " + JSON.parse(body).Language);
                  console.log("Plot: " + JSON.parse(body).Plot);
                  console.log("Actors: " + JSON.parse(body).Actors);

                }
              })
              ready=false
          }
        }
        if ((arguments[2] === 'movie-this') && (arguments[3] === undefined )) {
          ready = true
          if (ready === true) {
              var request = require("request");
              request("http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {
                // If the request is successful (i.e. if the response status code is 200)
                if (!error && response.statusCode === 200) {
                  console.log("-------------------------------------------------------------------");
                  console.log("Movie Title: " + JSON.parse(body).Title);
                  console.log("Release Date: " + JSON.parse(body).Year);
                  console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                  console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                  console.log("Country Produced: " + JSON.parse(body).Country);
                  console.log("Languages: " + JSON.parse(body).Language);
                  console.log("Plot: " + JSON.parse(body).Plot);
                  console.log("Actors: " + JSON.parse(body).Actors);
                }
              })
              ready=false
          }
        };
        break;
    case 'do-what-it-says':
        if (arguments[2] === 'do-what-it-says') {
          var fs = require("fs");

          fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {
              return console.log(err);
            }
            ready = true

            fullSong = data

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

        });
        }
        break;
    default:
        console.log("-------------------------------------------")
        console.log("Please specify one of the available options")
        console.log("Option 1: 'my-tweets'")
        console.log("Option 2: 'spotify-this-song'")
        console.log("Option 3: 'movie-this'")
        console.log("Option 4: 'do-what-it-says'")
        console.log("-------------------------------------------")
}
