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
const {
    id, secret
} = keys.spotify

var spotify = new Spotify({
    id, secret
});
console.log(keys)


//Returns the artists name
var getArtists = function (artist) {
    return artist.name;
};

// function for searching for a Spotify song
var spotifySong = function (songName) {
    if (songName === undefined) {
        songName = "Eye of the Tiger";
    }
    spotify.search(
        {
            type: "track",
            query: songName,
            limit: 1
        },

        function (err, song) {
            if (err) {
                console.log('Error!' + err);
                return;
            }
            console.log(song + "songData.name")


            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s)" + songs[i].artists.map(getArtists));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    )
};


//function for running a movie search
var getMovies = function (movie) {

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function (response) {
    var jsonData = response.data; 
        var movie =
            "--------------------------------------------------------------------" +
            "\nTitle:" + jsonData.Title +
            "\nYear:" + jsonData.Year +
            "\nimbdRating" + jsonData.imdbRating +
            "\nCountry:" + jsonData.Country +
            "\nLanguage:" + jsonData.Language +
            "\nPlot:" + jsonData.plot +
            "\nRotten Tomatoes Rating:" + jsonData.Ratings[1] +
            "\nCast:" + jsonData.Actors;
        console.log(movie);
    })
};



var getBands = function (artist) {
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandURL).then(
        function (response) {
            var jsonData = response.data;

            if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
            }

            console.log("Upcoming concerts for " + artist + ":");

            for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i];
                console.log(
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};

// Function for running a command based on text file
var textCommand = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};


// Function for determining which command is executed
var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getBands(functionData);
            break;
        case "spotify-this-song":
            spotifySong(functionData);
            break;
        case "movie-this":
            getMovies(functionData);
            break;
        case "do-what-it-says":
            textCommand();
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};


// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv.slice(3).join(" "));
