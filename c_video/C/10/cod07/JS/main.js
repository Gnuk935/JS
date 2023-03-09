var botao = document.getElementById('bot')
botao.addEventListener('click', somar)

function somar(){
    var tn1 = document.getElementById('n1');
    var tn2 = document.querySelector('input#n2');
    var res = document.querySelector('div#res');
    var n1 = Number.parseInt(tn1.value);
    var n2 = Number.parseInt(tn2.value);
    var soma = n1 + n2
    
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`


}