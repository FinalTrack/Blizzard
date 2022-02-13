function hitbox(cX, cY, ww, hh, type)
{
	this.cX = cX;
	this.cY = cY;
	this.ww = ww;
	this.hh = hh;
	this.sw = ww / 2;
	this.sh = hh / 2;
	this.type = type;
}

var hitboxes = [];
hitboxes.push(new hitbox(50, 50, 100, 100, true));
hitboxes.push(new hitbox(50, 75, 100, 50, true));
hitboxes.push(new hitbox(50, 25, 100, 50, true));
hitboxes.push(new hitbox(50, 80, 80, 40, false));
hitboxes.push(new hitbox(25, 80, 30, 40, false));
hitboxes.push(new hitbox(20, 50, 40, 80, false));
hitboxes.push(new hitbox(80, 50, 40, 80, false));
hitboxes.push(new hitbox(50, 75, 80, 40, false));
hitboxes.push(new hitbox(50, 20, 80, 40, false));
hitboxes.push(new hitbox(75, 80, 30, 40, false));