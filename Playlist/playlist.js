// The playlist object
function Playlist(){
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song){
  this.songs.push(song);
};

Playlist.prototype.play = function(){
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function(){
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
};
Playlist.prototype.renderInElement = function(list, mediasToShow) {
  list.innerHTML = "";

  // Utiliser 'mediasToShow' s'il est fourni, sinon utiliser 'this.songs'
  let mediaList = mediasToShow || this.songs;

  for (let i = 0; i < mediaList.length; i++) {
    list.innerHTML += mediaList[i].toHTML();
  }
};
