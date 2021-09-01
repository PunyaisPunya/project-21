var astronaut,bg;

function preload(){
  bg = loadImage("images/iss.png");
  astronautImg = loadImage("images/sleep.png")
}

function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(200, 200, 60, 10);
  astronaut.addImage(astronautImg);

}

function draw() {
  background(220);

  
  drawSprites();

}