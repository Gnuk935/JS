function tocaSom(SelAud){
    const elemento = document.querySelector(SelAud);
    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }else{
        alert('Se tá tentando me sacanear?')
    }
}

const ListaTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < ListaTeclas.length; i++){
    const tecla = ListaTeclas[i];

    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e){
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (e){
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }
}
