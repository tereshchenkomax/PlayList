function Movie(title, duration, year){
	Media.call(this, title, duration);
	this.year = year;
}

Movie.prototype = Object.create(Media.prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.template = function(){
	return `<div class="row py-3 ${this.isPlaying ? 'current' : ''}"> 
				<div class="col-sm-9">${this.title} - ${this.year}</div>
				<div class="col-sm-3">${this.duration}</div>
			</div>`;
};

