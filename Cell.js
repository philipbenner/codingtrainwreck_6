function Cell (_x, _y, _r){

	this.xpos =  _x || width/2;//random(width);
	this.ypos = _y || height/2;//random(height);
	this.pos = createVector(this.xpos, this.ypos);
	this.r = _r || 120;
	//this.id = _i;


	this.move = function () {
		var vel = p5.Vector.random2D();
		this.pos.add(vel)
	}
	this.show = function (){
		push()
		noStroke();
		fill(255,0,0,255);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);

		pop();
	}
	this.clicked = function (_x,_y){
		var d = dist(this.pos.x, this.pos.y, _x, _y);
		if (d < this.r ){
			
			return true;
		} else {
			return false;
		}

	}
	this.mitosis = function (){
		var newr = this.r*.75;
		var cell = new Cell (this.pos.x+(random(newr) - newr/2), this.pos.y+(random(newr) - newr/2), newr);
		this.r = newr;
		return cell;
	}
}