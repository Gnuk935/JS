//falei onde esta
var arquivo = "file:///D:/vm/sistema/area_de_trabalho/prog/estudos/JS/JSON/json.json"

//Requisição 
var request = new XMLHttpRequest();

//Peguei o JSON
request.open('GET', arquivo);

//Falei que o tipo é JSON
request.responseType = 'json';

//Mandei
request.send();

//esperando
request.onload = function() {
    var jTXT = request.response;
    var convertido = JSON.parse(jTXT); 
    console.log(convertido);
  }

  