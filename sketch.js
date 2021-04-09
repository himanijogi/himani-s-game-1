const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ship,boat
var victim,pirates
var hero
function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   pirates =  Bodies.rectangle(400, 50, 34, 10 );
   victim= Bodies.rectangle(450, 50, 34, 10 );
   hero  = Bodies.rectangle(50, 50, 34, 10 );
   tree1  = Bodies.rectangle(100, 100, 34, 100 );
   tree2  = Bodies.rectangle(130, 100, 34, 100 );
  ship = Bodies.rectangle(400, 100, 34, 10 );
   boat= Bodies.rectangle(350, 50, 34, 10 );
 World.add(world,pirates)
 World.add(world,victim)
 World.add(world,hero)
 World.add(world,ship)
 World.add(world,boat)
 slingshot = new SlingShot(tree1.body,{x:130,y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    rect( 200, 100, pirates.width,pirates.height);
    rect(450,50, victim.width,victim.height);
    rect(50,50, hero.width,hero.height);
    rect( 400,100, ship.width,ship.height);
    rect( 350,50, boat.width,boat.height);
   
}