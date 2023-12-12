const botao = document.querySelector('#botao');

let lista = [10];
lista[0] = "O que sinto hoje, veio de você e será eternamente por você!"
lista[1] = "A gente briga, a gente se ama, a gente vai e a gente volta. A gente é da gente e da gente ninguém tira."
lista[2] = "O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem."
lista[3] = "Duvida da luz dos astros,"+" De que o sol tenha calor,"+" Duvida até da verdade,"+" Mas confia em meu amor."
lista[4] ="Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?";
lista[5] = "O amor imaturo diz: eu te amo porque preciso de ti"+"."+
"O amor maturo"+"diz: eu preciso de ti porque te amo.";
lista[6] = "O perigo na felicidade - agora tudo está dando certo para mim, amo qualquer destino. Quem quer ser meu destino?";
lista[7] = "Vou me enganar mais uma vez, fingindo que te amo às vezes, como se não te amasse sempre.";
lista[8] = "Às vezes nem me preocupo tanto comigo... Mas há pessoas que amo e não quero vê-las sofrer.";
lista[9] = "Meu amor,a vida passa num instante"+" E um instante é muito pouco pra sonhar.";
lista[10] = "Sei que o amor é um grito no vazio, e que o esquecimento é inevitável, e eu te amo.";
 
botao.onclick = function(){
    let ale = Math.floor(Math.random() * lista.length)
    document.getElementById("f-frase").innerHTML=lista[ale];
}
//const autor = document.getElementById("a-frase").innerHTML="autor";
