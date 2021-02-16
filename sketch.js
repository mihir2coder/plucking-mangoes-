
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree
var mango1,mango2,mango3,mango4,mango5,mango6,mango8
var world,boy;
var launcherobj
var launcherforce=100
var stoneobj

function preload()
{
boy=loadImage("boy.png")
tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground= new Ground(600,700,1200,20);
    stoneobj= new stone(260,540,20)
    mango1= new mango(740,510,10)
    mango2= new mango(740,460,10)
    mango3= new mango(720,420,10)
    mango4= new mango(780,420,10)
    mango5= new mango(820,410,10)
    mango6= new mango(860,450,10)
	launcherobj= new launcher(stoneobj.body,{x:260,y:540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  imageMode(CENTER)

  image(boy,320,610,200,300)
  image(tree,800,530,400,400)
  stoneobj.display()
  launcherobj.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  collision(stoneobj,mango1)
  collision(stoneobj,mango2)
  collision(stoneobj,mango3)
  collision(stoneobj,mango4)
  collision(stoneobj,mango5)
  collision(stoneobj,mango6)
 
}

function mouseDragged(){
Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
launcherobj.fly()
}

function collision(s,m){
 spos=s.body.position
 mpos=m.body.position
 var distance=dist(spos.x,spos.y,mpos.x,mpos.y)
 if(distance<s.r+m.r){
   Matter.Body.setStatic(m.body,false)
 }
}
