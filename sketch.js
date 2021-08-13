var rectangle
function setup() {
  createCanvas(400,400);
  rectangle=createSprite(150,200,40,40)
  rectangle.shapeColor="pink"
}

function draw() 
{
  background("blue");
drawSprites()
if (keyDown(LEFT_ARROW)){
  rectangle.x=rectangle.x-2
}
if (keyDown(RIGHT_ARROW)){
  rectangle.x=rectangle.x+2
}
if (keyDown(UP_ARROW)){
  rectangle.y=rectangle.y-2
}
if (keyDown(DOWN_ARROW)){
  rectangle.y=rectangle.y+2
}
}




