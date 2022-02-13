var crush = document.createElement("audio");
crush.src = "./sounds/end.wav";

var spikes = document.createElement("audio");
spikes.src = "./sounds/spikes.wav";

var wind = document.createElement("audio");
wind.src = "./sounds/wind.wav";
wind.loop = true;
wind.volume = 0.5;

var grass = document.createElement("audio");
grass.src = "./sounds/grass.wav";
grass.volume = 0.5;

var wood = document.createElement("audio");
wood.src = "./sounds/wood.wav";
wood.volume = 1;

var stone = document.createElement("audio");
stone.src = "./sounds/stone.wav";
stone.volume = 0.5;

var blaze = document.createElement("audio");
blaze.src = "./sounds/blaze.wav";
blaze.volume = 0.5;

var blazeDie = document.createElement("audio");
blazeDie.src = "./sounds/blazeDie.wav";
blazeDie.volume = 0.5;

var fire = document.createElement("audio");
fire.src = "./sounds/fire.wav";

var collect = document.createElement("audio");
collect.src = "./sounds/collect.wav";


var playSound = function(tileNo)
{
	if(tileNo == 17 || tileNo == 18)
		wood.play();
	else if(tileNo == 22 || tileNo == 23 || tileNo == 24 || tileNo == 35 || tileNo == 36 || tileNo == 37 || tileNo == 50 || tileNo == 59)
		stone.play();
	else
		grass.play();
}