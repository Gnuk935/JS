## JS - B - 06 - Tratamento de dados
>Um resumo da aula seis
## Processo feito no aula:
* Ex 02:
    * criar var 
    ```` 
    var nome = prompt('Diga seu nome');
    ````
    * usar var 
    ```` 
    alert(['Olá,'+ nome] || ['Olá, ${nome}']);
    ````
    >* concatenação (+)
    > * ${var} -> template string 

* Ex: 02:
    Seguiu a log do 02, mas fazendo uma soma!
## Comandos:
* Convertendo para number
````
Number.parse[Int | Float](var) || Number(var)
````
* Convertendo para String
````
String(var) || var.toString
````
* Tamanho
````
 .lenght
````
* Letra grande
````
 .toUpperCase
````
* Letra pequena
````
 .toLowerCase
````
* Escreve no document
````
document.write(`(var)`)
````
* Numero casas decimais 
````
 .toFixed(valor)
````
* Troca
````
 .replaca('oq','por')
````
* Formate para R$
````
.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})
````