const botao = document.querySelector('#botao');

let lista = [16];
lista[0] = "Carnaval"
lista[1] = "Troca de gênero"
lista[2] = "Festa junina"
lista[3] = "Halloween"
lista[4] = "Personagens"
lista[5] = "Algum famoso"
lista[6] = "So tem Brasil"
lista[7] = "E se nada ser certo?"
lista[8] = "Proibido mochila"
lista[9] = "Personagens famosos (cada aluno escolhe um personagem com sua inicial)"
lista[10] = "Um dia qualquer"
lista[11] = "Profissões (base de sorteio)"
lista[12] = "Cawtry"
lista[13] = "Super herói"
lista[14] = "Cabelo maluco"
lista[15] = "Crianças"
 
botao.onclick = function(){
    let ale = Math.floor(Math.random() * lista.length)
    document.getElementById("f-frase").innerHTML=lista[ale];
}
//const autor = document.getElementById("a-frase").innerHTML="autor";
