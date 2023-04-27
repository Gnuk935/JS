function contar(){
    var inicio = document.getElementById('inicio');
    var n1 = Number(inicio.value);
    var fim = document.getElementById('fim')
    var n2 = Number(fim.value);
    var passo = document.getElementById('passo');
    var pulo = Number(passo.value);
    var res = document.getElementById('lista');

    if(n1 == " " || n2 == " " || pulo == " "){
        alert('EXISTEM CAMPOS VAZIOS!')
    }else{
        if(n1 < n2){
            for(var i = n1;i <= n2;i+=pulo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }else{
            for(var i = n1;i >= n2;i -=pulo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}