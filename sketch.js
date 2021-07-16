
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var launcher,launcher2;

function preload()
{
	
}

function setup() {
	createCanvas(2500, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(630,760,1250,1250);
    ground = new Ground(1250,1350,2500,30);
    mango1 = new Mango(450,450,100);
    mango2 = new Mango(650,350,100);
    mango3 = new Mango(350,600,100);
    mango4 = new Mango(798,438,100);
    mango5 = new Mango(458,310,100);
    mango6 = new Mango(175,495,100);
    mango7 = new Mango(578,550,100);
    mango8 = new Mango(750,232,100);
    mango9 = new Mango(800,650,100);
    mango10 = new Mango(925,525,100);
    mango11 = new Mango(1040,635,100);
    boy = new Boy(2255,1180,600,600);
    stone = new Stone(2075,1038,100,100);
    launcher = new Launcher(stone.body,{x:2060,y:1040});

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(135,206,235);

  textSize(40);
  fill("yellow");
  text("Press 'SPACE' key to play again",1800,200);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  boy.display();
  stone.display();
  launcher.display();
  
  detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
  detectCollison(stone,mango6);
  detectCollison(stone,mango7);
  detectCollison(stone,mango8);
  detectCollison(stone,mango9);
  detectCollison(stone,mango10);
  detectCollison(stone,mango11);

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.Launcherfly();
}
function detectCollison(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=100.01){
    Body.setStatic(lmango.body,false);
  }
}
function keyPressed(){
  if(keyCode===32){
    Body.setPosition(stone.body,{x:2075,y:1038});
    launcher.Launcherattach();
  }
}