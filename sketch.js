var player, stuckPlayer, ground, background;
var ball1, ball2, ball3, ball4;
var dragon;
var fire1, fire2, fire3, fire4;
var line1, line2, line3, line4, line7, line8, line9, line10;
var playerImg, ballImg, fireImg1, fireImg2, dragonImg, backgroundImg, stuckPlayerImg;
var gameState="PLAY";
function preload(){
  playerImg=loadImage("im1.png");
  ballImg=loadImage("im5.png");
  fireImg1=loadImage("im3.png");
  fireImg2=loadImage("im2.png");
  dragonImg=loadImage("im4.png");
  backgroundImg=loadImage("im6.png");
  stuckPlayerImg=loadImage("im7.jpg");
}

function setup(){
    createCanvas(900,800);
    ground=createSprite(430,750,800,5);
    ground.shapeColor="green";
    player=createSprite(70,730,20,20);
       player.addImage(playerImg);
       player.scale=0.07;
    stuckPlayer=createSprite(300,160,20,20);
    stuckPlayer.addImage(stuckPlayerImg);
    stuckPlayer.scale=0.1;
   

    ball1=createSprite(330,580,25,25);
     ball1.addImage(ballImg);
     ball1.scale=0.08;
     ball1.velocityX=3;
    ball2=createSprite(550,680,25,25);
    ball2.addImage(ballImg);
    ball2.scale=0.08;
    ball2.velocityY=-2;
    ball3=createSprite(420,580,20,20);
    ball3.addImage(ballImg);
    ball3.scale=0.08;
    ball3.velocityY=2;
    ball4=createSprite(480,680,20,20);
    ball4.addImage(ballImg);
    ball4.scale=0.08;
    ball4.velocityX=-3;
    dragon=createSprite(290,420,30,30);
     dragon.addImage(dragonImg);
     dragon.scale=0.1;
     dragon.velocityX=4;
     
    fire1=createSprite(180,225,30,30);
     fire1.addImage(fireImg2);
     fire1.scale=0.2;
    fire2=createSprite(300,310,30,30);
    fire2.addImage(fireImg1);
    fire2.scale=0.2;
    fire3=createSprite(450,225,30,30);
    fire3.addImage(fireImg2);
    fire3.scale=0.2;
    fire4=createSprite(600,310,30,30);
    fire4.addImage(fireImg1);
    fire4.scale=0.2;


    line1=createSprite(430,65,795,5);
    line1.shapeColor="green";
    line2=createSprite(30,405,5,690);
    line2.shapeColor="green";
    line3=createSprite(830,405,5,690);
    line3.shapeColor="green";
    line4=createSprite(390,700,720,5);
    line4.shapeColor="red";
    line7=createSprite(470,556,730,5);
    line7.shapeColor="blue";
    line8=createSprite(370,450,670,5);
    line8.shapeColor="orange";
    line9=createSprite(470,330,730,5);
    line9.shapeColor="radiant";
    line10=createSprite(370,200,670,5);
    line10.shapeColor="purple";

    player.setCollider("circle",0,0,2);
}


function draw(){
  background("yellow");

if(gameState=="PLAY"){
if(keyDown("RIGHT_ARROW")){
    player.x=player.x+4;
}
if(keyDown("LEFT_ARROW")){
    player.x=player.x-4;
}
if(keyDown("UP_ARROW")){
    player.y=player.y-4;
}
if(keyDown("DOWN_ARROW")){
    player.y=player.y+4;
}
}
if(player.isTouching(stuckPlayer)){
  stuckPlayer.collide(player);
}
if(player.isTouching(line1)){
  gameState="END";
}
if(player.isTouching(line2)){
  gameState="END";
}
if(player.isTouching(line3)){
  gameState="END";
 
}
if(player.isTouching(line4)){
  gameState="END";
}

if(player.isTouching(line7)){
  gameState="END";
 
}
if(player.isTouching(line8)){
  gameState="END";
 
}
if(player.isTouching(line9)){
  gameState="END";
}
if(player.isTouching(line10)){
  gameState="END";
}
if(player.isTouching(ball1)){
  gameState="END";
}
if(player.isTouching(ball2)){
  gameState="END";
}
if(player.isTouching(ball3)){
  gameState="END";
}
if(player.isTouching(ball4)){
  gameState="END";
 
}
if(player.isTouching(fire1)){
  gameState="END";
 
}
if(player.isTouching(fire2)){
  gameState="END";
 
}
if(player.isTouching(fire3)){
  gameState="END";
 
}
if(player.isTouching(fire4)){
  gameState="END";
}
if(player.isTouching(dragon)){
  gameState="END";
 
}
if(gameState=="WIN"){
  text("YOU WIN", 400, 500);
}
if(gameState=="END"){
  player.x=70;
  player.y=730;
  text("YOU LOSE", 400,500);
}

dragon.bounceOff(line2);
dragon.bounceOff(line3);
ball1.bounceOff(line2);
ball1.bounceOff(line3);
ball4.bounceOff(line2);
ball4.bounceOff(line3);
ball2.bounceOff(line4);
ball2.bounceOff(line7);
ball3.bounceOff(line4);
ball3.bounceOff(line7);
player.collide(stuckPlayer);
  drawSprites();
}
