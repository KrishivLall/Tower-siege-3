const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine, body;
var polygon, slingshot;

function preload() {
  
}

function setup() {

  createCanvas(1200,400);
  

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 400, 1200, 20);
  platform = new Ground(1050, 345, 220, 20);

  //layer 1
  block1 = new Box(1050, 335, 30, 40, "pink");
  block2 = new Box(1070, 335, 30, 40, "green");
  block3 = new Box(1090, 335, 30, 40, "red");
  block4 = new Box(1100, 335, 30, 40, "yellow");
  block5 = new Box(1030, 335, 30, 40, "purple");
  block6 = new Box(1010, 335, 30, 40, "orange");
  
  //layer2
  block7 = new Box(1030, 325, 30, 40, "pink");
  block8 = new Box(1050, 325, 30, 40, "green");
  block9 = new Box(1070, 325, 30, 40, "blue");
  block10 = new Box(1090, 325, 30, 40, "yellow");

  //layer3
  block11 = new Box(1050, 315, 30, 40, "pink");
  block12 = new Box(1070, 315, 30, 40, "orange");

  polygon = new Ball(400, 350, 20);

  slingshot = new SlingShot(polygon.body,{x:400, y:250});
  



}

function draw() {

  Engine.update(engine);

  background(255,255,255);  
  drawSprites();

  ground.display();
  platform.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  polygon.display();

  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}