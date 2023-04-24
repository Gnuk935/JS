function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('nasc');
    var res = document.getElementById('res');
    var rimg = document.getElementById('img')

    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] ANO INVALIDO!')
    }else{
        var idade = ano - Number(fano.value);
        var fsex = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','src/bebe_mas.png')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src','src/jovem_mas.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src','src/adulto_mas.png')
            }else{
                //IDOSO
                img.setAttribute('src','src/idoso_mas.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','src/bebe_fem.png')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src','src/jovem_fem.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src','src/adulto_fem.png')
            }else{
                //IDOSO
                img.setAttribute('src','src/idoso_fem.png')
            }
        }
        res.style.textAlign = 'center'
        rimg.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        rimg.appendChild(img)
    }
}