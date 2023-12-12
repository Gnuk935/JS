/*
  Imagens e sons
*/

//Imgs
let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;

//Sons
let somTrilha;
let somColidiu;
let somPonto;

function preload(){
    imgEstrada = loadImage("img/estrada.png")
    imgAtor = loadImage("img/ator-1.png")
    imgCarro1 = loadImage("img/carro-1.png")
    imgCarro2 = loadImage("img/carro-2.png")
    imgCarro3 = loadImage("img/carro-3.png")
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3]

    somTrilha = loadSound("sons/trilha.mp3")
    somColidiu = loadSound("sons/colidiu.mp3")
    somPonto = loadSound("sons/pontos.wav")
  }