var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,orangeLeaf,red;
var appleImg,orangeLeafImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX

  var seclet_sprite = Math.round(random(1,3));
  if (frameCount % 80 == 0){
   if(seclet_sprite == 1)
   {createApples();}
  else if (seclet_sprite == 2){          createApples(); }
  else { createApples(); } }
  
 
 var select_sprite = Math.round(random(1,3));
 if (frameCount % 100 == 0) {
   if (seclet_sprite == 1)
 { createLeaves(); }
 else if (seclet_sprite == 2){
    createLeaves(); }
   else { createLeaves (); } }
   drawSprites();
 }

 

function createApples(){
  var apple = createSprite(200,Math.round(random(20, 370)), 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 5;
  apple.lifetime = 150;
  apple.scale = 0.1;

}

function createLeaves(){
  var leaf = createSprite(100,Math.round(random(20, 370)), 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 5;
  leaf.lifetime = 150;
  leaf.scale = 0.1;
}

function createOrangeLeaves() {
  var orangeLeaf = createSprite2(100,Math.round(random(20, 370)), 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 5;
  orangeLeaf.lifetime = 150;
  orangeLeaf.scale = 0.1;
}

function red() {
  var red = createSprite(200,Math.round(random(20, 370)), 10, 10);
  red.addImage(redImg);
  red.velocityY = 5;
  red.lifetime = 150;
  red.scale = 0.1;
}


