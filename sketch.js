
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	BobPositionX=width/2;
	BobPositionY=height/4+500;
	bobDiameter=40;
	roof = new Roof(width/2, height/4, width/5, 20)
	bob1=new Bob(BobPositionX-bobDiameter*2,BobPositionY,bobDiameter);
	bob2=new Bob(BobPositionX-bobDiameter,BobPositionY,bobDiameter);
	bob3=new Bob(BobPositionX,BobPositionY,bobDiameter);
	bob4=new Bob(BobPositionX+bobDiameter,BobPositionY,bobDiameter);
	bob5=new Bob(BobPositionX+bobDiameter*2,BobPositionY,bobDiameter);
	rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  drawSprites();
 
}



