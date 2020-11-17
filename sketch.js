var ob1
var b1
var speed;
var weight;



function setup() {
 speed=random(55,90)
 weight=random(400,1500)
  createCanvas(800,400);
  ob1=createSprite(790, 70, 50, 50);
   
  b1=createSprite(10,70,20,20)
   

b1.velocityX=speed

}

function draw() {
  background(0);  
if(b1.x-ob1.x<b1.width/2+ob1.width/2&&ob1.x-b1.x<b1.width/2+ob1.width/2){
 b1.velocityX=0
 var deformation=0.5*weight*speed*speed/22509
 if(deformation>180){
       b1.shapeColor="red"

 }
 if(deformation<100){
       b1.shapeColor="green"

 }
 if(deformation<180&&deformation>100){
       b1.shapeColor="yellow"

 }
}else{
    b1.shapeColor="white"

  b1.velocityX=speed
}








  drawSprites();
}