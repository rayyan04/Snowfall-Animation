const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var maxSnow=10;
var ice=[];
var sound

function preload(){
  bg=loadImage("snow3.jpg");
  sound=loadSound("Sound.mp3")

}

function setup() {
  createCanvas(800,400);
 

  engine=Engine.create();
  world= engine.world;
 

  sound.play()


  if(frameCount % 50 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
}

function draw() {
  background(bg,windowWidth,windowHeight);
  Engine.update(engine);

  

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }      
  drawSprites();
}