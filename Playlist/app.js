// Start the application

// Create an empty playlist
let playlist = new Playlist();

// Create two songs
let hereComesTheSun = new Song ("Here comes the sun", 'The Beatles','2:54');
let walkingOnSunshine = new Song ("Walking on sunshine",
  'Katrine and the waves','3:53');


/********* PART 2 ***********/
// Create two movies
//let theGodFather = new Movie('The GodFather', '1972', '175');
//let taxiDriver = new Movie('Taxi Driver', '1976', '114');
//playlist.add(theGodFather);
//playlist.add(taxiDriver);

// Add the two songs to the playlist
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);


let playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

let playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
}

let nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}

let stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
