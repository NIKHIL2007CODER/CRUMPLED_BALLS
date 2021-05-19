const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball;

function preload()
{
	
}

function setup() {
   var canvas = createCanvas(1365,620)

	engine = Engine.create();
	world = engine.world;

  var  ground_options ={
    isStatic:true,
  }
  var wall_options={
    isStatic:true
  }
 


    ground = Bodies.rectangle(width/2,610,1400,4,ground_options);
    World.add(world,ground);
	
    
   // ball = Bodies.circle(200,230,15,ball_options);
   // World.add(world,ball)

    wall1 = Bodies.rectangle(1200,585,100,20,wall_options);
    World.add(world,wall1);

    wall2 = Bodies.rectangle(1150,545,20,100,wall_options);
    World.add(world,wall2);

    wall3 = Bodies.rectangle(1250,545,20,100,wall_options);
    World.add(world,wall3);

    wall4 = Bodies.rectangle(1380,height/2,20,700,wall_options);
    World.add(world,wall4);

    wall5 = Bodies.rectangle(width/2,-10,1600,20,wall_options);
    World.add(world,wall5);

    wall6 = Bodies.rectangle(-10,height/2,20,700,wall_options);
    World.add(world,wall6)

    ball2 = new Ball(200,230,30);
    
   
}
 

function draw() {
  background('blue');
  Engine.update(engine);
  rectMode(CENTER);
  fill(181,101,29);
  stroke(181,101,29);
  rect(ground.position.x,ground.position.y,1400,30);
  


 // stroke(225,225,228);
 // fill(225,225,225);
 // circle(ball.position.x,ball.position.y,30);

 stroke(255,255,0);
 fill(255,255,0);
 rect(wall1.position.x,wall1.position.y,100,20);

 rect(wall2.position.x,wall2.position.y,20,100);

 rect(wall3.position.x,wall3.position.y,20,100);

 rect(wall4.position.x,wall4.position.y,20,700);

 rect(wall5.position.x,wall5.position.y,1600,20);

 rect(wall6.position.x,wall6.position.y,20,700);

  ball2.display();
 

 keypressed(ball2);
}

function keypressed(object){
if (keyCode === UP_ARROW){
 Matter.Body.applyForce(object.body,object.body.position,{x:15,y:-15})
 }
}



