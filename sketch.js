var rect1;
var rect2;
var box;

function setup() {
  createCanvas(800,400);

  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="black";
  rect2 = createSprite(300,400,50,50);
  rect2.shapeColor="black";

  box=createSprite(200,200,50,50);
  box.shapeColor="blue";


}

function draw() {
  background("pink");  

   rect2.x= mouseX;
   rect2.y = mouseY;

  if(isTouching(box,rect2)){
  box.shapeColor="orange";
  rect2.shapeColor="orange";
  }
  else{
    box.shapeColor="blue";
    rect2.shapeColor="black";
  }
 
   if(isTouching(rect1,rect2)){
   rect1.shapeColor="red";
   rect2.shapeColor="red";
   }
  
   else{
     rect1.shapeColor="black";
     rect2.shapeColor="black";
   }

  drawSprites();
}




