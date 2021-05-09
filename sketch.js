
var jethalal,daya,babita;
var jethalalImg;
var dayaGrp , babitaGrp;
var score=0 ;
var jetha1 , jetha2,jetha3;
var life=3;
var gameState="play";
var gameOver;
function preload(){
jethalalImg=loadImage("Images/jethalal.png");
dayaImg=loadImage("Images/daya.png");
babitaImg=loadImage("Images/babita.png");
dayaImg=loadImage("Images/daya.png");
jetha1=loadImage("Images/jethalal.png");
jetha2=loadImage("Images/jethalal.png");
jetha3=loadImage("Images/jethalal.png");
gameOver=loadImage("Image/gameover.png");
//dayaSound=loadSound("Images/daya.mp3");

}

function setup() {
  createCanvas(600,800);
 
  jethalal=createSprite(300,600,30,30);
  jethalal.addImage("jethalal",jethalalImg);
  jethalal.scale=0.8;
  jethalal.setCollider("circle",0,0,50);
  //jethalal.debug=true;
  
  life1=createSprite(60,40,10,20);
  life2=createSprite(80,40,10,20);
  life3=createSprite(100,40,10,20); 

  life2.addImage("jethalal",jethalalImg);
  life2.scale=0.2;

  life3.addImage("jethalal",jethalalImg);
  life3.scale=0.2;

  life1.addImage("jethalal",jethalalImg);
  life1.scale=0.2;
 dayaGrp=new Group();
  babitaGrp=new Group();
 gameOver.visible = false;
}

function draw() {


if(gameState==="play"){
    background('gold');  
text("score: "+ score,60,20);
if ( keyDown ("left_arrow") ) {
jethalal.x = jethalal.x-3;

}
if(keyDown("right_arrow")){
  jethalal.x = jethalal.x+3;
}
if(keyDown("up_arrow")){
  jethalal.y=jethalal.y-3;
}
if(keyDown("down_arrow")){
    jethalal.y=jethalal.y+3;
}
spawnBabita();
spawnDaya();


 if(life==2){
  life1.visible=false;
}

 else if (life==1){
  life2.visible=false;
}

else if(life==0){
  life3.visible=false;
  dayaGrp.visible=false;
  babitaGrp.visible=false;
  jethalal.visible=false;
  gameState="end";
}
for(var i=0;i< babitaGrp.length;i++){
  if(babitaGrp.get(i).isTouching(jethalal)){
    babitaGrp.get(i).destroy();
    score=score+1;
  }
}
  

for(var i=0;i< dayaGrp.length;i++){
  if(dayaGrp.get(i).isTouching(jethalal)){
    dayaGrp.get(i).destroy();
    life=life-1;
  }
}




  
}
else if(gameState==="end"){

}
  drawSprites();
}



function spawnBabita(){
if(frameCount % 400 === 0){
  babita=createSprite(Math.round(random(50,550)),-50);
  babita.addImage("babita",babitaImg);
  babita.scale=0.6;
  babita.velocityY= 2;
  jethalal.depth = babita.depth;
babita.setCollider("circle",0,0,30);
  jethalal.depth+=1;
  babita.lifetime=800;
  babitaGrp.add(babita);

//babita.debug=true;
}
}

function spawnDaya(){
  if (frameCount % 180===0 ){
    daya=createSprite(Math.round(random(120,400)),-50);
    daya.addImage("daya",dayaImg);
    daya.scale=0.8;
    daya.velocityY= 2;
    jethalal.depth = daya.depth;
    jethalal.depth+=1;
    daya.setCollider("circle",0,0,40);
    daya.lifetime=800;
    dayaGrp.add(daya);
    
    //daya.debug=true;
  }
}
