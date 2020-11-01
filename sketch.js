const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20;
var polygon;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  base1 = new Ground(590,430,230,20);
  base2 = new Ground(1000,230,230,20);

  box1 = new Box(590,400,30,40);
  box2 = new Box(620,400,30,40);
  box3 = new Box(560,400,30,40);
  box4 = new Box(650,400,30,40);
  box5 = new Box(530,400,30,40);
  box6 = new Box(500,400,30,40);
  box7 = new Box(680,400,30,40);
  box8 = new Box(590,360,30,40);
  box9 = new Box(620,360,30,40);
  box10 = new Box(560,360,30,40);
  box11 = new Box(650,360,30,40);
  box12 = new Box(530,360,30,40);
  box13 = new Box(590,320,30,40);
  box14 = new Box(560,320,30,40);
  box15 = new Box(620,320,30,40);
  box16 = new Box(590,280,30,40);

  box17 = new Box(1000,220,30,40);
  box18 = new Box(1030,220,30,40);
  box19 = new Box(970,220,30,40);
  box20 = new Box(1000,170,30,40);

  polygon = new Polygon(120,490,20,20);

  slingshot = new SlingShot(polygon.body,{x:120,y:490});






}

function draw() {
  background(247, 217, 134); 
  Engine.update(engine); 
  drawSprites();
  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}