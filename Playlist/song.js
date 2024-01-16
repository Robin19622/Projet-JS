


function Song(title, artist, duration){
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function(){
    let htmlString = '<li';
    if (this.isPlaying){
        htmlString += ' style="background-color: pink; font-weight: bold;"';
    } else {
        htmlString += ' style="font-weight: bold; background-color: white;"';
    }
    htmlString += '>';
    htmlString += this.title + ' - ' + this.artist + ' ' + this.duration;
    htmlString += '</li>';
    return htmlString;
};

