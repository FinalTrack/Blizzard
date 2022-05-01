HOW TO PLAY: To play Blizzard, download the code in the repository as a zip file. Once downloaded, extract its contents. Inside the folder, navigate to "index.html" and click on it to start the game!

VIDEO DEMO: https://www.youtube.com/watch?v=jTFhtB6aDcw

ABOUT THE PROJECT: Blizzard is a 2d side scrolling platformer game designed to be launched on the web. In it, you play as a character searching for her brother, who disappeared after going to the deserted town called "Bandonville" to study its history. You have to find the research papers he left behind, scattered throughout the town, and learn about the town's mysterious past. Note that the game is still in its demo version, and the story has not been finished. The game tries to focus extensively on the art and atmosphere of the settings to make it appear gloomy and haunted. 

TRACK: This project is being submitted for the OPEN INNOVITY track.

HOW IT WAS MADE: The game uses a tile scrolling engine, which I wrote in javascript. This basically divides the world into a grid of evenly spaced squares. Each square can be filled with a tile, or kept empty. (Kind of like a 2d minecraft) This makes it very easy to design and edit the world. For the platformer physics, all objects are approximated to rectangles which makes testing for collisions much simpler. The tile engine stores the world as a 2d array with each entry representing the type of tile placed in that position. Coding the moving platforms is the trickiest because a moving platform can often end up pushing the player into a wall. In this case the player needs to be moved around until they are no longer colliding with a wall or the moving platform. If this is not possible, the player ends up "crushed".

The next step was to design art for the characters, the tiles, and the background. For this I used a free svg editor called inkscape. Some of the tiles and characters had animations built into them, which means an image had to be drawn for each frame of the animation. 

Finally, I had to give the player a sense of progression. This was acheived by hiding research papers around the world for the player to find. Each research paper would reward the player with a little piece of history about the town. 
