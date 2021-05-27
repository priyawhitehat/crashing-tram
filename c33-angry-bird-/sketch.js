const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var rock;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(600,380,1200,20);

  rock=new Rock(1000,180,100,100);


}

function draw() {
  background(bg);  
  Engine.update(engine);

  rock.display();
  }

  
