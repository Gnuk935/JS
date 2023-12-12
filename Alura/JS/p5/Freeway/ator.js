/*
  Avatar:
*/
let xAtor = 100;
let yAtor = 366;
let t1Ator = 30;
let t2Ator = 30;
let bater = false;
let myPontos = 0;

function mAtor(){
    image(imgAtor,xAtor, yAtor, t1Ator, t2Ator)
}

function cAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 10;  
      if(yAtor == height){
        yAtor = 400;
      }
    }
  
    if(keyIsDown(DOWN_ARROW)){
      if (yAtor < 366) {
        yAtor += 10;
      }
    }
}

function bateu(){
  for( let i = 0; i < imgCarros.length; i++){
    bater = collideRectCircle(xCarros[i], yCarros[i], t1Carro, t2Carro, xAtor, yAtor, 15)
    if (bater) {
      retorna()
      somColidiu.play();
      if (myPontos > 0) {
        myPontos -= 1
      }
    }
  }
}

function retorna(){
  yAtor = 366;
}

function addPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(myPontos, width / 5, 27)
}

function mPontos(){
  if (yAtor < 15) {
    somPonto.play()
    myPontos += 1;
    retorna()
  }
}