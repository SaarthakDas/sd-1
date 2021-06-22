var bg;
var shuttle;
var moon;
var earth;
var bgI;
var shuttleI;
var moonI;
var earthI;

function preload(){
   
  bgI = loadImage("images/space.png");
  shuttleI = loadImage("images/shuttle.jpg");
  moonI = loadImage("images/moon.png");
  earthI = loadImage("images/earth.png");
 
}

function setup(){
  createCanvas(displayWidth,displayHeight)
    
  earth = createSprite(1090,380,100,100)
  earth.addImage(earthI)
  earth.scale = 0.9

  moon = createSprite(325,190,70,70)
  moon.addImage(moonI)
  moon.scale = 0.7;

  shuttle = createSprite(1090,280,20,20)
  shuttle.addImage(shuttleI)
  shuttle.scale = 0.6;

  


  
  

}

function draw(){

 background(bgI);

  drawSprites();
}

