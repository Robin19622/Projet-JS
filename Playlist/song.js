function Song(title, artist, duration){
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function(){
  this.isPlaying = true;
  console.log("Joue : " + this.title + " par " + this.artist);
};

Song.prototype.stop = function(){
  this.isPlaying = false;
};

Song.prototype.toHTML = function(){
 let htmlString = '<li';
 if (this.isPlaying){
   htmlString += 'class = "current"';
 }
    htmlString += '>';
 htmlString += this.title;
 htmlString += ' - ';
 htmlString += this.artist;
 htmlString += '   '+this.duration;
 htmlString += '</li>';
 return htmlString;
};

/* Part 2
function Song(title, artist, duration){
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function(){
 let htmlString = '<li';
 if (this.isPlaying){
   htmlString += 'class = "current"';
 }
    htmlString += '>';
 htmlString += this.title;
 htmlString += ' - ';
 htmlString += this.artist;
 htmlString += '   '+this.duration;
 htmlString += '</li>';
 return htmlString;
};
*/
