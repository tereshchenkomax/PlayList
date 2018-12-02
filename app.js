const playlist = new PlayList();

const song1 = new Song('Hells bells', 'AC/DC', '03:35');
const song2 = new Song('Immigrant song', 'Led Zeppelyn', '05:35');
const movie1 = new Movie('Avengers: Infinity War', '2:30', 2018);
const movie2 = new Movie('Man in Black', '2:30', 1997);

playlist.add(song1);
playlist.add(song2);
playlist.add(movie1);
playlist.add(movie2);

const list = document.getElementById('list');
const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const next = document.getElementById('btn-next');

playlist.renderIn(list);
play.addEventListener('click',()=>{
	playlist.play();
	playlist.renderIn(list);
})

stop.addEventListener('click',()=>{
	playlist.stop();
	playlist.renderIn(list);
})

next.addEventListener('click',()=>{
	playlist.next();
	playlist.renderIn(list);
})
