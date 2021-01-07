
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var paper;

function preload()
{


	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(900,350,200,20);
  box2 = new Box(840,290,20,100);
	box3 = new Box(960,290,20,100);
	ground = new Ground(0,350,2500,20);
  paper = new Paper(75,250,55);

  Engine.run(engine);

} 


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});

}

}



