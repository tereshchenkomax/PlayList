function PlayList(){
	this.items = [];
	this.currentItem = 0;
}

PlayList.prototype.add = function(item){
	this.items.push(item);
};

PlayList.prototype.play = function(){
	let item = this.items[this.currentItem];
	item.play();
};

PlayList.prototype.stop = function(){
	let item = this.items[this.currentItem];
	item.stop();
};

PlayList.prototype.next = function(){
	this.stop();
	this.currentItem++;
	if(this.currentItem === this.items.length) {
		this.currentItem = 0;
	}
	let item = this.items[this.currentItem];
	item.play();
};

PlayList.prototype.renderIn = function(list){
	let tempList = '';
	this.items.forEach(item => {
		tempList += item.template();
	});
	list.innerHTML = tempList;
	return list.innerHTML;
};