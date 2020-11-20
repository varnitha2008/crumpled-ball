var mybar1,mybar2,mybar3;
var paperous;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){                 

	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	mybar2=new bar(230,600,20,100);
	mybar3=new bar(370,640,290,20);
	mybar1=new bar(510,600,20,100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

    ground = Bodies.rectangle(width/2,height-49,width,10,{isStatic:true})
	World.add(world,ground);	
    
    //barSprite=createSprite(width/2, height=596, width=40);
	//barSprite.shapeColor=("red");
    
    paperobj=new paper(100,600,30);

	Engine.run(engine);
  
}


function draw() {
   Engine.update(engine);
  rectMode(CENTER);
  background("black");
  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y
  mybar1.display();
  mybar2.display();
  mybar3.display();
  paperobj.display();
 
 

  drawSprites();
 
}

function keyPressed() {
     if (keyCode === UP_ARROW){ 
         console.log("press E");
         Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:20,y:-20}) 
        } 
}




