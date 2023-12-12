/*
  Carro:
*/

//Array
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let vCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]

//Global
let t1Carro = 50;
let t2Carro = 40;

function mCarro(){ 
    for (let i = 0; i < imgCarros.length; i++) {
     image(imgCarros[i], xCarros[i], yCarros[i], t1Carro, t2Carro)
    }
}

function cCarro(){
    for (let i = 0; i < imgCarros.length; i++) {
     xCarros[i] -= vCarros[i]
    }
    
}

function voltaCarro(){
    for (let i = 0; i < imgCarros.length; i++) {
        if (pTela(xCarros[i])) { 
            xCarros[i] = 600;
        }
    }
    
}

function pTela(xCarro){ 
    return xCarro < -50
}