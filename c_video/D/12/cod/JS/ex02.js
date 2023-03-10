var date = new Date()
var hora = date.getHours()
console.log(`Agora são: ${hora}`)
console.log(``)
if(hora > 0  && hora < 06){
    console.log(`Boa madrugada!`)
}else if (hora < 12){
    console.log(`Bom dia!`)
}else if(hora < 18){
    console.log(`Boa tarde!`)
}else{
    console.log(`Boa noite`)
}