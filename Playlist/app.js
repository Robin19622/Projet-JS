// Start the application

// Create an empty playlist
let playlist = new Playlist();

// Create two songs
let hereComesTheSun = new Song ("Here comes the sun", 'The Beatles','2:54');
let walkingOnSunshine = new Song ("Walking on sunshine",
  'Katrine and the waves','3:53');


/********* PART 2 ***********/
// Create two movies
let theGodFather = new Movie('The GodFather', '1972', '175');
let taxiDriver = new Movie('Taxi Driver', '1976', '114');



playlist.add(theGodFather);
playlist.add(taxiDriver);

// Add the two songs to the playlist
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

function addHoverEffect(button) {
  button.onmouseover = function() {
    this.style.border = "2px solid black";
  };
  button.onmouseout = function() {
    this.style.border = "";
  };
}

// Appliquez cette fonction à chaque bouton

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

addHoverEffect(playButton);
addHoverEffect(nextButton);
addHoverEffect(stopButton);

document.addEventListener('DOMContentLoaded', function() {
  let mainCenter = document.getElementById('mainCenter');
  let playlist = document.getElementById('playlist');
  let playButton = document.getElementById('play');
  let nextButton = document.getElementById('next');
  let stopButton = document.getElementById('stop');

  // Retire les boutons et les réinsère après la liste de lecture
  mainCenter.removeChild(playButton);
  mainCenter.removeChild(nextButton);
  mainCenter.removeChild(stopButton);
  mainCenter.insertBefore(playButton, playlist.nextSibling);
  mainCenter.insertBefore(nextButton, playlist.nextSibling);
  mainCenter.insertBefore(stopButton, playlist.nextSibling);
  mainCenter.style.backgroundColor = 'white'; // Définit le fond en blanc
  mainCenter.style.border = '2px solid black'; // Ajoute une bordure noire
});

