function tabuada(){
    let num = document.getElementById('num');
    let tab = document.getElementById('seltab')

    let numero = Number(num.value);

    if (num.value.length == 0) {
        alert('Por favor, digite um numero!')
    } else {
        let i = 1
        tab.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${numero} * ${i} = ${numero*i}`
            tab.appendChild(item)
            i++
        }
    }
}