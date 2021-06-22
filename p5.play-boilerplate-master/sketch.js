const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,200,999,100);
}

function draw() {
  background(255,255,255); 
   
  drawSprites();
}