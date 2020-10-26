
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var image1

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2,675, width,10);
	groundSprite.shapeColor=color(255);
	grass=createSprite(225,620,500,105)
	grass2=createSprite(530,660,500,28)
	hi=new Wall(495,560,10,100)
	rect2=new Base (505,560,100,20,{isStatic:true});
	hi2=new Wall(620,560,10,140)
	paperobject = new paper (100,530,50,{isStatic:false});
	ground = Bodies.rectangle(400, 570, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);}


function draw() {
  background(150);
  keyPressed()
  drawSprites();
  paperobject.display();
  hi.display();
  hi2.display();
  rect2.display();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperobject.body,paperobject.body.position, {x:20,y:-45})
}
}

