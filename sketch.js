
var monkey , monkeyImage;
var food ,foodImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var setAnimation;
var createSprite;
var spawnFood,spawnObstacles;

function preload(){
    
  monkey_runningImage =loadImage("monkey.png");
  
  foodImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
    createCanvas(600, 200);

  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.5;
  monkey.collide(ground); 
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  var survivalTime = 0;
  
  FoodGroup = new Group(); 
 obstaclesGroup = new Group(); 
 
  score = 0;
}

function draw() {
  background(180);
  
  text("Score: "+ score, 500,50);

  food.scale = 0.05;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time"+survivalTime, 100,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0; 
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1); 
  } 
  
  if(ground.x<0) { ground.x=ground.width/2; } 
  
  if(keyDown("space") ) { 
   monkey.velocityY = -12; 
  } 
   monkey.velocityY = monkey.velocityY + 0.8; 
    
  spawnFood();
  spawnObstacles();   
  
  drawSprites();
  
}

function spawnFood() { 
   //write code here to spawn the Food 
   if (frameCount % 80 === 0) { 
    banana = createSprite(600,250,40,10); 
    banana.y = random(120,200);
    banana.velocityX = -5;
  //assign lifetime to the variable
    banana.lifetime = 300; 
    monkey.depth = banana.depth + 1; 
  //add each banana to the group 
    FoodGroup.add(banana); 
   } 
}

function spawnObstacles() {
  //write code here to spawn the obstacles 
  if (frameCount % 80 === 0) { 
    obstacles = createSprite(600,300,40,10); 
    obstacles.y = random(280,320); 
    obstacles.velocityX = -5; 
    //assign lifetime to the variable 
    obstacles.lifetime = 300; 
    monkey.depth = obstacles.depth + 1; 
    //add each obstacles to the group 
    obstaclesGroup.add(obstacles); 
   } 
 } 
