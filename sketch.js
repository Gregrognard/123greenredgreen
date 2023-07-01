function setup() {

  createCanvas(1920, 1080)
   randomcolours = round((random(0,3)))
  print(randomcolours)
}

var faster = 0
var game = true
var gameover = false
var randomcolours = 0
var lenght = 1350
var changescene = false
var score = 0

function draw() {
  background(0);

  // TIMER BAR
  fill(0)
  if(lenght<900){
    fill(200,30,30)
  }
  rect(random(48,52),random(948,952),lenght,50)
  lenght -= faster
  fill(0)
  //   UI  


  // SCORE
  rect(1550,30,360,200,20)
  fill(0)
  textSize(100)
  text(score, 1600, 165)
  // GAMEOVER
  if(lenght < 0){
    gameover = true
  }
//GREEN RED RED RED
if(randomcolours == 0){
  stroke(random(255),random(255),random(255))
  strokeWeight(8)
  fill(0)
  //imprect
  rect(random(46,54),random(26,34),300,800, 20)
  fill(255)  
  stroke(255)
  strokeWeight(8)
  rect(400,30,300,800, 20)
  rect(750,30,300,800, 20)
  rect(1100,30,300,800,20)
  stroke(255)
  strokeWeight(8)
  fill(255)
  textSize(100)
  text("D",160,925)

  }
// RED GREEN RED RED
else if(randomcolours == 1){
  stroke(255)
  strokeWeight(8)
  fill(255)
  rect(50,30,300,800, 20)
  stroke(random(255),random(255),random(255))
  strokeWeight(8)
  fill(0)
  //imprect
  rect(random(396,404),random(26,34),300,800, 20)
  fill(255)
  stroke(255)
  strokeWeight(8)  
  rect(750,30,300,800, 20)
  rect(1100,30,300,800,20)
  fill(255)
  textSize(100)
  text("F",520,925)
  }
// RED RED GREEN RED
else if(randomcolours == 2){
  stroke(255)
  strokeWeight(8)
  fill(255)
  rect(50,30,300,800, 20)
  rect(400,30,300,800, 20)
  fill(0)
  stroke(random(255),random(255),random(255))
  strokeWeight(8)
  //imprect
  rect(random(746,754),random(26,34),300,800, 20)
  fill(255)
  stroke(255)
  strokeWeight(8)
  rect(1100,30,300,800,20)
  fill(255)
  textSize(100)
  text("G",855,925)
  }
  // RED RED RED GREEN
  else if(randomcolours == 3){
    stroke(255)
    strokeWeight(8)
    fill(255)
    rect(50,30,300,800, 20)
    rect(400,30,300,800, 20)
    rect(750,30,300,800, 20)
    fill(0)
    stroke(random(255),random(255),random(255))
    strokeWeight(8)
    //imprect
    rect(random(1096,1104),random(26,34),300,800,20)
    stroke(255)
    strokeWeight(8)
    fill(255)
    textSize(100)
    text("H",1210,925)
    }
if(changescene == true){
  randomcolours = round((random(0,3)))
  changescene = false
}
  if(gameover == true){
  createCanvas(1920, 1080);
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
  //FIRST SQUARE
if(keyCode === 68 && randomcolours == 0 && gameover == false){
  randomcolours = round((random(0,3)))
    lenght = 1350
  score += 1
if(faster < 25){
      faster +=0.3
    }
if(faster > 25){
  faster +=0.15
}
}
else if(keyCode === 68 && randomcolours != 0){
  gameover = true
}
//SECOND SQUARE
if(keyCode === 70 && randomcolours == 1 && gameover == false){
  randomcolours = round((random(0,3)))
    lenght = 1350
  score += 1
if(faster < 25){
      faster +=0.5
    }
    if(faster > 25){
      faster +=0.15
    }
}
else if(keyCode === 70 && randomcolours != 1 ){
  gameover = true
      }
//THIRD SQUARE
  if(keyCode === 71 && randomcolours == 2 && gameover == false){
  randomcolours = round((random(0,3)))
    lenght = 1350
    score += 1
if(faster < 25){
      faster +=0.3
    }
    if(faster > 25){
      faster +=0.3
    }
    if(faster > 25){
      faster +=0.15
    }
}
else if(keyCode === 71 && randomcolours != 2){
  gameover = true
      }
//FOURTH SQUARE
if(keyCode === 72 && randomcolours == 3 && gameover == false){
  randomcolours = round((random(0,3)))
    lenght = 1350
    score += 1
if(faster < 25){
      faster +=0.3
    }
    if(faster > 25){
      faster +=0.15
    }
}
else if(keyCode === 72 && randomcolours != 3){
  gameover = true
      }


  if(keyCode === 32 && gameover == true){
    gameover = false
    faster = 0
    lenght = 1350
    score = 0
  }
}

