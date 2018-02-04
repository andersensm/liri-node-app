## **Liri Node App**


Designed to use the node.js terminal to access:
 * My latest 20 tweets
 * Search for any song with details
 * Search for any movie with details
 * Use Random.txt to generate song requests by reading document
## **Code Style**
 * Object-Oriented Programming (OOP).
## **Code Example**
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
## **Installation**
Prerequisites:
* Fork and/or clone repository to your local environment.
Requirements:
* Text Editor
* Node.js
* Access package.json for additional details
## **How to use**
  1. Open Bash Terminal, path to folder location containing: liri.js
  2. Type: node liri.js
    * Four Options appear: 
      * node liri.js my-tweets
      * node liri.js spotify-this-song
      * node liri.js movie-this
      * node liri.js do-what-it-says
  3. If song or movies options are typed in a song/movie has to be chosen.
    * Format:
     * node liri.js spotify-this-song Circle of Life
     * node liri.js movie-this lion king


Credits
This application was built by Sean Andersen, Full Stack Web Development Students at George Washington University's Coding Boot Camp.
License
Attribution-NonCommercial 4.0
International (CC BY-NC 4.0)

Sean Andersen-2018 (CC)

