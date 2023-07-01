function setup() {

  createCanvas(900, 800)
   randomcolours = round((random(0,2)))
  print(randomcolours)
}

var faster = 0
var game = true
var gameover = false
var randomcolours = 0
var lenght = 750
var changescene = false
var score = 0

function draw() {
  background(0);
  fill(255)
  rect(825,30,30,lenght)
  lenght -= faster
  textSize(100)
  text(score, 10, 775)
  
                                  // GAMEOVER
  if(lenght < 0){
    gameover = true
  }
                               //GREEN RED RED
if(randomcolours == 0){
  fill(70,200,50)
  rect(10,30,780,200, 30)
  fill(200,70,50)  
  rect(10,255,780,200, 30)
  rect(10,480,780,200, 30)
  }
                                  // RED GREEN RED
else if(randomcolours == 1){
  fill(200,70,50)
  rect(10,30,780,200, 30)
  fill(70,200,50)
  rect(10,255,780,200, 30)
  fill(200,70,50)  
  rect(10,480,780,200, 30)
  }
                                  // RED RED GREEN
else if(randomcolours == 2){
  fill(200,70,50)
  rect(10,30,780,200, 30)
  rect(10,255,780,200, 30) 
  fill(70,200,50)
  rect(10,480,780,200, 30)
  }
if(changescene == true){
  randomcolours = round((random(0,3)))
  changescene = false
}
  if(gameover == true){
  createCanvas(900, 800);
    background(0)
    fill(random(255),random(255),random(255))
    textSize(60)
    text("LOOSER",random(315,325),random(395,405))
  
    fill(180)
    textSize(32)
    text("press space to restart", 295, 780)
    textSize(150)
    text(score, 380, 620)
    
  }
}



function keyPressed(){
if(keyCode === 97 && randomcolours == 0 && gameover == false){
  randomcolours = round((random(0,2)))
    lenght = 750
  score += 1
if(faster < 19){
      faster +=0.5
    }
}
else if(keyCode === 97 && randomcolours != 0){
  gameover = true
}
if(keyCode === 98 && randomcolours == 1 && gameover == false){
  randomcolours = round((random(0,2)))
    lenght = 750
  score += 1
if(faster < 19){
      faster +=0.5
    }
}
else if(keyCode === 98 && randomcolours != 1 ){
  gameover = true
      }
  if(keyCode === 99 && randomcolours == 2 && gameover == false){
  randomcolours = round((random(0,2)))
    lenght = 750
    score += 1
if(faster < 19){
      faster +=0.3
    }
}
else if(keyCode === 99 && randomcolours != 2){
  gameover = true
      }
  if(keyCode === 32 && gameover == true){
    gameover = false
    faster = 0
    lenght = 750
    score = 0
  }
}

