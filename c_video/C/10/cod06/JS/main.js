var a = document.getElementById('area');
a.addEventListener('click', clique);
a.addEventListener('mouseenter', entra);
a.addEventListener('mouseout',sair);

function clique(){
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entra(){
    a.innerText = 'Entrou!'
}

function sair(){
    a.innerText = 'saiu!'
    a.style.background = 'green'
}