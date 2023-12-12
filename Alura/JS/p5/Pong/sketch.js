//Tamanho da bola
let xBola = 300;
let yBola = 200;
let diametro = 30;
let raio = diametro / 2;

//Velocidade da bola
let xVBola = 6;
let yVBola = 6;

//Tamanho da minha raquete 
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//Inimigo
let xInimigo = 585;
let yInimigo = 150;

//Velocidade do Inimigo
let yVInimigo;


//Config Raquete
let bateu = false;

//Placar
let mPontos = 0;
let iPontos = 0;

//sons 
let sRaquete
let sPonto
let sTrilha

function preload(){
  sTrilha = loadSound("trilha.mp3")
  sPonto = loadSound("ponto.mp3")
  sRaquete = loadSound("raquetada.mp3")
}

//setup
function setup() {
  createCanvas(600, 400);
  sTrilha.loop()
}

//main
function draw() {
  background(0);
  bola()
  raquete(xRaquete, yRaquete)
  mRaquete()
  colidi(xRaquete, yRaquete)
  raquete(xInimigo, yInimigo)
  mInimigo()
  colidi(xInimigo, yInimigo)
  incluirPlacar()
  marcarPonto()
  bolinhaNaoFicaPresa()
}

//Configuração da bola
function bola(){
  circle(xBola, yBola, diametro);
  xBola += xVBola;
  yBola += yVBola;
  
  if(xBola + raio > width || xBola - raio < 0){
    xVBola *= -1;
  }
  
  if(yBola + raio > height || yBola - raio < 0){
    yVBola *= -1;
  }
}

//Gera raquete
function raquete(x, y){
  rect(x, y, wRaquete, hRaquete)
}

//Move raquete
function mRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    if(yRaquete == height){
      yRaquete = 400;
    }
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
}

//checa a colisão da raquete
function colidi(x,y){
  bateu = collideRectCircle(x, y, wRaquete, hRaquete, xBola, yBola, raio);
  if(bateu){
    xVBola *= -1;
    sRaquete.play()
  }
  
  
}

/*INIMIGO*/
//yVInimigo

function mInimigo(){
  if(keyIsDown(87)){
    yInimigo -= 10;
    if(yInimigo == height){
      yInimigo = 400;
    }
  }
  
  if(keyIsDown(83)){
    yInimigo += 10;
  }
}

function incluirPlacar(){
  stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(mPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(iPontos, 470, 26);
}

function marcarPonto(){
    if (xBola > 585) {
        mPontos += 1;
        sPonto.play()
    }
    if (xBola < 15) {
        iPontos += 1;
        sPonto.play()
    }
}


function bolinhaNaoFicaPresa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}
