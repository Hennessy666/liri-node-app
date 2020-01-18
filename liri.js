// DEPENDECIES 
//Read and set environment variables
require("dotenv").config();

// API Keys
var keys = require("./keys.js");
//node-spotify-api NPM package
var Spotify = require('node-spotify-api');
//axios npm package
var axios = require('axios');  //To get the information from the APIs for movie and concert-this
//import the moment npm package
var moment = require("moment");
//import the FS package for read/write
var fs = require("fs");
//initialize the spotify API client using our client id and scret
var spotify = new Spotify(keys.spotify);


//Returns the artists name
var getArtists = function(artist){
    return artist.name;
};

// function for searching for a Spotify song
var spotifySong = function (songName) {
    if (songName === undefined){
        songName = "Eye of the Tiger";
    }
    spotify.search(
        { type: 'track',
         query: 'song',
        limit: 1 },

        function(err, song) {
            console.log(song + "songData.name")
          }) else {
            console.log('Error!' + err);
            return;
        };

        var songs = data.tracks.items;

        for (var )

function movieOMBD(movie) {

    var movieQuery = movie || "Mr. Nobody";

    axios.get("http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function (response) {
        var movieData =
            "--------------------------------------------------------------------" +
            "\nTitle:" + jsonData.Title +
            "\nYear:" + jsonData.Year +
            "\nimbdRating" + jsonData.imdbRating +
            "\nCountry:" + jsonData.Country +
            "\nLanguage:" + jsonData.Language +
            "\nPlot:" + jsonData.plot +
            "\nRotten Tomatoes Rating:" + jsonData.Ratings[1] +
            "\nCast:" + jsonData.Actors;
        console.log(movieData);
    })
        .catch(function (error) {
            console.log(error);
        });

}
