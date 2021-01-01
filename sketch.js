const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground,ball;

function setup() { 
  createCanvas(400,400);
  myEngine=Engine.create();//myEngine.world;
  myWorld=myEngine.world

  var ball_options={
   restitution:1
  }
  ball=Bodies.circle(200,200,50,ball_options)
  World.add(myWorld,ball)



  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,370,400,40,options)
  World.add(myWorld,ground)

  console.log(ground.position)

}

function draw() {
  background("cyan");  
  Engine.update(myEngine);
  fill("Brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40)

fill("pink");
ellipseMode(RADIUS)
circle(ball.position.x,ball.position.y,50)

}