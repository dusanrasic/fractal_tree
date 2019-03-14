
function Branch(begin, end) {
	this.begin = begin;
	this.end = end;
	this.finished = false;
	this.angle = 0;

	this.show = () => {
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.update = (mx, my) => {
		this.angle  = atan2(my - end.y, mx - end.x);
	}

	this.branchA = () => {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI/6 + this.angle);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);

		return b;
	}
	this.branchB= () => {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI/6 + this.angle);
		dir.mult(0.7);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);

		return b;
	}
}
