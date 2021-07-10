var iss,issImg,bg,space1,space2,space3,space4,spaceCraft
var hasDocked = false

function preload(){
  space1 = loadImage("n/spacecraft1.png")
  space2 = loadImage("n/spacecraft2.png")
  space3 = loadImage("n/spacecraft3.png")
  space4 = loadImage("n/spacecraft4.png")
  bg = loadImage("n/spacebg.jpg")
  issImg = loadImage("n/iss.png")
}

function setup() {
  createCanvas(600,400);
  spaceCraft = createSprite(290, 240)
  spaceCraft.addImage(space1)
  spaceCraft.scale = 0.2

  iss = createSprite(340,130)
  iss.addImage(issImg)
  iss.scale= 0.7
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random (-1,1)
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(space3)
      spaceCraft.x = spaceCraft.x-1
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(space4)
      spaceCraft.x = spaceCraft.x+1
    }

    if(keyDown("UP_ARROW")){
      spaceCraft.addImage(space2)
      spaceCraft.y = spaceCraft.y-2
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(space2)
      spaceCraft.y= spaceCraft.y+2
    }
  }

  if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    fill ("red")
    textSize(25)
    text ("Docking Successfull",200,300)
    
  }


  drawSprites();
}