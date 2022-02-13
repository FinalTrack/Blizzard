var i1 = new Image();
i1.src = "./instructions/instruction1.png";

var i2 = new Image();
i2.src = "./instructions/instruction2.png";

var i3 = new Image();
i3.src = "./instructions/instruction3.png";

var i4 = new Image();
i4.src = "./instructions/instruction4.png";

var i5 = new Image();
i5.src = "./instructions/instruction5.png";

var iAlpha = 0;
var currentI = 1;
var targetI = 1;

var updateI = function()
{
	if(targetI != currentI)
	{
		iAlpha -= 4;
		if(iAlpha <= 0)
		{
			iAlpha = 0;
			currentI = targetI;
		}
	}
	else if(iAlpha < 100 && currentI < 6)
		iAlpha += 4;
	else
	{
		if(currentI > 0 && currentI < 4)
		{
			if((keys[122] || keys[90]) && !prevZ)
			{
				targetI++;
				if(targetI == 4)
				{
					lock = false;
					wind.play();
				}
			}
		}	
		else if(currentI == 4)
		{
			if(playerHit.cX > 500)
				targetI = 6;
		}
		else if(currentI == 6)
		{
			if(papers[4].collect > 99)
				targetI = 5;
		}
	}
}

var renderI = function()
{
	if(iAlpha == 0)
		return;
	pen.globalAlpha = iAlpha/100;
	if(currentI == 1)
		pen.drawImage(i1, 0, 500, 800, 80);
	else if(currentI == 2)
		pen.drawImage(i2, 0, 500, 800, 80);
	else if(currentI == 3)
		pen.drawImage(i3, 0, 500, 800, 80);
	else if(currentI == 4)
		pen.drawImage(i4, 0, 500, 800, 80);
	else if(currentI == 5)
		pen.drawImage(i5, 0, 500, 800, 80);
	pen.globalAlpha = 1;
}