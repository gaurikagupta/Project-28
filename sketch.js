//Declaring constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declaring variables
var groundSprite, paperSprite;
var dustbinSprite, dustbinImage;
var launcher;

function preload(){
dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    
    //Creating the ground
    groundSprite=new Base(400,height,800,20)

	//Creating paper ball
	paperSprite=new PaperNew(100,290,70,70);

    //Creating the dustbin
	dustbinSprite=createSprite(710,580);
	dustbinSprite.addImage(dustbinImage);
	dustbinSprite.scale=0.9;

  //Creating the launcher
  launcher=new Launcher(paperSprite.body,{x:300,y:200});
   
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  //Displaying sprites
  paperSprite.display();
  groundSprite.display();
  launcher.display(); 
  drawSprites();
}

/*Making the paper ball land in the dustbin
function keyPressed(){
  if (keyCode===UP_ARROW){
  Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:155, y:-155});
  }
}*/

function mouseDragged(){
  Matter.Body.setPosition(paperSprite.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
   launcher.fly();
  }
  



