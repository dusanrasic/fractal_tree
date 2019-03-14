var tree = [];
var leaves = [];
var count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	var a = createVector(width/2, height);
	var b = createVector(width/2, height-100);

	var root = new Branch(a, b);

	tree[0] = root;
	for(var i=0; i < 6; i++) {
		addBranches();
		count++;
	}
}

function addBranches() {
	for(var i = tree.length - 1; i >= 0; i--) {
		if(!tree[i].finished) {
			tree.push(tree[i].branchA(PI/6));
			tree.push(tree[i].branchB(PI/6));
		}
		tree[i].finished = true;
	}

	if(count === 5) {
		for(var i=0; i < tree.length; i++) {
			var leaf = tree[i].end.copy();
			leaves.push(leaf);
		}
	}
}

function normalize (val, max, min) {
	return (val-min)/(max-min);
}

function mouseMoved() {
	if(mouseX > width/2) {
		console.log(normalize(mouseX-width/2, width/2, 0), 'right');
		for(var i=1; i<tree.length; i++) {
			tree[i].update((normalize(width/2-mouseX, width/2, 0)));
		}
	}
	else if(mouseX < width/2){
		console.log(-(normalize(width/2-mouseX, width/2, 0)), 'left');
		for(var i=1; i<tree.length; i++) {
			tree[i].update(-(normalize(width/2-mouseX, width/2, 0)));
		}
	}
}

function draw() {
	background(51);

	for(var i=0; i<tree.length; i++) {
		tree[i].show();
	}
	for(var i=0; i < leaves.length; i++) {
		fill(77, 168, 59, 150);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
	}
}
