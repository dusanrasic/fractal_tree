let tree = [];
let leaves = [];
let count = 0;
let alpha = 0;

setup = () => {
	createCanvas(windowWidth, windowHeight);
	frameRate(120);

	setInterval(() => {
		this.moveTree();
	}, 500);
}

addBranches = () => {
	for(let i = tree.length - 1; i >= 0; i--) {
		if(!tree[i].finished) {
			tree.push(tree[i].branchA(alpha));
			tree.push(tree[i].branchB(alpha));
		}
		tree[i].finished = true;
	}

	if(count === 5) {
		for(let i=0; i < tree.length; i++) {
			let leaf = tree[i].end.copy();
			leaves.push(leaf);
		}
	}
}

moveTree = () => {
	alpha = Math.floor(Math.random() * 2) + 1;
	alpha *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	this.setupTree();
}

setupTree = () => {
	this.resetValues();
	let a = createVector(width/2, height);
	let b = createVector(width/2, height-100);

	let root = new Branch(a, b);

	tree[0] = root;
	for(let i=0; i < 6; i++) {
		addBranches();
		count++;
	}
}

resetValues = () => {
	tree = [];
	leaves = [];
	count = 0;
}

draw = () => {
	this.setupTree();
	background(51);

	for(let i=0; i<tree.length; i++) {
		tree[i].show();
	}
	for(let i=0; i < leaves.length; i++) {
		fill(77, 168, 59, 150);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
	}

	return null;
}
