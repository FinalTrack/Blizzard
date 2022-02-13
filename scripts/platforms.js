var metal = new Image();
metal.src = "./moving/metal.png";

var crusher = new Image();
crusher.src = "./moving/crusher.png";

var lift = new Image();
lift.src = "./moving/lift.png";

var side = new Image();
side.src = "./moving/side.png";

var crusher2 = new Image();
crusher2.src = "./moving/crusher2.png";

function moving(startX, startY, ww, hh, final, up, img, state, speed, loop)
{
	this.up = up;
	if(up)
		this.start = startY;
	else
		this.start = startX;
	this.hit = new hitbox(startX, startY, ww, hh);
	this.final = final;
	this.state = state;
	this.vel = 0;
	this.img = img;
	this.speed = speed;
	this.loop = loop;
}

var movePlatform = function(platform)
{
	if(platform.up)
	{
		if(platform.state == 1)
		{
			if(platform.final < platform.start)
			{
				platform.vel = -platform.speed;
				platform.hit.cY += platform.vel;
				if(platform.hit.cY <= platform.final)
					platform.state = -1;
			}
			else
			{
				platform.vel = platform.speed;
				platform.hit.cY += platform.vel;
				if(platform.hit.cY >= platform.final)
					platform.state = -1;
			}
		}
		else if(platform.state == -1)
		{
			if(platform.start < platform.final)
			{
				platform.vel = -platform.speed;
				platform.hit.cY += platform.vel;
				if(platform.hit.cY <= platform.start)
				{
					if(platform.loop)
						platform.state = 1;
					else
						platform.state = 0;
				}
			}
			else
			{
				platform.vel = platform.speed;
				platform.hit.cY += platform.vel;
				if(platform.hit.cY >= platform.start)
				{
					if(platform.loop)
						platform.state = 1;
					else
						platform.state = 0;
				}
			}
		}	
	}
	else
	{
		if(platform.state == 1)
		{
			if(platform.final < platform.start)
			{
				platform.vel = -platform.speed;
				platform.hit.cX += platform.vel;
				if(platform.hit.cX <= platform.final)
					platform.state = -1;
			}
			else
			{
				platform.vel = platform.speed;
				platform.hit.cX += platform.vel;
				if(platform.hit.cX >= platform.final)
					platform.state = -1;
			}
		}
		else if(platform.state == -1)
		{
			if(platform.start < platform.final)
			{
				platform.vel = -platform.speed;
				platform.hit.cX += platform.vel;
				if(platform.hit.cX <= platform.start)
				{
					if(platform.loop)
						platform.state = 1;
					else
						platform.state = 0;
				}
			}
			else
			{
				platform.vel = platform.speed;
				platform.hit.cX += platform.vel;
				if(platform.hit.cX >= platform.start)
				{
					if(platform.loop)
						platform.state = 1;
					else
						platform.state = 0;
				}
			}
		}
	}
}

var platforms = [];
platforms.push(new moving(3350, 650, 100, 100, 3950, false, metal, 0, 4, true));
platforms.push(new moving(5250, 650, 100, 100, 350, true, metal, 0, 3, true));

platforms.push(new moving(5800, 850, 200, 300, 1150, true, crusher, 1, 3, true));
platforms.push(new moving(6200, 1150, 200, 300, 850, true, crusher, 1, 3, true));

platforms.push(new moving(6600, 1350, 200, 100, 2150, true, lift, 0, 3, true));
platforms.push(new moving(9450, 1950, 300, 100, 11450, false, side, 0, 5, true));
platforms.push(new moving(11550, 1350, 100, 100, 950, true, metal, 0, 4, true));

platforms.push(new moving(13050, 950, 300, 50, 13150, false, crusher2, 1, 2, true));
platforms.push(new moving(13250, 750, 300, 50, 13150, false, crusher2, 1, 2, true));

platforms.push(new moving(13850, 3100, 100, 100, 3400, true, metal, 0, 4, false));
platforms.push(new moving(13550, 3100, 100, 100, 3400, true, metal, 0, 4, false));