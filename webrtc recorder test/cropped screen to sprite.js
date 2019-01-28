




var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

ctx.fillRect(50,50,50,50);

var spriteSheet = new Image();
spriteSheet.src = can.toDataURL();
//document.body.appendChild(img);

spriteSheet.onload = function(){

	data.currentFrame=1;

	//coordinates of sprites for invaders
	//each invader type has two frames
	//Each sub array contains: Source x,Source y,Source width,Source height
	InvaderSprites1 =[[11, 5, 32, 16],[10, 33, 32, 16]];

	canvasContent.drawImage(spriteSheet, ...invader.sprites[data.invaderFrame], 
		invader.x, invader.y,invaderWidth,invader1Height);
}