function Branch(begin, end) {
	this.begin = begin;
	this.end = end;
	this.finished = false;
	angleMode(DEGREES);

	this.show = () => {
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.branchA = (alpha) => {
		let dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(30 + alpha);
		dir.mult(0.7);
		let newEnd = p5.Vector.add(this.end, dir);
		let b = new Branch(this.end, newEnd);
		return b;
	}
	this.branchB = () => {
		let dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-30 + alpha);
		dir.mult(0.7);
		let newEnd = p5.Vector.add(this.end, dir);
		let b = new Branch(this.end, newEnd);
		return b;
	}
}
