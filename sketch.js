var ob1,ob2,ob3,ob4
var b1,b2,b3,b4;



function setup() {
 
  createCanvas(800,400);
  ob1=createSprite(790, 70, 50, 50);
    ob2=createSprite(790, 160, 50, 50);
  ob3=createSprite(790, 230, 50, 50);
  ob4=createSprite(790, 300, 50, 50);
  b1=createSprite(10,70,20,20)
    b2=createSprite(10,160,20,20)
  b3=createSprite(10,230,20,20)
  b4=createSprite(10,300,20,20)
  b1.shapeColor="white"

b1.velocityX=3
b2.velocityX=3
b3.velocityX=3
b4.velocityX=3


}

function draw() {
  background(0);  
if(b1.x-ob1.x<b1.width/2+ob1.width/2&&ob1.x-b1.x<b1.width/2+ob1.width/2){
    b1.shapeColor="red"
 b1.velocityX=0
}else{
    b1.shapeColor="white"

  b1.velocityX=3
}

if(b2.x-ob2.x<b2.width/2+ob2.width/2&&ob2.x-b2.x<b2.width/2+ob2.width/2){
    b2.shapeColor="red"
 b2.velocityX=0
}else{
    b2.shapeColor="white"

  b2.velocityX=3
}
if(b3.x-ob3.x<b3.width/2+ob3.width/2&&ob3.x-b3.x<b3.width/2+ob3.width/2){
    b3.shapeColor="red"
 b3.velocityX=0
}else{
    b3.shapeColor="white"

  b3.velocityX=3
}
if(b4.x-ob4.x<b4.width/2+ob4.width/2&&ob4.x-b4.x<b4.width/2+ob2.width/2){
    b4.shapeColor="red"
 b4.velocityX=0
}else{
    b4.shapeColor="white"

  b4.velocityX=3
}






  drawSprites();
}