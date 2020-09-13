var ground,paper,dustbin,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground =new Ground(600,height,700,20)
paper=new Paper(20,20)
dustbin=new Dustbin(500,530,100,10)
dustbin2=new Dustbin(600,580,10,200)
dustbin3= new Dustbin(695,530,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 paper.display();
dustbin.display();
dustbin2.display();
dustbin3.display();
 keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



