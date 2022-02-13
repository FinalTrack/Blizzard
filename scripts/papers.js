var paper1 = new Image();
paper1.src = "./paper/paper1.png";

var paper2 = new Image();
paper2.src = "./paper/paper2.png";

var paper3 = new Image();
paper3.src = "./paper/paper3.png";

function paper(x, y)
{
	this.x = x;
	this.y = y;
	this.collect = 0;
	this.i = papers.length;
}

var papers = [];
papers.push(new paper(1700, 1550));
papers.push(new paper(200, 650));
papers.push(new paper(4700, 250));
papers.push(new paper(7300, 750));
papers.push(new paper(7000, 1950));
papers.push(new paper(10550, 2350));
papers.push(new paper(12700, 850));
papers.push(new paper(14900, 350));
papers.push(new paper(19200, 1150));
papers.push(new paper(12000, 3350));
papers.push(new paper(14000, 4050));

var research = [];
var unknown = [];
for(var i = 0; i < papers.length; i++)
{
	research[i] = new Image();
	research[i].src = "./paper/research" + i + ".png";
	unknown[i] = new Image();
	unknown[i].src = "./paper/unknown" + i + ".png";
}

var updatePaper = function(p)
{
	if(p.collect == 0)
	{
		var distX = Math.abs(playerHit.cX - p.x);
		var distY = Math.abs(playerHit.cY - p.y);
		if(distX < playerHit.sw + 10 && distY < playerHit.sh + 10)
		{
			p.collect = 1;
			lock = true;
			respawnX = p.x;
			respawnY = p.y - 50;
			collect.play();
		}
	}
	else if(p.collect < 100)
	{
		p.collect += 2;
		if(p.collect >= 100)
		{
			page = p.i;
			menu = 1;
		}
	}
}
