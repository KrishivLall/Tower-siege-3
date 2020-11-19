const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine, body;
var polygon, slingshot;
var score = 0;
var backgroundImg;

function preload() {
  getBackgroundImg();
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

  noStroke();
  textSize(20);
  fill("white");
  text("SCORE: " + score, 500, 200);

  Engine.update(engine);
  
  if(backgroundImg){
        background(backgroundImg);
  }
  
  ground.display();
  platform.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  polygon.display();

  slingshot.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/morning.png";
  }
  else{
      bg = "sprites/night.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}