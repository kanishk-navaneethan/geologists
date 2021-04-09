const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var square,square2,square3,square4,square5;
var rectangle,rectangle2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  square = new Box(720,320,70,70);
  square2 = new Box(700,320,10,10);
  square3 = new Box(710,320,10,10);
  square4 = new Box(705,320,10,10);
  square5 = new Box(707,320,10,10);
  rectangle = new Box(715,320,40,80);
  rectangle = new Box(717,320,40,80);
  rectangle2 = new Box(690,320,40,80);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square.display();
    square2.display();
    square3.display();
    square4.display();
    square5.display();
    rectangle.display();
    rectangle2.display();
}