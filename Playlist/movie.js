function Movie(title, year, duration){
  Media.call(this, title, duration);
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);


Movie.prototype.toHTML = function(){
    let htmlString = '<li';
    if (this.isPlaying){
        htmlString += ' style="background-color: pink; font-weight: bold;"';
    } else {
        htmlString += ' style="font-weight: bold; background-color: white;"';
    }
    htmlString += '>';
    htmlString += this.title + ' - ' + this.year + ' ' + this.duration;
    htmlString += '</li>';
    return htmlString;
};