
function exibirFoto(foto) {
    document.getElementById('random_dog').innerHTML = `<img src=${foto.message} alt="cachorro" />`;
}

function gerarFoto() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(foto => exibirFoto(foto))
}

window.onload = function() {
 gerarFoto()
}
