function Media(title, duration){
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function(){
  this.isPlaying = true;
};

Media.prototype.stop = function(){
  this.isPlaying = false;
};
// Héritage de Song de Media
function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;

// Héritage de Movie de Media
function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);
Movie.prototype.constructor = Movie;