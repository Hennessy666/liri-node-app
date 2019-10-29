require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');  //To get the information from the APIs for movie and concert-this

function spotifySong(song) {
    spotify.search({ type: 'track', query: song, limit: 1 })
        .then(function (response) {
            console.log("Song:" + songData.name)
        } else {
            console.log('Error!');
        })
}

function movieOMBD(movie) {

    var movieQuery = movie || "Mr. Nobody"

    axios.get("http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function (response) {
        var movieData =
            "--------------------------------------------------------------------" +
            "\nTitle:" + jsonData.Title +
            "\nYear:" + jsonData.Year +
            "\nimbdRating" + jsonData.imdbRating +
            "\nCountry:" + jsonData.Country +
            "\nLanguage:" + jsonData.Language +
            "\nPlot:" + jsonData.plot +
            "\nCast:" + jsonData.Actors;
        console.log(movieData);
    })
        .catch(function (error) {
            console.log(error);
        });

}
