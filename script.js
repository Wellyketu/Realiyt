// script.js

function zoomImage(image) {
    image.classList.add('zoom-in'); // Adiciona a classe zoom-in à imagem clicada

    // Remove a classe após 5 segundos para retornar ao estado original
    setTimeout(function () {
        image.classList.remove('zoom-in');
    }, 3000); // Tempo em milissegundos (5 segundos)
}
