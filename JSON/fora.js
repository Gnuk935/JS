//falei onde esta
var arquivo = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

//Requisição 
var request = new XMLHttpRequest();

//Peguei o JSON
request.open('GET', arquivo);

//Falei que o tipo é JSON
request.responseType = 'text';

//Mandei
request.send();

//esperando
request.onload = function() {
    var jTXT = request.response;
    var convertido = JSON.parse(jTXT); 
    console.log(convertido);
  }

  