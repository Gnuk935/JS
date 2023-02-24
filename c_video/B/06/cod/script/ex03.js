var n1 = Number.parseFloat(prompt('Digite um numero:'));
var n2 = Number.parseFloat(prompt('Digite outro:'));
var soma = n1 + n2;
soma.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})
alert('O resultado é:'+ soma);