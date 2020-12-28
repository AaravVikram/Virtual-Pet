//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;
var database;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
}


function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  //load images here
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

 

}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0)[
    x=0
  ] 
  else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}

