var nome = prompt('Qual o seu nome?');

document.write(<p>`Olá ${nome} tem ${nome.length} letras.`</p>)
document.write(` Em maiúsculas é ${nome.toUpperCase()}<br>`)
document.write(` Minúsculas é ${nome.toLowerCase()}<br>`)