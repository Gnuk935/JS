var p = document.getElementById('bot');
p.addEventListener('click',clique);
function clique(){
    var tVel = document.querySelector('input#tVel');
    var res = document.querySelector('div#res');
    var vel = Number(tVel.value);

    res.innerHTML = `A sua velocidade atual é ${vel} km/h`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por exesso de velocidade</p>`
    }
}