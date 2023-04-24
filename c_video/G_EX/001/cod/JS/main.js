function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');
    var data  = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.innerHTML = '<img src="src/manha.png" alt="foto da manha" id="imagem">'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.innerHTML = '<img src="src/tarde.png" alt="foto da tarde" id="imagem">'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        img.innerHTML = '<img src="src/noite.png" alt="foto da noite" id="imagem">'
        document.body.style.background = '#515154'
    }
}

