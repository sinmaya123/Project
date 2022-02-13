var path,boy,sword;
var pathImg,boyImg,bookImg,swordImg,gameOversound,Restart;
var treasureCollection = 0;
var bookG,swordGroup;
var gameOverImg,restartImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
  bookImg = loadImage("books-png.webp");
  swordImg = loadImage("sword.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("Vector-Restart-PNG-File.png");

  gameOversound = loadSound("Super Mario Bros 3.mp3");



 
  
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 15;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
 

bookG=new Group();

swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/3;
  }
  
   
    createBook();
    
    createSword();

    
     if (bookG.isTouching(boy)) {
      bookG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        bookG.destroyEach();
        gameOversound.play();
      
        swordGroup.destroyEach();

        
       
       
       bookG.setVelocityYEach(0);
       
       swordGroup.setVelocityYEach(0);
       gameOver1 = createSprite(200,100,10,10);
       gameOver1.addImage(gameOverImg);
      
       
    
   }
  

      
     
      
    
        
       
        
        
        
        

  }
  
  
  drawSprites();
  textSize(20);
  fill(8);
  text("Books collected : "+ treasureCollection,10,30);
  }

}



function createBook() {
  if (World.frameCount % 20 == 0) {
  var book = createSprite(Math.round(random(50, 350),40, 10, 10));
  book.addImage(bookImg);
  book.scale=0.13;
  book.velocityY = 10;
  book.lifetime = 150;
  bookG.add(book);
}
}



function createSword(){
  if (World.frameCount % 50 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 10;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

