var idade = 12;
console.log(`Voce tem ${idade}`)
console.log(``)
if (idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opicional')
}else{
    console.log('Vota')
}