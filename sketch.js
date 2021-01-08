const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plinkos=[]
function preload() {
 
}

function setup(){
    var canvas = createCanvas(400,1200);
    engine = Engine.create();
    world = engine.world;
  

    d1=new Divisions(0,1000,10,400);
    d2=new Divisions(60,1000,10,400);
    d3=new Divisions(110,1000,10,400);
    d4=new Divisions(160,1000,10,400);
    d5=new Divisions(210,1000,10,400);
    d6=new Divisions(260,1000,10,400);
    d7=new Divisions(310,1000,10,400);
    d8=new Divisions(360,1000,10,400);
    d9=new Divisions(400,1000,10,400);
    
    for(var j = 40; j<=width ; j=j+50){
      plinkos.push(new plinko(j,75));

   }
    ground = new Ground(1200,height,2400,20)

  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
//plinkos.display();
  drawSprites();
}