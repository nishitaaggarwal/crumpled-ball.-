const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,ground,dustbin2,dustbin3,ball1,dustbinimg;

function preload()
{
    dustbinimg=loadImage("dustbingreen.png");  
}

function setup() 
{
    createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;
    ground=Bodies.rectangle(600,400,1200,20,{isStatic:true});
    World.add(world,ground);
    
    ball1=new crumpledball(200,370,25)
    dustbin1=new dustbin(900,375,200,30)
    dustbin2=new dustbin(1000,370,30,100)
    dustbin3=new dustbin(800,370,30,100)
        //Create the Bodies Here.
    Engine.run(engine); 
}


function draw() 
{
    rectMode(CENTER);
    Engine.update(engine);
    background(255);
    rect(this.ground.position.x,this.ground.position.y,1200,20)
    imageMode(CENTER);
    dustbin2.display();
    dustbin3.display();
    dustbin1.display();

    ball1.display();
    image(dustbinimg, 900, 250);
   dustbinimg.scale = 0.5

    drawSprites();
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        Body.applyForce(ball1.body,ball1.body.position,{x:45,y:-45})
    }   
 
}
