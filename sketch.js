var cells = [];

function setup() {
	createCanvas(512, 512);
	var cell = new Cell();
	cells.push(cell);
}

function draw() {
  background(230, 230, 250);
  for (var i = cells.length - 1; i >= 0; i--) {
  	cells[i].move();
  	cells[i].show();
  };
}


function mousePressed() {
	for (var i = cells.length - 1; i >= 0; i--) {
		if(cells[i].clicked(mouseX,mouseY))   {
  			cells.push(cells[i].mitosis());
			//console.log(cells[i].id)
		}
  	
  	};
}
