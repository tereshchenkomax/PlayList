function Song(title, artist, duration){
	Media.call(this, title, duration);
	this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;
Song.prototype.template = function(){
	return `<div class="row py-3 ${this.isPlaying ? 'current' : ''}"> 
				<div class="col-sm-9">${this.artist} - ${this.title}</div>
				<div class="col-sm-3">${this.duration}</div>
			</div>`;
};

