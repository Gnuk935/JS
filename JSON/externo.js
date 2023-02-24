//Caminho do arquivo
var arq = 'https://gnuk935.github.io/Alura/Treino/WEB/pjt/json.json';

//Request
var req = new XMLHttpRequest();

//Tipo de request
req.responseType = 'text';

//Pega
req.open('GET', arq, true)

//trata
req.addEventListener('readystatechange', function() {
    if (req.readyState === 4 && req.status === 200){
        let json = req.responseText;
        const converteOBJ = JSON.parse(json)
        console.log(converteOBJ)
    }
}, false);
req.send();

//Converter JSON para obj
    