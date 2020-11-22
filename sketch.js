//Declaring the variables.
var tree,boySprite,stone,cons,ground,stoneLeft,stage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mango7,mango8,mango9,mango10,mango11,mango12;
var mango13,mango14,mango15,mangoPos,stonePos;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Function for preloading.
function preload() {
  // Loading images to 2 variables.
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

//Function for setting up.
function setup() {
  // Creating the canvas area.
  createCanvas(1350, 700);
  
  //Setting stoneLeft's value as 12.
  stoneLeft = 12;
  //Setting stage's value as 1.
  stage = 1;

  //Creating an engine in the variable 'engine'.
  engine = Engine.create();
  //Storing engine's world in the variable world.
	world = engine.world;

  //Creating the bodies.
  stone = new Stone(150, 525, 20);
  cons = new Cons(stone.body,{x:150,y:525});
	ground = new Ground();
	mango1 = new Mango(990,190,20);
	mango2 = new Mango(940,240,30);
	mango3 = new Mango(1090,90,20);
	mango4 = new Mango(1185,205,20);
	mango5 = new Mango(1070,190,30);
	mango6 = new Mango(1140,160,20);
	mango7 = new Mango(1030,130,20);
	mango8 = new Mango(1020,250,30);
	mango9 = new Mango(1150,280,20);
	mango10 = new Mango(875,285,20);
	mango11 = new Mango(960,300,30);
	mango12 = new Mango(1280,280,20);
	mango13 = new Mango(1250,220,20);
	mango14 = new Mango(1100,250,30);
  mango15 = new Mango(1220,280,20);
  
  //Creating the sprites.
	boySprite = createSprite(200,580,10,10);
	boySprite.addImage(boyImg);
	boySprite.scale = 0.1;	

	tree = createSprite(1050,350,10,10);
	tree.addImage(treeImg);
	tree.scale = 0.5;

  //Running the previously created engine.
	Engine.run(engine);  
}

//Draw loop function.
function draw() {
  //Setting rect mode as CENTER.
  rectMode(CENTER);
  //Setting ellipse mode as RADIUS.
  ellipseMode(RADIUS);
  //Setting background as light blue. 
  background("lightBlue");

  fill("black");
  textFont("segoe script");
  textSize(20);
  textStyle(BOLD);
  text("Welcome to Plucking Mangoes! You are Ginny and your friends have given you a",10,30);
  text("challenge to pluck all the mangoes from the tree with the help of only 12 stones.",10,55);
  text("You can throw the stone by dragging it and then releasing it from your mouse.",10,80);
  text("Press 'Enter' to use the next stone after throwing the current stone.",10,105);
  text("Good luck!!",10,130);
  textFont("georgia");
  textSize(25);
  text("Stones left: " + stoneLeft,10,180);

  //Displaying the sprites.
  drawSprites();

  //Displaying the bodies.
  stone.display();
  cons.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  ground.display();

  //Calling detectCollision function for different objects. 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);

  if(mango1.body.position.y > 600 && mango2.body.position.y > 600 && mango3.body.position.y > 600 && mango4.body.position.y > 600 && mango5.body.position.y > 600 && mango6.body.position.y > 600 && mango7.body.position.y > 600 && mango8.body.position.y > 600 && mango9.body.position.y > 600 && mango10.body.position.y > 600 && mango11.body.position.y > 600 && mango12.body.position.y > 600 && mango13.body.position.y > 600 && mango14.body.position.y > 600 && mango15.body.position.y > 600) {
    fill("red");
    stroke("red");
    textFont("courier new");
    textSize(25);
    textStyle(ITALIC);
    text("Congrats! You completed the challenge.",180,300);

    var line = createSprite(462,310,535,2);
    line.lifetime = 5;
    line.shapeColor = "red";

    stage = 2;
  }

  if(stoneLeft === 0) {
    if(mango1.body.position.y < 600 || mango2.body.position.y < 600 || mango3.body.position.y < 600 || mango4.body.position.y < 600 || mango5.body.position.y < 600 || mango6.body.position.y < 600 || mango7.body.position.y < 600 || mango8.body.position.y < 600 || mango9.body.position.y < 600 || mango10.body.position.y < 600 || mango11.body.position.y < 600 || mango12.body.position.y < 600 || mango13.body.position.y < 600 || mango14.body.position.y < 600 || mango15.body.position.y < 600) {
      fill("red");
      stroke("red");
      textFont("courier new");
      textSize(25);
      textStyle(ITALIC);
      text("Uh oh! You failed the challenge.",200,300);

      var line = createSprite(435,310,455,2);
      line.lifetime = 5;
      line.shapeColor = "red";

      stage = 2;
    }
  }
}

//keyPressed function.
function keyPressed() {
  if(keyCode === 13 && stage === 1) {
    //Attaching the stone back to the cons when enter key is pressed. 
    cons.reposition(stone.body);
    //Updating the position of stone.
    Matter.Body.setPosition(stone.body,{x:150,y:525});
  }
}

//detectCollision function.
function detectCollision(lstone,lmango) {
  //Giving values to mangoPos and stonePos varaibles.
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;

  //Declaring a variable distance and assigning it a value.
  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
  //Setting lmango's body non-static under a condition.
	if(distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

//mouseDragged function.
function mouseDragged() {
  //Setting stone's positions equal to mouse's position when mouse is dragged under certain conditions.
  if(stage === 1 && stone.body.position.x < 300 && stone.body.position.x > 0 && stone.body.position.y < 675 && stone.body.position.y > 375) {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
}

//mouseReleased function.
function mouseReleased() {
  //Calling the fly function for cons when mouse is released under certain conditions.
  if(stage === 1 && stone.body.position.x < 300 && stone.body.position.x > 0 && stone.body.position.y < 675 && stone.body.position.y > 375) {
    cons.fly();
    //Decreasing stoneLeft's value by 1.
    stoneLeft = stoneLeft - 1;
  }
}  
