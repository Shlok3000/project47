
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var guy, ground,robber,gun,bullet;
var score = 0;
var bulletSound, dieSound;

function preload()
{
	bulletSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	guy = new Guy(400,350,100,100);
	ground = new Ground(400,650,1000,50);
	robber = new Robber(600,350,100,100);
	gun = new Gun(guy.x,guy.y,50,70);
	bullet = new Bullet(guy.x,guy.y,10,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(robber.isTouching(guy)){
  guy.destroy();
  dieSound.play();
  }	
  else{
	  robber.velocityX = -(3 + 5*100/score);
  }

  if(keydown("space")){
    bullet.velocityX = 8;
    bulletSound.play();
  }

  textSize(20);
  stroke(4);
  text("Score: " + score, 600,400);
  fill("yellow");

  bullet.display();
  ground.display();
  gun.display();
  guy.display();
  robber.display();

  drawSprites();
 
}



