function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mCarro() //Exibe o carro
  mAtor() //Exibe o ator
  cCarro() //Move o carro
  cAtor() //Controla o ator
  voltaCarro() //Loop do carro
  bateu() //veja se bateu
  addPontos() 
  mPontos()
}



