var ghost1 = new Image();
ghost1.src = "./enemy/ghost.png";
var ghost2 = new Image();
ghost2.src = "./enemy/ghost2.png";
var ghost3 = new Image();
ghost3.src = "./enemy/ghost3.png";
var ghost4 = new Image();
ghost4.src = "./enemy/ghost4.png";
var ghost5 = new Image();
ghost5.src = "./enemy/ghost5.png";
var ghost6 = new Image();
ghost6.src = "./enemy/ghost6.png";
var ghost7 = new Image();
ghost7.src = "./enemy/ghost7.png";
var ghost8 = new Image();
ghost8.src = "./enemy/ghost8.png";

function ghost(start, y, end)
{
	this.start = start;
	this.x = start;
	this.y = y;
	this.end = end;
	this.vel = 0;
	this.kill = false;
	this.state = 1;
	this.die = 0;
}

var enemies = []

enemies.push(new ghost(7200, 2160, 8100));
enemies.push(new ghost(12200, 1160, 12800));
enemies.push(new ghost(16300, 460, 17100));
enemies.push(new ghost(14900, 2960, 14100));
enemies.push(new ghost(12400, 4060, 13200));


var moveGhost = function(g)
{
	if(g.die > 99)
		return;
	else if(g.die > 0)
	{
		g.die++;
		return;
	}
	if(g.kill)
	{
		if(death == 0)
			g.kill = false;
		else
			return;
	}
	if(g.state == 1)
	{
		if(g.end > g.start)
		{
			g.vel = 3;
			g.x += g.vel;
			if(g.x >= g.end)
				g.state = -1;
		}
		else
		{
			g.vel = -3;
			g.x += g.vel;
			if(g.x <= g.end)
				g.state = -1;
		}
	}
	else
	{
		if(g.start > g.end)
		{
			g.vel = 3;
			g.x += g.vel;
			if(g.x >= g.start)
				g.state = 1;
		}
		else
		{
			g.vel = -3;
			g.x += g.vel;
			if(g.x <= g.start)
				g.state = 1;
		}
	}
			
}

